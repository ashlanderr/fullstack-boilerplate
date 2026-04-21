import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  fetchOptions: {
    retry: {
      type: "exponential",
      attempts: 3,
      baseDelay: 1_000,
      maxDelay: 64_000,
    },
  },
});
