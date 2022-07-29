var isFromBellville = require('../isFromBellville.js');

describe('This isFromBellville' , function(){
    it('should return true if the registration number starts with CY' , function(){
        assert.equal(true, isFromBellville("CY 123"));
    });

    it('should return false if the registration number does not start with CY' , function(){
        assert.equal(false, isFromBellville("CA 123"));
    });

    it('should return true if the registration number does start with CY' , function(){
        assert.equal(true, isFromBellville("CY 465"));
    });
});
