module.exports = function totalPhoneBill(contact){

    var contactString = contact.split(', ');
    var call = 0;
    var sms = 0;
    for(var i = 0; i < contactString.length; i++){
        var bill = contactString[i];
        if(bill === 'call'){
          call+= 2.75;
          }else{
            sms+= 0.65;
            }
        }
      var totalBill = call + sms;
     return 'R' + totalBill.toFixed(2);
    
    } 
    // console.log(totalPhoneBill());
    