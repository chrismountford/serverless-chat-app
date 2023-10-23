import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class ChatappStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, 'chat-table', {
      tableName: 'serverless-chat-table',
      partitionKey: {
        name: 'connectionId',
        type: dynamodb.AttributeType.STRING
      }
    });
  }
}
