import { getCookie } from "cookies-next";
import { Context } from "@apollo/client";
import {
  callFetcher,
  getAccessToken,
} from "./fetcher.helper";

export function graphqlFetcher<TDataRes, TVariables>(
  query: string,
  variables?: TVariables
) {
  const { formData, isFile } = prepareFormData(query, variables);
  return async (ctx?: Context): Promise<any> => {
    const tokenData = getCookie("token", ctx);
    const accessToken =
      tokenData && typeof tokenData == "string"
        ? getAccessToken(tokenData)
        : "";

    const header: any = isFile
      ? {
          Accept: "application/json, text/plain, */*",
          Authorization: "Bearer " + accessToken,
          "Apollo-Require-Preflight": true,
        }
      : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: "Bearer " + accessToken,
        };
    
    const body: BodyInit = isFile
      ? formData
      : JSON.stringify({ query, variables });

    return await callFetcher<TDataRes>(header, body);
  };
}

const prepareFormData = (query: string, variables?: any) => {
  let formData: any;
  formData = null;
  let isFile = false;
  if (typeof window === "object" && typeof FormData !== "undefined") {
    formData = new FormData();
    if (typeof variables === "object") {
      // @ts-ignore
      let counter = 0;
      const operation = JSON.stringify({
        query,
        variables,
        operationName: null,
      });
      formData.append("operations", operation);
      let map = "";
      for (const x in variables) {
        if (variables[x] instanceof File) {
          // @ts-ignore
          const index = `"${counter}"`;
          map +=
            counter > 0
              ? `,${index}:["variables.${x}"]`
              : `${index}:["variables.${x}"]`;
          isFile = true;
          counter++;
        }
      }
      map = `{${map}}`;
      formData.append("map", map);
      let newCounter = 0;
      for (const x in variables) {
        if (variables[x] instanceof File) {
          // @ts-ignore
          formData.append(`${newCounter.toString()}`, variables[x]);
          newCounter++;
        }
      }
    }
  }
  return {
    formData,
    isFile,
  };
};
