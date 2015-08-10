phantom.casperTest = true;
require("utils");
 
var casper = require('casper').create({
    verbose: false, 
    //logLevel: 'debug',
    pageSettings: {
        userAgent: 'Headless JS Frontend Test Agent'
    }
});

casper.on("resource.error", function(resourceError){
    console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
    console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
});

casper.start('http://hamster-sweaters.com/', function() {
        this.test.assertTitle("HAMSTER SWEATERS", 'Title is correct.');
        this.test.assertExists('body', 'Body present.');
}, true);

casper.run(function() {
        this.test.done();
        this.test.renderResults(true);
});
