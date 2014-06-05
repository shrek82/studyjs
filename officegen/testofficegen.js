var http = require("http");
var officegen = require('officegen');

http.createServer(function(request, response) {

  response.writeHead(200, {
    "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    'Content-disposition': 'attachment; filename=surprise.docx'
  });

  var docx = officegen('docx');

  docx.on('finalize', function(written) {
    console.log('on finalize!')
  });

  docx.on('error', function(err) {
    console.log('on error');
  });

  // ... (fill docx with data)

  docx.generate(response);

}).listen(3000);
