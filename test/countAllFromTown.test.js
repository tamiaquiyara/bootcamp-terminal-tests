var countAllFromTown = require('../countAllFromTown.js');

describe('This countAllFromTown function' , function(){
    it('should take a string of registration numbers and return the number for each town' , function(){
        assert.equal("3",countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));

    });

    it('should take a string of registration numbers and return the number for each town' , function(){
        assert.equal("1",countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));

    });

    it('should take a string of registration numbers and return the number for each town' , function(){
        assert.equal("2",countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CY 341','CY'));

    });
});