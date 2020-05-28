

const myForm = document.getElementById("my-form")
const button = document.getElementById("button"); 

const fName = document.getElementById("f-name"); 
const lName = document.getElementById("l-name"); 
const email = document.getElementById("email"); 
const pass = document.getElementById("password"); 

const fError = document.getElementById("f-error"); 
const lError = document.getElementById("l-error"); 
const eError = document.getElementById("e-error"); 
const pError = document.getElementById("p-error"); 

const specialPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


button.onclick = function(event){
    if(fName.value.length === 0){
        fError.style.display="block";
        fName.style.borderColor="hsl(0, 100%, 74%)";
        fName.style.backgroundImage="url('./images/iconerror.svg')";
        event.preventDefault();
    } else {
        fError.style.display="none";
        fName.style.borderColor="hsla(246, 25%, 77%, 50%)";
        fName.style.backgroundImage="url('none')";
      
    };

    if (lName.value.length === 0){
        lError.style.display="block";
        lName.style.borderColor="hsl(0, 100%, 74%)";
        lName.style.backgroundImage="url('./images/iconerror.svg')";
        event.preventDefault();
    } else {
        lError.style.display="none";
        lName.style.borderColor="hsla(246, 25%, 77%, 50%)";
        lName.style.backgroundImage="url('none')";
    };

    if(!email.value.match(emailFormat)){
        eError.style.display="block";
        email.style.borderColor="hsl(0, 100%, 74%)";
        email.style.backgroundImage="url('./images/iconerror.svg')";
        event.preventDefault();
    } else {
        eError.style.display="none";
        email.style.borderColor="hsla(246, 25%, 77%, 50%)";
        email.style.backgroundImage="url('none')";
    };

    if(!pass.value.match(specialPass)){
        pError.style.display="block";
        pass.style.borderColor="hsl(0, 100%, 74%)";
        pass.style.backgroundImage="url('./images/iconerror.svg')";
        event.preventDefault();
    } else {
        pError.style.display="none";
        pass.style.borderColor="hsla(246, 25%, 77%, 50%)";
        pass.style.backgroundImage="url('none')";
    };
}