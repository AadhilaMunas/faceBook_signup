document.addEventListener('DOMContentLoaded', function() {
    var btn_login_id = document.getElementById('btn_login_id');

    btn_login_id.addEventListener('click', function() {
        var email_input_id_CONTAINER = document.getElementById('email_input_id').value;
        var password_id_CONTAINER = document.getElementById('password_id').value;

        if (email_input_id_CONTAINER !== '' && password_id_CONTAINER !== '') {
            if (email_input_id_CONTAINER === 'aadhilamunas20@gmail.com') {
                if (password_id_CONTAINER === '123') {
                  location.replace('https://facebook.com')              
  } else {
                    alert('Wrong password');
                }
            } else {
                alert('Wrong username');
            }
        } else {
            alert('Please fill in the empty fields');
        }
    });
});
