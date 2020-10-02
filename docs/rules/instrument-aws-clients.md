# Always instrument AWS SDK code with X-Ray (instrument-aws-clients)

Please describe the origin of the rule here.

## Rule Details

This rule aims to make sure all your AWS SDK client instances are instrumented using AWS X-Ray. This allows you to investigate which parts of your application are bottlenecks.

Examples of **incorrect** code for this rule:

```js
import SecretsManager from "aws-sdk/clients/secretsmanager"

const ssm = new SecretsManager()
```

Examples of **correct** code for this rule:

```js
import SecretsManager from "aws-sdk/clients/secretsmanager"

const ssm = new SecretsManager()
AWSXRay.captureAWSClient(ssm)
```

## When Not To Use It

Turn off this rule if you're using other instrumentation tools.

## Further Reading

- [https://aws.amazon.com/xray/](https://aws.amazon.com/xray/)
- [https://docs.aws.amazon.com/xray-sdk-for-nodejs/latest/reference/index.html](https://docs.aws.amazon.com/xray-sdk-for-nodejs/latest/reference/index.html)
- [https://github.com/aws/aws-xray-sdk-node](https://github.com/aws/aws-xray-sdk-node)
- [https://www.youtube.com/watch?v=JBOo2L4sqt8](https://www.youtube.com/watch?v=JBOo2L4sqt8)
