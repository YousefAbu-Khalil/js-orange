var form = document.getElementById('form');
var email = document.getElementById('email');
var Phone = document.getElementById('Phone');
var password = document.getElementById('password');
form.addEventListener('submit',e => {
  e.preventDefault();

  validateInputs();
});

var seterror = (element,message) => {
    var formControl = element.parentElement;
    var errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');

}

var setSuccess = (element,message) => {
    var formControl = element.parentElement;
    var errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
    
}

var validateEmail = (email) => {
    var emailrex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailrex.test(email);
};

var validatePassword = (password) => {
    var passwordrex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordrex.test(password);
};

var validateInputs = () => {
    var emailValue = email.value.trim();
    var PhoneValue = Phone.value.trim();
    var passwordValue = password.value.trim();

    if(emailValue === ''){
        seterror(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        seterror(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(PhoneValue === ''){
        seterror(Phone, 'Phone number is required');
    }else if (PhoneValue.length < 10){
        seterror(Phone, 'Phone number must be at least 10 character.');
    }else {
        setSuccess(Phone);
    }

    if(passwordValue === ''){
        seterror(password , 'Password is required');
    } else if(passwordValue.length < 10){
        seterror(password, 'Password must be at least 10 character.');
    } else{
        setSuccess(password);
    }
}