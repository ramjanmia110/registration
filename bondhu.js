
// // error message 
// // success message 
// // Check email vaild
// // check input length 
// // get Fieldname 
// // get checkpassword match 
// // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let username =document.querySelector("#username");
let email =document.querySelector("#email");
let password =document.querySelector("#password");
let password2 =document.querySelector("#password2");
let form =document.querySelector(".form");
let togglePassword =document.querySelector("#togglePassword");
let togglePassword1 =document.querySelector("#togglePassword1")

// show error message section 

function showError(input,message){
   const formControl =input.parentElement;
   formControl.className ='form-control error';
   const span =formControl.querySelector('span');
   span.innerText =message;
}



//show success message section 

function showSuccess(input){
    const formControl =input.parentElement;
    formControl.className ='form-control success';
   
}

// check email validation 

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        showSuccess(input)
    }else {
        showError(input,'Email Is Not Valid');
    }
}


//check input length 

function checklength(input,min,max){
  if(input.value.length < min){
    showError(input,`${getFieldName(input)} Must be at least ${min} characters`)
  }else if(input.value.length > max){
    showError(input,`${getFieldName(input)} Must be less than ${max}characters`)
  }else{
    showSuccess(input)
  }
  
}

// get Field Name section

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// getpasswordmatch section
 
function getpasswordmatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Password Does Not Match')
    }
}

// toggle section start

togglePassword.addEventListener('click',function(){
  const type =password.getAttribute('type') === 'password'? 'text':'password';
  password.setAttribute('type',type);
  this.classList.toggle("bi-eye")
})

// toggle1 section start 
togglePassword1.addEventListener('click',function(){
  const type =password2.getAttribute('type') === 'password'? 'text':'password';
  password2.setAttribute('type',type);
  this.classList.toggle("bi-eye")
})

// function call section 

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checklength(username,6,25);
    checklength(password,5,20);
    checkEmail(email);
    getpasswordmatch(password,password2)
})




