import { fooA, bazA } from './liba.js';
import fooB from "./libb.js";
import { fooC } from './libc.cjs';


console.log(fooA());
console.log(bazA);

console.log(fooB());

console.log(fooC());