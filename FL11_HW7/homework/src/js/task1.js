let email = prompt('Please enter an email','user@gmail.com');
let six = 6;
let five = 5;
if(email === null || email === ''){
    alert('Canceled');
}else{
    if(email.length<six){
        alert('I don`t know any emails having name length less than 6 symbols');
    }else if(email === 'user@gmail.com' || email === 'admin@gmail.com'){
        let password = prompt('Please enter an password','');
        if(password === null || password === ''){
            alert('Canceled');
        }else if(email === 'user@gmail.com' && password === 'UserPass'){
            let changePasswordUser=confirm('Do you want to change your password?');
            if(!changePasswordUser){
                alert('You have failed the change');
            }else if(changePasswordUser){
               let oldPassword = prompt('Please  write the old password');
               if(oldPassword === null || oldPassword === ''){
                   alert('Canceled');
               }else if(oldPassword === 'UserPass'){
                   let newPassword=prompt('Please  write the new password');
                   if(newPassword.length<five){
                       alert('It’s too short password. Sorry.');
                   }else{
                       let newPasswordConfirm=prompt('Please enter new password again');
                       if(newPassword !== newPasswordConfirm){
                           alert('You wrote the wrong password.');
                       }else{
                           alert('You have successfully changed your password.');
                       }
                   }
               }
            }
            console.log(changePasswordUser);
        }else if(email === 'admin@gmail.com' && password === 'AdminPass'){
            let changePasswordAdmin = confirm('Do you want to change your password?');
            if(!changePasswordAdmin){
                alert('You have failed the change');
            }else if(changePasswordAdmin){
                let oldPasswordAdmin = prompt('Please  write the old password');
                if(oldPasswordAdmin === null || oldPasswordAdmin===''){
                    alert('Canceled');
                }else if(oldPasswordAdmin === 'AdminPass'){
                    let newPasswordAdmin=prompt('Please  write the new password');
                    if(newPasswordAdmin.length<five){
                        alert('It’s too short password. Sorry.');
                    }else{
                        let newPasswordConfirmAdmin = prompt('Please enter new password again');
                        if(newPasswordAdmin !== newPasswordConfirmAdmin){
                          alert('You wrote the wrong password.');
                        }else{
                          alert('You have successfully changed your password.');
                        }
                    }
                }
            }
        }else{
          alert('Wrong password');
        }
    }else{
      alert('I don’t know you');
    }
}