import {
  CreateUserInputDto,
  LoginDto,
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/graphql/generated";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {  setCookie } from "cookies-next";


export const useLoginForm = () => {
  const router = useRouter();
  const { mutateAsync, isError, isLoading } = useLoginUserMutation();

  const login = async (payload: LoginDto) => {
    try {
      console.log("payload", payload);
      const res = await mutateAsync({ data: payload });
      const msg = res?.data?.message;
      if (!res?.data.success) {
        toast.error(String(msg));
      } else {
        toast.success(String(msg));
        setCookie("token", res?.data?.token);
        setCookie("deviceToken", res?.data?.deviceToken);
        router.push("/");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred.");
    }
  };

  return { login, isError, isLoading };
};
