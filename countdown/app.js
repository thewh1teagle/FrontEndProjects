
// How the fuck does time work?
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const dayElement = document.querySelector(".day")
const hourElement = document.querySelector(".hour")
const minuteElement = document.querySelector(".minute")
const secondElement = document.querySelector(".second")


const countDown = () => {
    const countDate = new Date('May 17, 2021 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now
    // Calculate the shit
    const textDay = Math.floor ( gap / day )
    const textHour = Math.floor ( (gap % day) / hour )
    const textMinute = Math.floor ( (gap % hour) / minute )
    const textSecond = Math.floor( (gap % minute) / second )

    dayElement.innerText = textDay
    hourElement.innerText = textHour
    minuteElement.innerText = textMinute
    secondElement.innerText = textSecond
}


const app = () => {
    countDown()
    setInterval(countDown, 1000)
}


app()