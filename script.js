var email= document.getElementById('exampleInputEmail1')
var email2= document.getElementById('exampleInputEmail2')
var err1= document.getElementById('err1')
var number= document.getElementById("exampleInputMobileNumber1")
var err3= document.getElementById('err3')
var pwd= document.getElementById('pwd')
var cpwd= document.getElementById('cpwd')
var err2= document.getElementById('err2')
var err4= document.getElementById('err4')
var err5= document.getElementById('err5')
var pwd2= document.getElementById('exampleInputPassword2')
var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var poorRegExp = /[a-z]/;
var weakRegExp = /(?=.*?[0-9])/;;
var strongRegExp = /(?=.*?[#?!@$%^&*-])/;

function validatepnumber()
{
    if(number.value.trim()==''){
        err3.innerText='Field cannot be empty';
        number.style.border= '3px solid red'
        return false
       }
  
       else if(!number.value.match(phoneno)) {
       err3.innerText='Phone Number is not in correct format';
       number.style.border= '3px solid red'
             
            return false;
              }
            else
              {
                err3.innerText='';
                number.style.border= '3px solid green'
              return true;
              }
      
      
}



function validatePass()
{
    if(pwd.value.trim()==''){
        err2.innerText='Field cannot be empty';
        pwd.style.border= '3px solid red'
        return false
       }
  
       else if(!pwd.value.match(passwordRegex)) {
       err2.innerText='Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number';
       pwd.style.border= '3px solid red'
             
            return false;
              }
            else
              {
                err2.innerText='';
                pwd.style.border= '3px solid green'
              return true;
              }    
      
}



function validateEmail(){
    // alert('hello')
    if(email.value.trim()==''){
     err1.innerText='Field cannot be empty';
     email.style.border= '3px solid red'
     return false
    }
    else if(!email.value.match(regex)){
     err1.innerText='Email is not in correct format';
     email.style.border= '3px solid red'
     return false
    }
    else {
     err1.innerText='';
     email.style.border= '3px solid green'
     return true
    } 
}

function matchPass() {  
 
    if (pwd.value.trim()=='') {
        err4.innerText="Please enter a password first"
        cpwd.style.border= '3px solid red'
        return false;
      }
    
      if (cpwd.value != pwd.value) {
        err4.innerText='Passwords do not match';
        cpwd.style.border= '3px solid red'
        return false
       // alert("Passwords do not match.");
        
      }
      err4.innerText='';
      cpwd.style.border= '3px solid green'
      return true;
    }
   

function myFunction() {
    
    if (pwd.type === "password") {
      pwd.type = "text";
      cpwd.type = "text";
    } else {
      pwd.type = "password";
      cpwd.type = "password";
    }
  }

  function checkPasswordStrength() {
    var strengthIndicator = document.getElementById("password-strength");
  

    // Reset the indicator color
    strengthIndicator.className = "";

    if (pwd.value.match(strongRegExp)) {
        strengthIndicator.innerText = "Strong";
        strengthIndicator.className = "strong";
    } else if (pwd.value.match(weakRegExp)) {
      strengthIndicator.innerText = "Medium";
      strengthIndicator.className = "medium";
    } else if(pwd.value.match(poorRegExp)) {
      strengthIndicator.innerText = "Weak";
      strengthIndicator.className = "weak";
    }
    else if  (pwd.value.trim()==''){
            
            strengthIndicator.innerText = "";
            strengthIndicator.className = "";
        
    }
  }

  
  
    
  
  
  function validatePass2()
  {
      if(pwd2.value.trim()==''){
          err5.innerText='Field cannot be empty';
          pwd2.style.border= '3px solid red'
          return false
         }
    
         else if(!pwd2.value.match(passwordRegex)) {
         err5.innerText='Enter Valid Password';
         pwd2.style.border= '3px solid red'
               
              return false;
                }
              else
                {
                  err5.innerText='';
                  pwd2.style.border= '3px solid green'
                return true;
                }    
        
  }
  function validateEmail2(){
    // alert('hello')
    if(email2.value.trim()==''){
     err1.innerText='Field cannot be empty';
     email2.style.border= '3px solid red'
     return false
    }
    else if(!email2.value.match(regex)){
     err1.innerText='Email is not in correct format';
     email2.style.border= '3px solid red'
     return false
    }
    else {
     err1.innerText='';
     email2.style.border= '3px solid green'
     return true
    } 
}



function submitCheck() {  
 
  if (pwd.value.trim()=='' || cpwd.value.trim()=='' || email.value.trim()=='' || number.value.trim()=='') {
      alert("Enter all fields")
      return false;
    }
    else if(!pwd.value.match(passwordRegex) || cpwd.value != pwd.value || !email.value.match(regex) || !number.value.match(phoneno))
   {
    alert("Enter all fields in correct format")
      return false
     // alert("Passwords do not match.");
      
    }
    else{

      return true;
    }
   
  }

  function submitCheck2() {  
 
    if (pwd2.value.trim()=='' || email2.value.trim()=='') {
        alert("Enter all fields")
        return false;
      }
      else if(!pwd2.value.match(passwordRegex) || !email2.value.match(regex))
     {
      alert("Enter Valid details")
        return false
       // alert("Passwords do not match.");
        
      }
      else{
  
        return true;
      }
     
    }

