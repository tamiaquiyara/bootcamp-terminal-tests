let assert = require("assert");
var yearsAgo = require('../yearsAgo.js');

describe('This yearsAgo function' , function(){
    it('should calculate how many years from a specific year there are to the current year' , function(){
        assert.equal("46", yearsAgo(1976));

    });

    it('should calculate how many years from a specific year there are to the current year' , function(){
        assert.equal("75", yearsAgo(1947));

    });

    it('should calculate how many years from my birthday year there are to the current year' , function(){
        assert.equal("23", yearsAgo(1999));

    });
});