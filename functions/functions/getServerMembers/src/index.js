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
    "collectionId":"6407d0c519ecaeb89836",
    "documentId":"64126514c5d24ae2cc9e"
  }
*/

module.exports = async function (req, res) {
  const client = new sdk.Client();

  const database = new sdk.Databases(client);
  const teams = new sdk.Teams(client);
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

  const { databaseId, collectionId, documentId } = JSON.parse(req.payload);

  const database_results = await database.getDocument(
    databaseId,
    collectionId,
    documentId
  );

  const teams_results = await teams.listMemberships(database_results.team);
  const user_results = await users.list();

  const members = teams_results.memberships.map((teamMember) => {
    const user = user_results.users.filter(
      (x) => x.$id == teamMember.userId
    )[0];

    return {
      user: {
        id: user.$id,
        name: user.name,
        prefs: user.prefs,
      },
      member: teamMember,
    };
  });

  // const members = teams_results.memberships.reduce(
  //   (groups, item) => ({
  //     ...groups,
  //     [item.roles.toLowerCase()]: [
  //       ...(groups[item.roles.toLowerCase()] || []),
  //       item,
  //     ],
  //   }),
  //   {}
  // );

  res.json({
    status: "Success",
    members: members,
    total: teams_results.total,
  });
};
