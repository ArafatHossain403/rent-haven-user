import { cookies } from "next/headers";
import { GraphQLClient, RequestDocument, Variables } from "graphql-request";
import { TypedDocumentNode } from "@apollo/client";
import { getAccessToken, processErrorResponse } from "./fetcher.helper";

export async function graphqlSSRFetcher<TDataRes, TVariables>(
  document: RequestDocument | TypedDocumentNode,
  variables?: TVariables,
  token?: string,
  headers?: {[key: string]: string}
) {
  const tokenData =  cookies().get("token")?.value || "";
  const accessToken = token || getAccessToken(tokenData);

  const graphqlRequest = new GraphQLClient(
    process.env.NEXT_PUBLIC_API_URL as string,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + accessToken,
        ...(headers ? headers : {})
      },
    }
  );

  try {
    const response = <TDataRes>(
      await graphqlRequest.request(document, <Variables>variables)
    );
    return response;
  } catch (error: any) {
    processErrorResponse(error.response);
  }
}

