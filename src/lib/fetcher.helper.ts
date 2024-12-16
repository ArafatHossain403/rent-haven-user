export function getAccessToken(tokenData: string): string {
  if (!tokenData) return "";

  let tokenObject = null;
  try {
    if (typeof tokenData === "string") {
      tokenObject = tokenData ? JSON.parse(tokenData) : null;
    }
  } catch (error) {
    // console.log(error);
  }

  const accessToken =
    tokenObject !== null && tokenObject.hasOwnProperty("accessToken")
      ? tokenObject.accessToken
      : "";

  return accessToken;
}

export async function callFetcher<TDataRes>(
  header: HeadersInit | undefined,
  body: BodyInit | null | undefined
) {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(url as string, {
    method: "POST",
    headers: header,
    body: body,
  });
  const json = await res.json();

  if (json.errors) {
    processErrorResponse(json);
  }

  return <TDataRes>json.data;
}

export function processErrorResponse(response: any) {
  const errs = response.errors[0];
  const code = errs.code;
  const msg = errs.message;

  throw new CustomError(msg, code);
}

export class CustomError extends Error {
  code = 400;
  constructor(message: string, code: number = 400) {
    super(message);
    this.code = code;
    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  getErrorMessage() {
    return "Something went wrong: " + this.message;
  }
}
