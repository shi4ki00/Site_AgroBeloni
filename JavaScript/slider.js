const btn_prev = document.querySelector('.btn-previous')
const btn_forw =  document.querySelector('.btn-next')
const cards = document.querySelectorAll('.culture-card')
btn_prev.addEventListener('click', previous_card)
btn_forw.addEventListener('click', forward_card)
var atual = 0
function previous_card(){
  cards[atual].classList.remove('card-on')
  atual--
  if(atual < 0){
    atual = cards.length-1
  }
  cards[atual].classList.add('card-on')
}
function forward_card(){
  cards[atual].classList.remove('card-on')
  atual++
  if(atual > (cards.length -1)){
    atual = 0
  }
  cards[atual].classList.add('card-on')
}