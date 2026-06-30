const menu_btn = document.getElementById('container-hamburguer')
const menu_nav = document.querySelector('.textos-header')
const menu_redes = document.querySelector('.redes-sociais-header')
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu_vsb.classList.remove('on')
  }
})
menu_btn.addEventListener('click', () => {
    menu_nav.classList.toggle('on')
    menu_redes.classList.toggle('on')
})

