window.addEventListener('keydown', function (event) {
  
  const key = document.querySelector(`.key[data-key=${event.key}]`)
  const audio = document.querySelector(`audio[data-key=${event.key}]`)
  if (!audio) {
    return
  }
  
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
})

const keys = ['a','s','d','f','g','h','j','k','l']
// alternatively,
// keys = document.querySelectorAll('.key')
keys.forEach(key => {
  // const audio = document.querySelector(`audio[data-key=${key}]`)
  const keyDiv = document.querySelector(`.key[data-key=${key}]`)
  // audio.addEventListener('play', e => {
  //   keyDiv.classList.add('playing')
  // })
  
  // takes too long; try using transitionend event
  // audio.addEventListener('ended', e => {
  //   keyDiv.classList.remove('playing')
  // })
  keyDiv.addEventListener('transitionend', e => {
    if (e.propertyName === 'transform') {
      keyDiv.classList.remove('playing')
    }
  })
})