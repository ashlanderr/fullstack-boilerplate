import { useSession } from "../../components";
import { useState } from "react";
import { trpc } from "../../trpc.ts";
import type { User } from "../../../generated/prisma/client.ts";
import { add } from "../../../shared/utils.ts";
import { authClient } from "../../auth.ts";

export function Home() {
  const session = useSession();

  const [sub, setSub] = useState<number>();

  const { data } = trpc.hello.useQuery(undefined);

  trpc.onChange.useSubscription(undefined, {
    onData: (data1) => setSub(data1),
  });

  const user: User | undefined | null = data?.user;

  const signOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <div>
      <button
        className="cursor-pointer rounded bg-gray-200 p-2"
        onClick={signOut}
      >
        Sign Out
      </button>
      <div>{data?.greeting ?? "Loading..."}</div>
      <div>Subscription: {sub}</div>
      <div>Session user: {JSON.stringify(session.user)}</div>
      <div>User: {JSON.stringify(user)}</div>
      <div>Add: {add(11, 22)}</div>
    </div>
  );
}
