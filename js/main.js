const popUp = document.getElementById('popUp')
const popUpMenu = document.querySelector('.popUp')
const popUpClose = document.querySelector('.popUp__close')

popUp.addEventListener('click', () =>{
  popUpMenu.classList.add('block')
})

popUpClose.addEventListener('click' , () =>{
  popUpMenu.classList.remove('block')
})