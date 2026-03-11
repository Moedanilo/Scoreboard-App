let homeCtr = document.getElementById("home-points-scored")
let awayCtr = document.getElementById('away-points-scored')
let quarterEl = document.getElementById("quarterEl")

console.log(homeCtr)
console.log(awayCtr)

let homeAddPoints = 0
let awayAddPoints = 0

let quarter = 0

let awayFoul = 0
let homeFoul = 0

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds()

let timestamp = document.getElementById('time')

timestamp.textContent = `${hours}:${minutes}:${seconds}`;

function homeAdd1() {
    homeAddPoints += 1
    console.log(homeAddPoints)
    homeCtr.textContent = homeAddPoints
    checkLeader()
}

function homeAdd2() {
    homeAddPoints += 2
    console.log(homeAddPoints)
    homeCtr.textContent = homeAddPoints
    checkLeader()
}

function homeAdd3() {
    homeAddPoints += 3
    console.log(homeAddPoints)
    homeCtr.textContent = homeAddPoints
    checkLeader()
}

function awayAdd1() {
    awayAddPoints += 1
    console.log(awayAddPoints)
    awayCtr.textContent = awayAddPoints
    checkLeader()
}

function awayAdd2() {
    awayAddPoints += 2
    console.log(awayAddPoints)
    awayCtr.textContent = awayAddPoints
    checkLeader()
}

function awayAdd3() {
    awayAddPoints += 3
    console.log(awayAddPoints)
    awayCtr.textContent = awayAddPoints
    checkLeader()
}

function quarterAdd() {
    quarter += 1
    console.log(quarter)
    if (quarter > 0 && quarter <=4)
    quarterEl.textContent = quarter
    checkLeader()
}

function checkLeader() {
    if (homeAddPoints > awayAddPoints) {
        homeCtr.style.color = "yellow"
        homeCtr.style.textShadow = "0 0 8px yellow"
        awayCtr.style.color = "#F94F6D"
        awayCtr.style.textShadow = ""
    } else if (awayAddPoints > homeAddPoints) {
        awayCtr.style.color = "yellow"
        awayCtr.style.textShadow = "0 0 8px yellow"
        homeCtr.style.color = "#F94F6D"
        homeCtr.style.textShadow = ""
    } else {
        // tie
        homeCtr.style.color = "#F94F6D"
        homeCtr.style.textShadow = ""
        awayCtr.style.color = "#F94F6D"
        awayCtr.style.textShadow = ""
    }
}

function addAwayFoul() {
    awayFoul += 1
    console.log(awayFoul)
    if (awayFoul === 1) {
        document.getElementById("away1").style.backgroundColor = "yellow";
    } else if (awayFoul === 2) {
        document.getElementById("away2").style.backgroundColor = "yellow";
    } else if (awayFoul === 3) {
        document.getElementById("away3").style.backgroundColor = "yellow";
    } else if (awayFoul === 4) {
        document.getElementById("away4").style.backgroundColor = "yellow";
    }
}

function addHomeFoul() {
    homeFoul += 1
    console.log(homeFoul)
    if (homeFoul === 1) {
        document.getElementById("home1").style.backgroundColor = "yellow";
    } else if (homeFoul === 2) {
        document.getElementById("home2").style.backgroundColor = "yellow";
    } else if (homeFoul === 3) {
        document.getElementById("home3").style.backgroundColor = "yellow";
    } else if (homeFoul === 4) {
        document.getElementById("home4").style.backgroundColor = "yellow";
    }
}