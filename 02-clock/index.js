const hourHand = document.querySelector('hour-hand')
const minuteHand = document.querySelector('minute-hand')
const secondHand = document.querySelector('second-hand')

const time = new Date()
let hour = time.getHours()
let minute = time.getMinutes()
let second = time.getSeconds()

function updateTime() {
  second++
  if (second === 60) {
    second = 0
    minute += 1
  }
  if (minute === 60) {
    minute = 0
    hour += 1
  }
  if (hour === 12) {
    hour = 0
  }
}

function updateSecond() {
  
}

setInterval(() => {
  // update time
  updateTime()
  // reflect CSS accordingly
  // more specifically, update hour, minute, and second hands

}, 1000)