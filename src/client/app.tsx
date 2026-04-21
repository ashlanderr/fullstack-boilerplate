import {add} from "../shared/utils.ts";
import {trpc} from "./trpc.ts";
import type {User} from "../generated/prisma/client.ts";
import {authClient} from "./auth.ts";

function App() {
  const {isPending, data: session} = authClient.useSession();
  const isLoggedIn = !isPending && session;

  console.log({isPending, session});

  const {data} = trpc.hello.useQuery({id: 'ashlanderr'});

  trpc.onChange.useSubscription(undefined, {
    onData: data1 => console.log('onChange', data1),
  })

  const user: User | undefined = data?.user;

  add(22, 33);
  console.log({user});

  const signIn = async () => {
    authClient.signIn.social({
      provider: 'google',
    })
  }

  return <div>
    {!isLoggedIn && (
        <button onClick={signIn}>Sign In</button>
    )}
    <div>{data?.greeting ?? 'Loading...'}</div>
  </div>
}

export default App

