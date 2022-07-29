var countRegNumber = require('../countRegNumber.js');

describe('This countRegNumber function' , function(){
    it('should check and return how many registration numbers there are in a string' , function(){
        assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"));

    });

    it('should check and return how many registration numbers there are in a string' , function(){
        assert.equal(5,countRegNumber("CA 182736,CY 523519,CJ 812328, CK 456765, CA 345673"));

    });

    it('should check and return how many registration numbers there are in a string' , function(){
        assert.equal(2,countRegNumber("CA 182736,CY 523519"));

    });

});