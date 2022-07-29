var greet = require('../greet.js');

describe('The greet function' , function(){
    it('should return a greeting' , function(){
        assert.equal("Hello, Tamia", greet("Tamia"));
    });

    it('should return a string' , function(){
        assert.equal("Hello, Allison", greet("Allison"));
    });

    it('should return a string' , function(){
        assert.equal("Hello, Bob", greet("Bob"));
    });
});