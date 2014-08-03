var whoare = require('whoare');

// Setup param
if(process.argv.length <= 3) {
	var lookupURL = process.argv[2];
}
else {
	console.log('Incorrect arguments!');
	console.log('Expected format: node whois.js <URL>');
	process.exit(code=1);
}

console.log('Looking up: '+lookupURL);

whoare.you(lookupURL, function(data){
	        	console.log(data);
});