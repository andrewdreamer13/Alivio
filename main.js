"use strict";
// Header burger
burger();

function burger() {
  const burgerBtn = document.querySelector('.header__burger');
  burgerBtn.addEventListener('click', () => {
    document.querySelector('.header__nav-list').classList.toggle('header__nav-list-transform');
    document.querySelector('.header__burger-span-1').classList.toggle('header__burger-span-1-transform');
    document.querySelector('.header__burger-span-2').classList.toggle('header__burger-span-2-transform');
    document.querySelector('.header__burger-span-3').classList.toggle('header__burger-span-3-transform');
    document.querySelectorAll('.header__nav-item').forEach((element) => {
      element.classList.toggle('header__nav-item-transform');
    })
    document.body.classList.toggle('no-scroll');
  })
}
// offer transform

offerTransform();

function offerTransform() {
  document.addEventListener('scroll', () => {
    const offerItems = document.querySelectorAll('.offer__item');

    function showItem() {
      offerItems.forEach((item) => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        let scrollOffSet = item.offsetTop + (item.offsetHeight / 2);

        if (windowCenter >= scrollOffSet) {
          item.classList.add('offer__item-transform');
        
        } else {
          item.classList.remove('offer__item-transform');
          
        }

      })
    }
    showItem();
  })
} // end of transform for offer

// video
video()
function video(){
  const video = document.querySelector('.story__video');
  const playButton = document.querySelector('.story__play-button')
  const playButtonImg = document.querySelector('.story__play-img');
  
  // Play and Pause video
  function videoStatus(){
    if(video.paused){
      video.play()
      playButtonImg.src ="images/pause.svg"
    }else{
      video.pause()
      playButtonImg.src ="images/play.svg"
    }
  }
  
  playButton.addEventListener('click',videoStatus);
  video.addEventListener('click',videoStatus);
  
 
}// end of function video

// Modal window
modal();
function modal(){
const open = document.querySelector('.story__button');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const video = document.querySelector('.modal__video');
open.addEventListener('click',() => {
  modal.classList.add('visible');
 
})
close.addEventListener('click',() => {
  modal.classList.remove('visible');
  video.pause();
  document.body.classList.remove('no-scroll');
})
window.onclick = function (e) {
  if (e.target == modal) {
    modal.classList.remove('visible');
    video.pause();
    document.body.classList.remove('no-scroll');
  }
}
}
// change theme
const changeBtn = document.querySelector('.change-theme');
const btnSwitcher = document.querySelector('.change-btn-switcher');

changeBtn.addEventListener('click',()=>{
 if (document.body.classList.contains('dark')) {
   document.body.classList.remove('dark');
   btnSwitcher.classList.remove('transform');
   document.querySelector('.heading__text').classList.remove('dark-bg');
 }else{
  document.body.classList.add('dark');
  btnSwitcher.classList.add('transform');
  document.querySelector('.heading__text').classList.add('dark-bg');
 }
})
