let openMenu = document.getElementById("open-menu")
let toggleMenu = document.querySelector("#show")
let sideMenu =  document.querySelector(".nav-menu")
let main = document.querySelector(".main")
let navBar = document.querySelector(".navbar")
let email = document.getElementById("email")
let warning = document.getElementById("warning")
let gmail = document.getElementById("gmail")
let password = document.getElementById("password")
let video = document.querySelector("video")

function showMenu() {
    sideMenu.classList.add("active")
    navBar.classList.add("dim")
    main.classList.add("dim")
    video.classList.add("dim")
}

function hideMenu(){
    sideMenu.classList.remove("active")
    
    navBar.classList.remove("dim")

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