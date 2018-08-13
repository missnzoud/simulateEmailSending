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
}





//functions

// App initialization

function appInit() {
    //disabled the send button onload;
    sendBtn.disabled = true;
    
}