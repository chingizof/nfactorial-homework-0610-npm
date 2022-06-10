const darkBtn = document.getElementById("dark-theme")
const lightBtn = document.getElementById("light-theme")
const body = document.getElementById("body")
const cookie = document.getElementById("cookie")

function setNight() {
    console.log("night")
    document.body.style.background = "black";
}

function setDay() {
    console.log("day")
    document.body.style.background = "white";//deaf
}

function addCookie() {
    localStorage.setItem("Welcome", "to the club, buddy")
    document.cookie = "name='Dalida' expires=Tue, 14 Jun 2022 18:00:00 UTC";
}

darkBtn.addEventListener("click", setNight)
lightBtn.addEventListener("click", setDay)
cookie.addEventListener("click", addCookie)
//fefaef