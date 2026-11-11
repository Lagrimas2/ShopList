//step 1: conditional statement -> loob ng function
//get the value saved in our localstorage
function loginUser() {
    let old_user = localStorage.getItem("userRecord");

    if (old_user === null) {
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:red'>No user record found. Kindly register first.</h3>";
        return;
    }

    //split the values of the localStorage
    //order saved by reg.js: fname | lname | username | address | email | password
    let userData = old_user.split(" | "); // this is an array

    //retrieve name, username and password at the location of the array
    let old_name = userData[0];
    let old_uname = userData[2];
    let old_pword = userData[5];

    //retrieve user input via the login form
    let loginuname = document.getElementById("login_uname").value;
    let loginpword = document.getElementById("login_pword").value;

    //conditional statement- checking old vs login data
    if (loginuname === old_uname && loginpword === old_pword) {
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:green'>Welcome " + old_name + "! You may now add an item.</h3>";
        //move to next page
        window.location.href = "list.html";
    } else {
        document.getElementById("loginMessage").innerHTML =
            "<h3 style='color:red'>Invalid user credentials!</h3>";
    }
}