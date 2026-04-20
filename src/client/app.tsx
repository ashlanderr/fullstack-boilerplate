import {add} from "../shared/utils.ts";
import {trpc} from "./trpc.ts";
import type {User} from "../generated/prisma/client.ts";

function App() {
  const {data} = trpc.hello.useQuery({id: 'ashlanderr'});

  trpc.onChange.useSubscription(undefined, {
    onData: data1 => console.log('onChange', data1),
  })

  const user: User | undefined = data?.user;

  add(22, 33);
  console.log({user});

  return <div>{data?.greeting ?? 'Loading...'}</div>
}

export default App

