# JavaScript Functions: Best Practices

## Functions

1.  Values passed to a function as parameters are copied to its local variables.
2.  A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
3.  A function can return a value. If it doesn’t, then its result is undefined.
4.  To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.
5.  It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables
    as a side-effect.

## Naming a Function

1. The name should be brief.
2. The name should be as accurate as possible.
3. The name should describe what the function does.
4. A function is an action, so function names are usually verbal.
5. Start a function with a verbal prefix which vaguely describes the action.

## Function can starting with…

- "get…" – return a value
- "calc…" – calculate something
- "create…" – create something
- "check…" – check something and return a boolean. etc.

## One function – one action

1. A function should do exactly what is suggested by its name, no more. Functions should be short and do exactly one thing.
2. Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).
3. A separate function is not only easier to test and debug – its very existence is a great comment!
