// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require('aws-sdk');
var ses = new aws.SES({region: 'ap-southeast-2'});

exports.handler = (event, context, callback) => {
    
    var params = {
        Destination: {
            ToAddresses: ["receiver@example.com"]
        },
        Message: {
            Body: {
                Text: { Data: "Please visit the test link: http://pj-spring-elb-846685985.ap-southeast-2.elb.amazonaws.com:8080/ and make further decision. \n"+
                                "If there's no action taken after 10 minutes in CodePipeline, the traffic will be shifted to the new replacement task set."
                    
                }
                
            },
            
            Subject: { Data: "Spring Deployment is ready"
                
            }
        },
        Source: "sender@example.com"
    };

    
    ses.sendEmail(params, function (err, data) {
	    callback(null, {err: err, data: data});
	    if (err) {
		console.log(err);
		context.fail(err);
	    } else {
            
		console.log(data);
		context.succeed(event);
	    }
	});
};