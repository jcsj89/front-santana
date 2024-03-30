import { URL } from "@/config/api";
import { useEffect, useState } from "react";

interface BaseProps {
  url: string;
  start: boolean;
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

type Product = {
  id: string;
  description: string;
  detailedProductDescription: string;
  showInWeb: boolean;
};

type FetchReturn = {
  data: Array<Product> | undefined;
  loading: boolean;
  statusCode: number;
};

export function useFetch({ url, start, method, bodyData }: Props): FetchReturn {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusCode, setCode] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      if (loading) return;

      setLoading(true);

      const staticURL = getURL(url);

      const headers =
        bodyData === undefined
          ? undefined
          : { "Content-type": "application/json" };

      try {
        const response = await fetch(staticURL, {
          headers,
          body: bodyData === undefined ? null : JSON.stringify(bodyData),
          method,
        });

        setCode(response.status);

        const respJson = await response.json();

        setData(respJson);
      } catch (err) {
        setData([]);
        return;
      }

      setLoading(false);
    };
    if (start) fetchData();

    console.log("loading in useFetch :" + loading);
    console.log("statuscode in useFetch :" + statusCode);
    console.log("data in useFetch :" + data);
  }, [url]);

  () => {
    setLoading(false);
  };

  return { data, loading, statusCode };
}

export function useGet({ url, start }: BaseProps): FetchReturn {
  return useFetch({ url, method: "GET", start });
}
export function usePost({
  url,
  start,
  method = "POST",
  bodyData,
}: BaseProps & PostProps): FetchReturn {
  return useFetch({ url, method, start, bodyData });
}

function getURL(url: string) {
  const urlExpression =
    "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";
  const regex = new RegExp(urlExpression);
  if (url.match(regex)) {
    return url;
  }
  let mainURL = URL;
  if (mainURL === undefined) return "";
  if (mainURL.charAt(mainURL.length - 1) !== "/") mainURL += "/";

  if (url.length > 0 && url.charAt(0) === "/")
    url = url.substring(1, url.length);
  return mainURL + url;
}
