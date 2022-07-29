var totalPhoneBill = require('../totalPhoneBill.js');

describe('This totalPhoneBill function' , function(){
    it("should take a string of calls and sms's and calculate and return the total bill" , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

    });

    it("should take a string of calls and sms's and calculate and return the total bill" , function(){
        assert.equal('R10.20', totalPhoneBill('sms, call, call, call, sms, sms'));

    });

    it("should take a string of calls and sms's and calculate and return the total bill" , function(){
        assert.equal('R16.35', totalPhoneBill('sms, call, call, call, sms, sms, call, sms, call'));

    });
});
