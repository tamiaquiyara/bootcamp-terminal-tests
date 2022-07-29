module.exports = function countRegNumber(regNo){
    var regCount = regNo.split(",");
      return regCount.length;
    }