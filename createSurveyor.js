import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      pk: data.phoneNumber, // Parsed from request body
      sk: data.name, // Parsed from request body
      civicbody: data.civicbody, // Parsed from request body
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
