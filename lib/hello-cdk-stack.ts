import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //make an S3 bucket that enables versioning and encrption
    const bucket = new cdk.aws_s3.Bucket(this, "XXXXXXXXXXXXX", {
      versioned: true,
      encryption: cdk.aws_s3.BucketEncryption.KMS_MANAGED,
    });
    // example resource
    // const queue = new sqs.Queue(this, 'HelloCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
