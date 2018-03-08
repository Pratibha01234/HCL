var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('success');
        done();
    });
});

it('Exercise1 status', function(done) {
    request('http://localhost:8080/exercise1' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Exercise2 status', function(done) {
    request('http://localhost:8080/exercise2' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});