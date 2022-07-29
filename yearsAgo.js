module.exports = function yearsAgo (year){
    var date = new Date();
    var yearsInNumbers = date.getFullYear() - year ;
    return yearsInNumbers
  }