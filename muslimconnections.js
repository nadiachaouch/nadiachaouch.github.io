var http = require('http');

function test(req, res, next) {
  http.get('http://muslim-connections.com', (result) => {
  // If you get here, you have a response.
  // If you want, you can check the status code here to verify that it's `200` or some other `2xx`.
    res.send({ message : 'ok' });
  })
  .on('error', (e) => {
    // Here, an error occurred.  Check `e` for the error.
    this.request({
        uri     : 'api/email'
      , method  : 'POST'
      , json    : {
          to      : 'info@muslim-connections.com'
        , from    : 'info@muslim-connections.com'
        , subject : 'subject: muslim-connections.com error'
        , text    : e
      }
    })
    .pipe(res);
  }); 
}

module.exports = test;
