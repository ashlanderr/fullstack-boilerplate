import {readFileSync} from 'node:fs';
import {add} from "../shared/utils.ts";

add(11, 22)
console.log(readFileSync('package.json', 'utf8'));
