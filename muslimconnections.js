var http = require('http');
http.get('http://muslim-connections', function (res) {
  // If you get here, you have a response.
  // If you want, you can check the status code here to verify that it's `200` or some other `2xx`.

}).on('error', function(e) {
  // Here, an error occurred.  Check `e` for the error.
  
  module.exports = function(req, res, next){
  this.request({
        uri     : 'api/email'
      , method  : 'POST'
      , json    : {
          to      : 'hello@taskmill.io'
        , from    : 'hello@taskmill.io'
        , subject : 'subject: muslim-connections.com error'
        , text    : e
      }
    })
    .pipe(res);
};

});;
