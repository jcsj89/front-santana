import { useState } from "react";
import { URL } from "@/config/api";

// type FetchReturn = {
//   data: Array<any> | undefined;
//   loading: boolean;
//   statusCode: number;
// };

interface BaseProps {
  url: string;
  action: (data: any) => void;
}

type GetProps = {
  method: "GET" | "HEAD";
  bodyData?: never;
};

type PostProps = {
  method: "POST" | "DELETE" | "PUT" | "PATCH";
  bodyData: object;
};

type ConditionalProps = GetProps | PostProps;

type Props = BaseProps & ConditionalProps;

// interface IHttpRequest {
//   url: string;
//   method: "GET" | "HEAD" | "POST" | "DELETE" | "PUT" | "PATCH";
//   body?: any;
//   action: (data: any) => void;
// }

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  const [statusText, setStatusText] = useState("");
  const [error, setError] = useState<any>(null);

  const sendHttpRequest = async ({ url, method, bodyData, action }: Props) => {
    if (loading === true) return;

    const headers =
      bodyData === undefined
        ? undefined
        : { "Content-type": "application/json" };

    setLoading(true);

    try {
      const data = await fetch(URL + url, {
        method: method.toUpperCase(),
        headers,
        body: bodyData === undefined ? null : JSON.stringify(bodyData),
      });

      // console.log("data in useHttp.ts: ");
      // console.log(data);

      setStatusCode(data.status);

      setStatusText(data.statusText);

      const resp = await data.json();

      action(resp);

      console.log("useHttp.ts");
      console.log("Data recovered from API with success.");
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { error, sendHttpRequest, loading, statusCode, statusText };
};
