//variables

const sendBtn = document.querySelector('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');





//event Listeners


eventListeners();

function eventListeners() {
    // App init 
    document.addEventListener('DOMContentloaded', appInit);
    // validate the field
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField); // le blur cest quand tu quittes un champs pour aller dans un autre;
}





//functions

// App initialization

function appInit() {
    //disabled the send button onload;
    sendBtn.disabled = true;
    
}

function validateField() {
   // console.log('the validate Field');
    let errors;
    //validate the length of the field;
    validateLength(this);
    
    //validate the email
           //console.log(this);
    if(this.type === 'email') {
        valideEmail(this);
    }
}
//validate the length of the field
function validateLength(field){
    if(field.value.length > 0 ){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
    
}
//validate email(check for @ in the value);
function  valideEmail(field){
    let emailText = field.value;
    //check if the emailtext containt the validate field 
    if(emailText.indexOf('@') !== -1 ) {
         field.style.borderBottomColor = 'green';
         field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
    
 }

