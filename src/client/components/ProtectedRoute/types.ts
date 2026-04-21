import type { authClient } from "../../auth.ts";

export type Session = NonNullable<
  ReturnType<typeof authClient.useSession>["data"]
>;
