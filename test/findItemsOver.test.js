var findItemsOver = require('../findItemsOver.js');

describe('This findItemsOver function' , function(){
    it('should check a object list and return the a list of items that are higher than the threshold ' , function(){
      assert.deepEqual(results, findItemsOver(itemList, "20"));
    });

    it('should check a object list and return the a list of items that are higher than the threshold' , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, "20"));
      });

      it('should check a object list and return the a list of items that are higher than the threshold' , function(){
        assert.deepEqual(results3, findItemsOver(itemList3, "20"));
      });
});
