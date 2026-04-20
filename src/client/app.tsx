import {add} from "../shared/utils.ts";
import {useState} from "react";
import type {Foo} from "../server/main.tsx";

function App() {
  add(22, 33);
  const [state,] = useState<Foo>({foo: 'aaa', bar: 11});

  console.log(state);

  return <div>Hello World111222!</div>
}

export default App

