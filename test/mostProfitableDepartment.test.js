var mostProfitableDepartment = require('../mostProfitableDepartment.js');

describe('This mostProfitableDepartment function' , function(){
    it('should check which departments are the most profitable' , function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData));

    });

    it('should check which departments are the most profitable' , function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2));

    });

    it('should check which departments are the most profitable' , function(){
        assert.equal('steelwork', mostProfitableDepartment(salesData3));

    });
});