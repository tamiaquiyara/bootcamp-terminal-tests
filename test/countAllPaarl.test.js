var countAllPaarl = require('../countAllPaarl.js');

describe('This countAllPaarl function' , function(){
    it('should check the registration numbers and return how many are from Paarl' , function(){
        assert.equal('2', countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

    it('should check the registration numbers and return how many are from Paarl' , function(){
        assert.equal('3', countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    
    it('should check the registration numbers and return how many are from Paarl' , function(){
        assert.equal('4', countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123, CJ 2345, CL 123-546, CK 345'));
    });
});