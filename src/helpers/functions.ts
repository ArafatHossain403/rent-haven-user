export function clearTrailingSlash(str: string) {
  return str.replace(/\/$/, "");
}

export const getApiUrl = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url) throw new Error("No API url found in the env.");
  else return clearTrailingSlash(url);
};

export const getBackendBaseUrl = () => {
  return getApiUrl().replace("/graphql", "");
};
