function calculate(){
  var finalfee = 0;
  var Workshop = document.querySelector('input[name="Workshop"]:checked').value;
  if(Workshop =='Introduction to E-commerce'){
    finalfee = 295;
  }
  else if(Workshop =='The Future of the Web'){
    finalfee = 295;
  }
  else if(Workshop =='Web Programming'){
    finalfee = 395;
  }
  else if (Workshop =='Network Security') {
    finalfee = 395;
  }
  if(document.querySelector('[name="dinner"]:checked') != null) {
    document.getElementById("fee").setAttribute('value', '$' + (finalfee + 30));
  }
  else {
    document.getElementById("fee").setAttribute('value', '$' + finalfee);    
  }  
}