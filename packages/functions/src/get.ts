import { Resource } from "sst";
import { Util } from "@notes/core/util";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dy = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const main = Util.handler(async (event) => {
	const params = {
		TableName: Resource.Notes.name,
		Key: {
      			userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
			noteId: event?.pathParameters?.id,
		},
	};

	const result = await dy.send(new GetCommand(params));
	if(!result.Item) {
		throw new Error("Item not found.");
	}

	return JSON.stringify(result.Item);
})
