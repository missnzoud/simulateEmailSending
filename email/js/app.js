//variables

const sendBtn = document.querySelector('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');





//event Listeners


eventListeners();

function eventListeners() {
    // App init 
    document.addEventListener('DOMContentloaded', appInit);
    // validate the field
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField); // le blur cest quand tu quittes un champs pour aller dans un autre;
    // reset boutoun
     sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}





//functions

// App initialization

function appInit() {
    //disabled the send button onload;
    sendBtn.disabled = true;
    
}

//send email
function sendEmail(e) {
    e.preventDefault();
    //show the spiners
    const spiners = document.querySelector('#spinner');
    spiners.style.display = 'block';
    
    //show the image
    const sendEmailing = document.createElement('img');
    sendEmailing.src = 'img/mail.gif';
    sendEmailing.style.display = 'block';
    
    // hide spinners then show the send Email image;
    setTimeout(function() {
        // hide the spinners
        spiners.style.display = 'none';
        document.querySelector('#loaders').appendChild(sendEmailing);
        
        setTimeout(function() {
            sendEmailForm.reset();
            sendEmailing.remove();
        }, 5000);
    }, 3000);
    
    // show the image
    document.querySelector('loaders');
    
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
    //both will return error,then check if there are any errors
    errors = document.querySelectorAll('.error');
    //check that the input are not empty;
    if(email.value !== '' && subject.value !== '' && message.value !=='' ) {
        if(errors.length === 0 ){
            //the button should be enable
            sendBtn.disabled = false;
        }
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


//reset the form function
function resetForm() {
    sendEmailForm.reset();
}

