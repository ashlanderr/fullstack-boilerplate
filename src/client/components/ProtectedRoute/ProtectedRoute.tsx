import { authClient } from "../../auth.ts";
import { Navigate, Outlet } from "react-router";
import { SessionContext } from "./constants.ts";

export function ProtectedRoute() {
  const { isPending, data } = authClient.useSession();

  if (!isPending && !data) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  if (isPending) {
    return null;
  }

  return (
    <SessionContext value={data}>
      <Outlet />
    </SessionContext>
  );
}
