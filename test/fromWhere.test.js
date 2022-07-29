var fromWhere = require('../fromWhere.js');

describe('This fromWhere function' , function(){
    it(" should take a car registration number as a parameter and returns which town it's from" , function(){
        assert.equal("Paarl", fromWhere("CJ"));
    });

    it(" should take a car registration number as a parameter and returns which town it's from" , function(){
        assert.equal("Cape Town", fromWhere("CA"));
    });

    it(" should take a car registration number as a parameter and returns which town it's from" , function(){
        assert.equal("Bellville", fromWhere("CY"));
    });
});