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
