let openMenu = document.getElementById("open-menu")
let toggleMenu = document.querySelector("#show")
let sideMenu =  document.querySelector(".nav-menu")
let main = document.querySelector(".main")
let navBar = document.querySelector(".navbar")
let email = document.getElementById("email")
let warning = document.getElementById("warning")
let gmail = document.getElementById("gmail")
let password = document.getElementById("password")
let vidRow1 = document.querySelector(".video-row")
let vidRow2 = document.querySelectorAll(".video-row")[1]
let buttons = document.querySelector(".buttons")


//  Add dim class to all elements when sidebar is active
function showMenu() {
    sideMenu.classList.add("active")
    navBar.classList.add("dim")
    buttons.classList.add("dim")
    vidRow1.classList.add("dim")
    vidRow2.classList.add("dim")
}

function hideMenu(){
    sideMenu.classList.remove("active")
    navBar.classList.remove("dim")
    buttons.classList.remove("dim")
    vidRow1.classList.remove("dim")
    vidRow2.classList.remove("dim")
}

function emailSubmit(){
  
    if (email.value == "" ){
        email.classList.add("wrong")
        warning.classList.add("warning-enabled")
    }

    else if (email.value.includes("@")){
       
        window.location.href = "password.html"
    }
    else {
        email.classList.add("wrong")
        warning.classList.add("warning-enabled")
    }

}

function passSubmit(){
    if (password.value.length <  8 ){
        password.classList.add("wrong")
        warning.classList.add("warning-enabled")
    }
    else {
        window.location.href = "homepage.html"
    }
}