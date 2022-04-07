/*
  What I learned
  - Change CSS variable using document.documentElement.style.setProperty(key, value)
  - Change the scoped value of the CSS variable
    - For example, above sets the variable (ex. --base) at the <html> element
    - I can set the value of --base variable in <h1> element
  - Learned about <input type="range"> and <input type="color">
*/

function handleUpdate(event) {
  const suffix = event.target.dataset.sizing || ''
  const { value, name } = event.target
  console.log('value:', value)
  
  document.documentElement.style.setProperty(`--${name}`, value + suffix)
}

const inputs = document.querySelectorAll('.controls input')
inputs.forEach(input => {
  input.addEventListener('change', handleUpdate)
  input.addEventListener('mousemove', handleUpdate)
})

/**
 * Firefox vs Chrome vs Safari
 * 둘다 input type = file 에서 이미지를 하나 선택하고 ok 누르고, 다시 선택하기 누르고 취소를 누른다
 * - FF, Safari: 기존 파일이 그대로 있음 (event.target.files.length = 1)
 * - Chrome: 기존 파일이 사라짐 (event.target.files.length = 0)
 */

const images = document.querySelector('.images')
const file = document.getElementById('file')
let url
file.addEventListener('input', e => {
  images.innerHTML = ''
  for (const file of e.target.files) {
    const img = document.createElement('img')
    url = URL.createObjectURL(file)
    img.src = url
    img.onload = () => URL.revokeObjectURL(url)
    images.appendChild(img)
  }
})