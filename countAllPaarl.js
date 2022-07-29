module.exports = function countAllPaarl(regNumbers){

    let counter = 0;
    var fromPaarl = regNumbers.split(",");
    for (var i=0;i<fromPaarl.length;i++) {
      var countPaarl = fromPaarl[i].trim();
      if (countPaarl.startsWith("CJ")) {
  counter++;
      }
    }
    return counter;
  }
 
//  console.log(countAllPaarl('CJ 345 123, CK 345, CJ 123'));