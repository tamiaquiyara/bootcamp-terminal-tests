var findItemsOver20 = require('../findItemsOver20.js');

describe('This findItemsOver20 function' , function(){
    it('should check a object list and return the a list of items that are over 20' , function(){
      assert.deepEqual(results, findItemsOver20(itemList));
    });

    it('should check a object list and return the a list of items that are over 20' , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
      });

      it('should check a object list and return the a list of items that are over 20' , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
      });
});