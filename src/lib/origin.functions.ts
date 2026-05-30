import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/start-server-core";

export const getRequestOrigin = createServerFn({ method: "GET" }).handler(
  () => {
    const url = getRequestUrl();
    return url.origin;
  },
);
