let openMenu = document.getElementById("open-menu")
let toggleMenu = document.querySelector("#show")
let sideMenu =  document.querySelector(".nav-menu")
let main = document.querySelector(".main")
let navBar = document.querySelector(".nav")
let email = document.getElementById("email")
let warning = document.getElementById("warning")
let gmail = document.getElementById("gmail")
let password = document.getElementById("password")
function showMenu() {
    sideMenu.classList.add("active")
    main.classList.add("side-effect")
}

function hideMenu(){
    sideMenu.classList.remove("active")
    main.classList.remove("side-effect")

}

function emailSubmit(){
    console.log("button clicked")
    if (email.value == "" ){
        email.classList.add("wrong")
        warning.classList.add("warning-enabled")
    }

    else if (email.value.includes("@")){
        console.log("email valid")
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