let sliderItems     = document.querySelectorAll('.slider-item');
let sliderDots      = document.querySelectorAll('.slider__dot');

let leftBtn         = document.querySelector('.slider__btn-left');
let rightBtn        = document.querySelector('.slider__btn-right');

leftBtn.addEventListener('click', function() {
    let currentSlide = document.querySelector('.slider-item.active');
    let currentSlideId = +currentSlide.getAttribute('data-slide');
    let currentDot = document.querySelector('.slider__dot.active');

    if (currentSlideId !== 1) {
        currentSlide.classList.remove('active');
        document.querySelector(`.slider-item[data-slide="${currentSlideId - 1}"]`).classList.add('active');
        currentDot.classList.remove('active');
        document.querySelector(`.slider__dot[data-dot="${currentSlideId - 1}"]`).classList.add('active');
    } else {
        currentSlide.classList.remove('active');
        sliderItems[sliderItems.length - 1].classList.add('active'); 
        currentDot.classList.remove('active');
        sliderDots[sliderDots.length - 1].classList.add('active');
    }
});

rightBtn.addEventListener('click', function() {
    let currentSlide = document.querySelector('.slider-item.active');
    let currentSlideId = +currentSlide.getAttribute('data-slide');
    let currentDot = document.querySelector('.slider__dot.active');
    
    if (currentSlideId < +(sliderItems.length)) {
        currentSlide.classList.remove('active');
        document.querySelector(`.slider-item[data-slide="${currentSlideId + 1}"]`).classList.add('active');
        currentDot.classList.remove('active');
        document.querySelector(`.slider__dot[data-dot="${currentSlideId + 1}"]`).classList.add('active');
    } else {
        currentSlide.classList.remove('active');
        sliderItems[0].classList.add('active'); 
        currentDot.classList.remove('active');
        sliderDots[0].classList.add('active');
    }
});

for (let dot of sliderDots) {
    dot.addEventListener('click', function(evt) {
        let dotId = this.getAttribute('data-dot');
        let slideId = document.querySelector(`.slider-item[data-slide="${dotId}"]`);
        let activeDot = document.querySelector('.slider__dot.active');
        let activeSlide = document.querySelector('.slider-item.active');

        activeDot.classList.remove('active');
        dot.classList.add('active');

        activeSlide.classList.remove('active');
        slideId.classList.add('active');
    });
}