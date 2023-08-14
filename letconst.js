var > We are able to redeclare and reassign
let > We can't redeclare but we can reassign
const > We can't redeclare nor reassign


var a = 10

var a > declare
a = 10 > assignment

let a = 10
undefined
> a
10
> let a = 23
Uncaught SyntaxError: Identifier 'a' has already been declared
const a = 12
Uncaught SyntaxError: Identifier 'a' has already been declared
> const a =23
Uncaught SyntaxError: Identifier 'a' has already been declared
> a
10
> const a = 12
Uncaught SyntaxError: Identifier 'a' has already been declared


