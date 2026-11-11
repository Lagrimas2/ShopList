//create the function that creates the lists
function addItem() {
    let item = document.getElementById("item_name").value;
    let qty = document.getElementById("item_qty").value;

    //what if blank yung fields, error handler
    if (item === "" || qty === "") {
        alert("please complete the list");
        return;
    }

    //set as variable the <ul> of the grocery list
    let groceryList = document.getElementById("groceryList");

    //create a new list item via DOM
    let newItem = document.createElement("li");
    newItem.textContent = item + " - " + qty;
    groceryList.appendChild(newItem);

    //clear fields after adding new item
    document.getElementById("item_name").value = "";
    document.getElementById("item_qty").value = "";
}

//clear the list function placed outside addItem
function clearList() {
    document.getElementById("groceryList").innerHTML = "";
}

//logout function
function logout() {
    localStorage.removeItem("userRecord"); //delete content local storage
    alert(localStorage.getItem("userRecord"));
    window.location.href = "register.html";
}