//Функция для фона-картинки
function ibg(){

  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}
ibg();

//Меню бургер
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");

iconMenu.addEventListener("click", (e) => {
  iconMenu.classList.toggle("active");
  body.classList.toggle("lock");
  menuBody.classList.toggle("active");
});