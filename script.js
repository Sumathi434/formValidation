function formValidation() {
    let username = document.getElementById("username").value;
    let fname = document.getElementById("fname").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm-password").value;

    if (username == "" || username == null) {
        document.getElementById("username-error").innerHTML = "Username is required";
        return false;
    }

    if (username.length < 4 || username.length > 8) {
        document.getElementById("username-error").innerHTML = "Username must be between 4 to 8 characters";
        return false;
    }

    if (fname == "" || fname == null) {
        document.getElementById("fname-error").innerHTML = "Full Name is required";
        return false;
    }

    if (mobile == "" || mobile == null) {
        document.getElementById("mobile-error").innerHTML = "Mobile Number is required";
        return false;
    }


    if (password == "" || password == null) {
        document.getElementById("password-error").innerHTML = "Password is required";
        return false;
    }

    if (confirm_password == "" || confirm_password == null) {
        document.getElementById("confirm-password-error").innerHTML = "Confirm Password is required";
        return false;
    }

    if (confirm_password != password) {
        document.getElementById("confirm-password-error").innerHTML = "Confirm Password is required";
        return false;
    }
}