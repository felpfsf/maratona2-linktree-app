const toggle = document.querySelector('.switch')
toggle.addEventListener('click', modeToggle)

const switcher = document.querySelector('#switcher')

switcher.addEventListener('click', () =>{
  switcher.classList.toggle('fa-toggle-on')
})

let isLight = true

function modeToggle() {

  isLight = !isLight
  let rootElement = document.body

  rootElement.classList.toggle('light--mode')
}

ScrollReveal().reveal('#content', { duration: 2000 })

ScrollReveal({ origin: 'bottom', distance: '30px', duration: 700 }).reveal(
  '.link--style',
  { interval: 350 }
)
