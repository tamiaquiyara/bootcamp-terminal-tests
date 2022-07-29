module.exports = function regCheck(regNo,location){
    
    var check = regNo.endsWith(location);
    return check;
    }