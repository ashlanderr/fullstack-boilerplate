import { trpc } from "./trpc.ts";
import type { User } from "../generated/prisma/client.ts";
import { authClient } from "./auth.ts";
import { useState } from "react";
import { add } from "../shared/utils.ts";

function App() {
  const { isPending, data: session } = authClient.useSession();
  const isLoggedIn = !isPending && session;
  const [sub, setSub] = useState<number>();

  const { data } = trpc.hello.useQuery(undefined);

  trpc.onChange.useSubscription(undefined, {
    onData: (data1) => setSub(data1),
  });

  const user: User | undefined | null = data?.user;

  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const signOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <div>
      {!isLoggedIn && (
        <button
          className="cursor-pointer rounded bg-gray-200 p-2"
          onClick={signIn}
        >
          Sign In
        </button>
      )}
      {isLoggedIn && (
        <button
          className="cursor-pointer rounded bg-gray-200 p-2"
          onClick={signOut}
        >
          Sign Out
        </button>
      )}
      <div>{data?.greeting ?? "Loading..."}</div>
      <div>Subscription: {sub}</div>
      <div>User: {JSON.stringify(user)}</div>
      <div>Add: {add(11, 22)}</div>
    </div>
  );
}

export default App;
