import { useRegisterUserMutation } from "@/graphql/generated";

export const useSignUpForm = () => { 
    const { mutateAsync, isError, isLoading } = useRegisterUserMutation();


}