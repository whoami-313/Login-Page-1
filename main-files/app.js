let submitButton = document.querySelector("#subbut");
let forgetPassword = document.querySelector("#forget-password");

let usersData = [
    {id: 1, username: "cicada", password: "3301"},
    {id: 2, username: "admin", password: "root"},
    {id: 3, username: "max", password: "$userid"},
    {id: 4, username: "richard", password: "01001102"},
];

function login() {
    
    let username = document.getElementById("username").value;
    let password = document.querySelector("#password").value;
    
    let newUser = {id: usersData.length + 1, username: username, password: password};
    
    function loginAlert() {
        Swal.fire ({
            icon: "success",
            title: "Congratulations",
            html: "<h4>You logged in successfully !</h4>"
        });
    }

    function errorAlert() {
        Swal.fire ({
            icon: "error",
            title: "Oops ... !",
            html: "<h4>The username letters must be more than 8 character !</h4>" +
                "<h3>&</h3>" + "<h4>The password letters must be more than 12 character !</h4>"
        });
    }

    function reload() {
        location.reload()
    }

    if (username.length >= 8 || password.length >= 12) {
        usersData.push(newUser);
        loginAlert();
        console.log (usersData);
    }
    else {
        errorAlert();
        setTimeout(reload, 5000)
    }
}

function forgetPass() {
    let getUsername = prompt("Enter your username to recovery your password :", "");
    let isInList = usersData.some(function (userfind) {
        return userfind.username === getUsername;
    });
    let usernameIndex = usersData.findIndex(function (index) {
        return index.username === getUsername;
    });
    if (isInList) {
        alert ("Password : " + usersData[usernameIndex].password);
    }
    else {
        alert("The username is not available !");
    }
}

submitButton.addEventListener("click", login);
forgetPassword.addEventListener("click", forgetPass);