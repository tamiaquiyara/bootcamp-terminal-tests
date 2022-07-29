var regCheck = require('../regCheck.js');

describe('This regCheck function' , function(){
    it('should return true if the registration numbers are for GP, L, EC or MP' , function(){
        assert.equal(true,regCheck('RG 45 HN GP','GP'));
    });

    it('should return false if the registration numbers are not for GP, L, EC or MP' , function(){
        assert.equal(false,regCheck('CA 1234-123','CA'));
    });

    it('should return false if the registration numbers are incorrect' , function(){
        assert.equal(false,regCheck('LKG 679 EC','MP'));
    });
});