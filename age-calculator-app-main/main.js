let getYear = document.getElementById("getYear")
let getMonth = document.getElementById("getMonth")
let getDay = document.getElementById("getDay")
let alertY = document.getElementById("alertY")
let alertM = document.getElementById("alertM")
let alertD = document.getElementById("alertD")

function calculateBtn() {
    let year = document.getElementById("year").value
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value
    year.max = new Date().toISOString().split("T")[0]
    month.max = new Date().toISOString().split("T")[1]
    day.max = new Date().toISOString().split("T")[0]

    let birthDate = new Date(year, month, day);
    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1
    let y1 = birthDate.getFullYear()

    let today = new Date()
    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()
    let d3, m3, y3;

    if (year, month, day) {
        y3 = y2 - y1;
        if (m2 >= m1) {
            m3 = m2 - m1
        } else {
            y3--
            m3 = 12 + m2 - m1
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--
            d3 = getDays(y1, m1) + d2 - d1
        }

        if (m3 < 0) {
            m3 = 11
            y3--
        }
        getYear.innerHTML = y3
        getMonth.innerHTML = m3
        getDay.innerHTML = d3
    }if (year > y2 || year < 1) {
        alertY.style.visibility = "visible"
        alertY.classList.add("error-text")
        document.getElementById("year").classList.add("error")
        document.getElementById("year-text").style.color = "red"
        getYear.innerHTML = "--"
    }if (month > new Date().getMonth() || month < 1) {
        alertM.style.visibility = "visible"
        alertM.classList.add("error-text")
        document.getElementById("month").classList.add("error")
        document.getElementById("month-text").style.color = "red"
        getMonth.innerHTML = "--"
    }if (day > new Date().getDate() || day < 1) {
        alertD.style.visibility = "visible"
        alertD.classList.add("error-text")
        document.getElementById("day").classList.add("error")
        document.getElementById("day-text").style.color = "red"
        getDay.innerHTML = "--"
    }
}
        function getDays(yr, mh) {
            return new Date(yr, mh, 0).getDate()
        }



// document.getElementById("getYear").innerHTML =  today.getFullYear() - birthDate.getFullYear();
// document.getElementById("getMonth").innerHTML = today.getMonth() - birthDate.getMonth();
// document.getElementById("getDay").innerHTML = today.getDate() - birthDate.getDate();