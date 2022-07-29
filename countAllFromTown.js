module.exports = function countAllFromTown(regNumbers,reglocation){
    let counter = 0
   var regNumbersSplit = regNumbers.split(",");
    for (var i=0;i<regNumbersSplit.length;i++){
       var regNumbers = regNumbersSplit[i].trim();
      if(regNumbers.startsWith(reglocation)){
     counter++;
  } 
   }
  return counter;
  }