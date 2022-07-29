var isWeekday = require('../isWeekday.js');

describe('This isWeekday function' , function(){
    it("should check the days of the week and return true if it's a weekday " , function(){
        assert.equal(true,isWeekday("Monday"));
    });

    it("should check the days of the week and return false if it's  not a weekday " , function(){
        assert.equal(false,isWeekday("Saturday"));
    });

    it("should check the days of the week and return false if it's  not a weekday " , function(){
        assert.equal(false,isWeekday("Sunday"));
    });
});
