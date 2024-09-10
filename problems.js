function calculateTax(income, expenses) {
   
  if(income < expenses || income < 0 || expenses < 0){
    return "Invalid Input";
  }

  const remaining = income - expenses;
  const totalTax = remaining * .20;
  return totalTax;

}



function sendNotification(email) {
     
    if(email.includes("@") === false){
    return "Invalid Email"
    }

    const gmail = email.split("@");
    const username = gmail[0];
    const domain = gmail[1];
    
    let notification = username + ' sent you an email from ' + domain;
    return notification;

}



function checkDigitsInName(name) {

    if(typeof name !== 'string' ){
       return "Invalid Input";
    }

    for(let i = 0; i < name.length; i++){
      if(name[i] < 1234567890){
        return true;
      }
    }

    return false;

}




function calculateFinalScore(obj) {
  
    if(typeof obj !== 'object'){
      return "Invalid Input"
    }

    const testScore = 50;
    const schoolGrade = 30;
    const parentProfession = 20;

    let finalScore = obj.testScore + obj.schoolGrade;
     
    if(obj.isFFamily === true){
      finalScore += parentProfession;
    }

    if(finalScore >= testScore + schoolGrade){
      return true;
    }

     return false;

}



function waitingTime(waitingTimes, serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
      return "Invalid Input"
    }

    let sum = 0;
    let count = 0;

    for(let i = 0; i < waitingTimes.length; i++) {
      sum += waitingTimes[i];
      count++; 
    }

    let avg = Math.round(sum / count);
    
    const mySerial = serialNumber - 1;
    const remainingSerial = mySerial - count;

    let waitingTime = avg * remainingSerial;
    return waitingTime;

}