function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {

        item.innerHTML = "";
    }
}

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateform() {
    var returnval = true;
    clearErrors();

    var name = document.forms['myform']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    var email = document.forms['myform']["femail"].value;
    if (email.length > 35) {
        seterror("email", "*Length of E-mail is too long");
        returnval = false;
    }
    var phone = document.forms['myform']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Incorrect Number Please Enter Valid Number");
        returnval = false;
    }
    var password = document.forms['myform']["fpass"].value;
    if (password.length < 8) {
        seterror("pass", "*Password should be 8 character");
        returnval = false;
    }
    var cpassword = document.forms['myform']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password Doesn't Match");
        returnval = false;
    }
    

    return returnval;
}
