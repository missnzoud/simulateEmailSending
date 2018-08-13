//variables

const sendBtn = document.querySelector('sendBtn');





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