To transpile each file use the tsc command:

tsc arrays.ts

This produces a javascript file - arrays.js. To run this file use the node command:

node arrays.js

Note when transpiling a file which contains promises, you need to issue the following command:

tsc --target ESNext promises.ts
 