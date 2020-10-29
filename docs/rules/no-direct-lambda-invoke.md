# Do not invoke Lambdas directly (no-direct-lambda-invoke)

## Rule Details

In most cases invoking Lambda functions directly inside Lambda functions can be considered as an antipattern.

Examples of **incorrect** code for this rule:

```js
new AWS.Lambda().invoke({ ... });

new AWS.Lambda().invokeAsync({ ... });
```

Examples of **correct** code for this rule:

```js
// no such code at all
```

## When Not To Use It

Turn off this rule if you're using other instrumentation tools.

## Further Reading

- [https://twitter.com/benjamin_l_s/status/1310571746559496198](https://twitter.com/benjamin_l_s/status/1310571746559496198)
- [https://twitter.com/brianleroux/status/1309864339889741824](https://twitter.com/brianleroux/status/1309864339889741824)
