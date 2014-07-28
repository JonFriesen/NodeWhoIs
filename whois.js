var cheerio = require('cheerio');
var request = require('request');
var http = require('http');	

// Setup param
if(process.argv.length <= 3) {
	var lookupURL = process.argv[2];
}
else {
	console.log('Incorrect arguments!');
	console.log('Expected format: node whois.js <URL or IP>');
	process.exit(code=1);
}
// Make HTTP request
var url = 'http://www.whois.net/whois/'+lookupURL;

request(url, function(err, resp, body) {
		$data = "No Data Found";
        if (err)
            throw err;
        $ = cheerio.load(body);
        // Extracting Data
        $('#whois_info').each(function() {
    		$data = $(this).text();
		});

		http.createServer(function(request, response) { 
	        response.writeHeader(200, {"Content-Type": "text/html"});  
	        response.write($data);  
	        response.end();  
    	}).listen(8080, '127.0.0.1');
    });