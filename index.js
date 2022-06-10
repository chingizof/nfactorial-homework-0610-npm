darkBtn = document.getElementById("dark-theme")
lightBtn = document.getElementById("light-theme")
body = document.getElementById("body")
cookie = document.getElementById("cookie")

function setNight() {
    console.log("night")
    body.style.background = "black";
}

function setDay() {
    console.log("day")
    body.style.background = "white";
}

function addCookie() {
    localStorage.setItem("Welcome", "to the club, buddy")
    document.cookie = "name='Dalida' expires=Tue, 14 Jun 2022 18:00:00 UTC";
}

darkBtn.addEventListener("click", setNight)
lightBtn.addEventListener("click", setDay)
cookie.addEventListener("click", addCookie)