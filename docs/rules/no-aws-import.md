# Don&#39;t import AWS directly, use clients instead. (no-aws-import)

## Rule Details

This rule aims to reduce cold starts of Lambda functions by reducing the bundle size by only including relevant pieces of AWS SDK.

Examples of **incorrect** code for this rule:

```js
import { DynamoDB } from "aws-sdk"
```

Examples of **correct** code for this rule:

```js
import DynamoDB from "aws-sdk/clients/dynamodb"
```

### Options

None.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

- [https://pages.awscloud.com/rs/112-TZM-766/images/2020_0316-SRV_Slide-Deck.pdf](https://pages.awscloud.com/rs/112-TZM-766/images/2020_0316-SRV_Slide-Deck.pdf)
- [https://theburningmonk.com/2019/03/just-how-expensive-is-the-full-aws-sdk/](https://theburningmonk.com/2019/03/just-how-expensive-is-the-full-aws-sdk/)
