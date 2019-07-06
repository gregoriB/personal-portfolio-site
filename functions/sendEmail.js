exports.handler = (event, context, callback) => {
  console.log(event)
  const respond = body => {
    // console.log(body)
    callback(null, {
      isBase64Encoded: true,
      statusCode: 200,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, application/json, Authorization, X-Requested-With, Content-Type, Accept, X-CLIENT-ID, X-CLIENT-SECRET', 
        'Access-Control-Allow-Credentials': 'true'
      },

      body: JSON.stringify(body.body.name)
    });
  }
  respond();
}