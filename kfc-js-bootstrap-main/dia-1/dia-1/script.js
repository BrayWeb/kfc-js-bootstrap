var mypassword= "1";
var email  = "p.com";

let button  = document.getElementById('button');
let email_user = document.getElementById('email');
let password_user = document.getElementById('password');

button.addEventListener('click', function(){
     
    if(mypassword == password_user.value && email_user.value == email){
        window.location = "./home.html"
         sessionStorage.setItem("sesion","true");
    }else {
        document.getElementById('alert-danger').innerText = "Error"
        email_user.classList.add('is-invalid')
        password_user.classList.add('is-invalid')
        password_user.value = "" 
    }
});
