var keyboard = document.getElementById("virtual_keyboard");
if(keyboard != null)
    keyboard.style.display = "none";

var password = document.querySelectorAll("input.pwordinput")[0];
if(password != null)
    password.readOnly = false;