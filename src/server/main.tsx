import {readFileSync} from 'node:fs';
import {add} from "../shared/utils.ts";

export interface Foo {
    foo: string;
    bar: number;
}

add(11, 22)
console.log(readFileSync('package.json', 'utf8'));
