import { SessionContext } from "./constants.ts";
import { useContext } from "react";

export function useSession() {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error("useSession must be used within ProtectedRoute");
  }
  return session;
}
