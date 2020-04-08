var AWS = require('aws-sdk');
var ecs = new AWS.ECS();
exports.handler = (event, context, callback) => {
    var params = {
        cluster: "repocccluster", 
        launchType: 'FARGATE',
        taskDefinition: "repocc:1",
        count: 1,
        platformVersion: 'LATEST',
        networkConfiguration: {
            awsvpcConfiguration: {
		subnets: [ /* required */
			  'subnet-id1',
			  'subnet-id1'
			   ],
		assignPublicIp: 'ENABLED',
            }      
        }
    };
    ecs.runTask(params, function(err, data) {
	    if (err) console.log(err, err.stack); // an error occurred
	    else     console.log(data);           // successful response
	});
};
