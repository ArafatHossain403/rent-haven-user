import { getApiUrl } from "@/helpers/functions";
import { APIConfigType } from "./config";
const APIConfig: APIConfigType = {
  endpoint: getApiUrl(),
  fetchParams: {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
};
export default APIConfig;
