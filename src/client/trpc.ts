import { createWSClient, httpBatchLink, splitLink, wsLink } from "@trpc/client";
import type { AppRouter } from "../server/router";
import { createTRPCReact } from "@trpc/react-query";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const wsUrl = new URL("/trpc", window.location.href);
wsUrl.protocol = wsUrl.protocol.replace("http", "ws");

const wsClient = createWSClient({
  url: wsUrl.href,
});

const trpcClientOptions = {
  links: [
    splitLink({
      condition: (op) => op.type === "subscription",
      true: wsLink({ client: wsClient }),
      false: httpBatchLink({
        url: "/trpc",
      }),
    }),
  ],
};

export const trpc = createTRPCReact<AppRouter>();
export const trpcClient = trpc.createClient(trpcClientOptions);
