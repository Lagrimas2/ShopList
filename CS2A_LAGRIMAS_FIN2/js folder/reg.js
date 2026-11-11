//1. user details, concatinate, save to localstorage
function saveUserDetails() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let username = document.getElementById("uname").value;
    let address = document.getElementById("address").value;
    let email_address = document.getElementById("email_address").value;
    let password = document.getElementById("password").value;

    //make sure that all blanks are filled
    //HTML tag "INPUT" required
    //OR make our own remarks

    if (first_name === "" || last_name === "" || address === "" || 
        username === "" || email_address === '' || password === "") {
        document.getElementById("regMessage").innerHTML = 
            "<h3 style='color:red'>Please Complete Details</h3>";
        return;
    }

    //string concatenate all details
    let userDetails = first_name + " | " + last_name + " | " 
                         + username + " | " + address + " | " +
                          email_address + " | " + password ;

//save to localStorage(to store setItem/ to retrieve getItem)
    localStorage.setItem("userRecord", userDetails);
    document.getElementById("regMessage").innerHTML =
        "<h3 style='color:green'>Registration Successful</h3>";

    alert(localStorage.getItem("userRecord"));

    //move to next page
    window.location.href = "login.html";
}