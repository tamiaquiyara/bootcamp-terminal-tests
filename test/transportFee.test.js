var transportFee = require('../transportFee.js');

describe('This transportFee function' , function(){
    it("returns the right price based on the shift you're working" , function(){
        assert.equal('R20', transportFee('morning'));

    });

    it("returns the right price based on the shift you're working" , function(){
        assert.equal('free', transportFee('nightshift'));

    });

    it("returns the right price based on the shift you're working" , function(){
        assert.equal('R10', transportFee('afternoon'));

    });
});
