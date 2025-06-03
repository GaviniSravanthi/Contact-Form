const form=document.getElementById('contactform');
const nameinput=document.getElementById('name');
const emailinput=document.getElementById('email');
const messageinput=document.getElementById('message');

const nameerror=document.getElementById('nameerror');
const emailerror=document.getElementById('emailerror');
const messageerror=document.getElementById('messageerror');
const successmessage=document.getElementById('successmessage');

form .addEventListener('submit', function(e){
    e.preventDefault();
   
    nameerror.textContent='';
    emailerror.textContent='';
    messageerror.textContent=''; 
    successmessage.textContent='';
    let isvalid=true;
    if(nameinput.value.trim()===''){
        nameerror.textContent="Name is required.";
        isvalid=false;
    }
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailinput.value.trim()===''){
        emailerror.textContent='Email is required.';
        isvalid=false;
    }
    else if(!emailregex.test(emailinput.value.trim())){
        emailerror.textContent='In valid email format.';
        isvalid=false;
    }
    if(messageinput.value.trim()===''){
    messageerror.textContent='Message is required.';
    isvalid=false;
}
    if(isvalid){
        successmessage.textContent='Form submitted successfully!';
        form.reset();
    }

});