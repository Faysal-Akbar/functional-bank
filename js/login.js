document.getElementById('login-button').addEventListener('click', function(){
    //get email value
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password value
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 'faysal@akbar.com' && userPassword == '01876391114'){
        window.location.href = "banking.html";
    }
});
