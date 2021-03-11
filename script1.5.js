let expandButton = document.querySelector('.more'); 
let rotate =  document.querySelector('.more__image');
let list =  document.querySelector('.swiper-wrapper');
let text =  document.querySelector('.more__text');



expandButton.addEventListener('click', function(){

if(list.classList.contains('hidden')){
  text.textContent = 'Скрыть';
  text.style.fontWeight = '500';
}  else {
  text.textContent = 'Показать все';
  text.style.fontWeight = '500';

}
list.classList.toggle('hidden');

})



const slider = document.querySelector('.swiper-container');
let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
			slidesPerView: 'auto',
      slideClass: 'swiper-slide',
      pagination: {
       	el: '.swiper-pagination',
          clickable: true,
            },
           
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});

