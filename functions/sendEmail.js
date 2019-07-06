exports.handler = (event, _, callback) => {
  console.log(event.body)
  callback(null, {
    statusCode: 200,
    headers: { 
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "POST",
      'Access-Control-Allow-Headers': 'Content-Type', 
    },
    body: JSON.stringify(event.body)
  });
}