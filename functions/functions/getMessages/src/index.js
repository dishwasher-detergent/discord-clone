const sdk = require("node-appwrite");

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.

  {
    "databaseId":"6407d0b0c40a37d4f06c",
    "collectionId":"6407d0ca13d1d255cd32",
    "server":"6407d4d050e0aba23b9d",
    "channel":"6407dda5c9524982b03e",
    "limit":25
  }
*/

module.exports = async function (req, res) {
  const client = new sdk.Client();

  const database = new sdk.Databases(client);
  const users = new sdk.Users(client);

  if (
    !req.variables["APPWRITE_FUNCTION_ENDPOINT"] ||
    !req.variables["APPWRITE_FUNCTION_API_KEY"]
  ) {
    console.warn(
      "Environment variables are not set. Function cannot use Appwrite SDK."
    );
    res.json({
      status: "Failed",
      messages: [],
    });
  } else {
    client
      .setEndpoint(req.variables["APPWRITE_FUNCTION_ENDPOINT"])
      .setProject(req.variables["APPWRITE_FUNCTION_PROJECT_ID"])
      .setKey(req.variables["APPWRITE_FUNCTION_API_KEY"])
      .setSelfSigned(true);
  }

  const { databaseId, collectionId, server, channel, limit } = JSON.parse(
    req.payload
  );

  const database_results = await database.listDocuments(
    databaseId,
    collectionId,
    [
      sdk.Query.equal("server", server),
      sdk.Query.equal("channel", channel),
      sdk.Query.orderDesc("$createdAt"),
      sdk.Query.limit(limit),
    ]
  );
  const user_results = await users.list();

  const messages = database_results.documents.map((message) => {
    const user = user_results.users.filter((x) => x.$id == message.creator)[0];

    return {
      user: {
        id: user.$id,
        name: user.name,
        prefs: user.prefs,
      },
      message: message,
    };
  });

  res.json({
    status: "Success",
    messages: messages,
  });
};
