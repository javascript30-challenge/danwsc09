const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand')

const time = new Date()
let hour = time.getHours()
let minute = time.getMinutes()
let second = time.getSeconds()

function printTime() {
  console.log('time: ', `${hour}:${minute}:${second}`)
}

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
  printTime()
}

function updateSecondHand() {
  // if 0, transform: rotateZ(90deg)
  // if 15, transform: rotateZ(180deg)
  // if 30, transform: rotateZ(270deg)
  // if 45, transform: rotateZ(0deg)
  const degree = (90 + second * 6) % 360
  secondHand.style.transform = `rotate(${degree}deg)`
}

setInterval(() => {
  // update time
  updateTime()
  // reflect CSS accordingly
  // more specifically, update hour, minute, and second hands
  updateSecondHand()

}, 1000)