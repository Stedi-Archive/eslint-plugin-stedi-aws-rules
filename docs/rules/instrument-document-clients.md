# Always instrument DynamoDB.DocumentClient code with X-Ray (instrument-document-clients)

`DocumentClient` is a special case in AWS SDK. It has to be treated differently than the rest of AWS SDK services.

## Rule Details

This rule aims to make sure all your AWS DynamoDB DocumentClient instances are instrumented using AWS X-Ray. This allows you to investigate which calls to DynamoDB are bottlenecks.

Examples of **incorrect** code for this rule:

```js
import DynamoDB from "aws-sdk/clients/dynamodb"

const dynamoClient = new DynamoDB.DocumentClient()
```

Examples of **correct** code for this rule:

```js
import DynamoDB from "aws-sdk/clients/dynamodb"

const dynamoClient = new DynamoDB.DocumentClient()
AWSXRay.captureAWSClient((dynamoClient as any).service);
```

## When Not To Use It

Turn off this rule if you're using other instrumentation tools.

## Further Reading

- [https://aws.amazon.com/xray/](https://aws.amazon.com/xray/)
- [https://docs.aws.amazon.com/xray-sdk-for-nodejs/latest/reference/index.html](https://docs.aws.amazon.com/xray-sdk-for-nodejs/latest/reference/index.html)
- [https://github.com/aws/aws-xray-sdk-node](https://github.com/aws/aws-xray-sdk-node)
- [https://www.youtube.com/watch?v=JBOo2L4sqt8](https://www.youtube.com/watch?v=JBOo2L4sqt8)
