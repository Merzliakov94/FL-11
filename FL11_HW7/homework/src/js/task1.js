const userEmail = 'user@gmail.com' ,
     adminEmail = 'admin@gmail.com' ,
       userPass = 'UserPass' ,
      adminPass = 'AdminPass' ,
 minEmailLength = 5 ,
  minPassLength = 6 ;

let email, pass, oldPass, newPass, validPass;
email = prompt('Please enter your Email.', '');
if (email === null || email === '' ){
    alert('Canceled');
} else if (email.length < minEmailLength) {
    alert('I don\'t know any emails having name length less than 6 symbols.');
} else if (email === userEmail || email === adminEmail) {
    pass = prompt('Enter your password.', '');
    if (pass === null || pass === '') {
        alert('Canceled');
    } else if (pass === userPass || pass === adminPass) {
        if (confirm('Do you want to change your password?')) {
            oldPass = prompt('Please enter your OLD password.');
            if (oldPass === userPass || oldPass === adminPass) {
                newPass = prompt('Your NEW password.', '');
                if (newPass === null || newPass === '' || newPass === oldPass || newPass.length < minPassLength) {
                    alert('You wrote the wrong password.');
                } else {
                    validPass = prompt('Enter your password again.');
                    if (validPass === newPass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else if (oldPass.length < minPassLength) {
                alert('It\'s too short password. Sorry.');
            } else {
                alert('Wrong password.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password.');
    }
} else {
    alert('I don’t know you.');
}
   
