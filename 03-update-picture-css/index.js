// const spacing = document.getElementById('spacing')
// const blur = document.getElementById('blur')
// const base = document.getElementById('base')

// console.log(spacing, blur, base)

// spacing.addEventListener('change', e => {
//   console.log(e)
//   console.log(e.target.value)
// })

// spacing.addEventListener('mousemove', e => {
//   console.log(e.target)
//   const suffix = e.target.dataset.sizing
//   document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix)
// })

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
