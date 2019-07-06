exports.handler = (event, context, callback) => {
  console.log(event.body)
  callback(null, {
    statusCode: 200,
    headers: { 
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, application/json, Authorization, X-Requested-With, Content-Type, Accept, X-CLIENT-ID, X-CLIENT-SECRET', 
      'Access-Control-Allow-Credentials': 'true'
    },
    body: JSON.stringify(event.body)
  });
}