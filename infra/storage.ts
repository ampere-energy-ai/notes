export const uploads = new sst.aws.Bucket("Uploads", {
	cors: true,
});
					 
export const table = new sst.aws.Dynamo("Notes", {
	fields: {
		userId: "string",
		noteId: "string",
	},
	primaryIndex: {hashKey: "userId", rangeKey: "noteId"},
});

// Create a secret for Stripe
export const secret = new sst.Secret("StripeSecretKey");
