import {add} from "../shared/utils.ts";
import {trpc} from "./trpc.ts";

function App() {
  const {data} = trpc.hello.useQuery({name: 'Foo'});

  trpc.onChange.useSubscription(undefined, {
    onData: data1 => console.log('onChange', data1),
  })

  add(22, 33);
  console.log(data);

  return <div>{data?.greeting ?? 'Loading...'}</div>
}

export default App

