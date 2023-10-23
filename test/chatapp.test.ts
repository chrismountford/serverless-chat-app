import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ChatappStack } from '../lib/chatapp-stack';


test('DynamoDB table created', () => {
    const app = new cdk.App();
    const stack = new ChatappStack(app, 'fake-stack', {});

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::DynamoDB::Table',
    {
        TableName: 'serverless-chat-table',
        KeySchema: [
            {
                AttributeName: "connectionId",
                KeyType: 'HASH'
            }
        ]
    });
});
