let buyBtns             = document.querySelectorAll('.product-hover__buy');
let bookmarksBtns       = document.querySelectorAll('.product-hover__bookmarks');

let basketField         = document.querySelector('.header-basket');
let bookmarksField      = document.querySelector('.header-bookmarks');
let productsCount       = basketField.querySelector('.header-basket__count');
let bookmarksCount      = bookmarksField.querySelector('.header-bookmarks__count');

let popup               = document.querySelector('.add-popup');
let close               = popup.querySelector('.add-popup__close');
let continueShoppingBtn = popup.querySelector('.add-popup__btn');

for (let btn of buyBtns) {
    btn.addEventListener('click', function(evt) {
        evt.preventDefault();
        basketField.classList.add('active');
        productsCount.innerHTML = (+productsCount.innerHTML + 1).toString();
        popup.classList.add('add-product-show');
    });
}

for (let btn of bookmarksBtns) {
    btn.addEventListener('click', function(evt) {
        evt.preventDefault();
        bookmarksField.classList.add('active');
        bookmarksCount.innerHTML = (+bookmarksCount.innerHTML + 1).toString();
    });
}

close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('add-product-show');
});

continueShoppingBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('add-product-show');
});

let openMapBtn  = document.querySelector('.company-contacts__map');
let mapPopup    = document.querySelector('.map-popup');
let mapClose    = document.querySelector('.map-popup__close');

if (openMapBtn) {
    openMapBtn.addEventListener('click', function(evt) {
        mapPopup.classList.add('map-show');
    });
    
    mapClose.addEventListener('click', function(evt) {
        mapPopup.classList.remove('map-show');  
    });
    
    window.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (mapPopup.classList.contains('map-show')) {
                mapPopup.classList.remove('map-show');
            }
        }
    });
}

let servicesItems    = document.querySelectorAll('.services__item');
let servicesTabs     = document.querySelectorAll('.services-tab');

if (servicesItems) {
    for (let item of servicesItems) {
        item.addEventListener('click', function(evt) {
            let itemId = this.getAttribute('data-tab');
            let tabId = document.querySelector(`.services-tab[data-tab='${itemId}']`);
            let activeItem = document.querySelector('.services__item.active');
            let activeTab = document.querySelector('.services-tab.active');
    
            activeItem.classList.remove('active');
            item.classList.add('active');
    
            activeTab.classList.remove('active');
            tabId.classList.add('active');
        });
    }
}

let sliderItems     = document.querySelectorAll('.slider-item');
let sliderDots      = document.querySelectorAll('.slider__dot');

let leftBtn         = document.querySelector('.slider__btn-left');
let rightBtn        = document.querySelector('.slider__btn-right');

if (leftBtn) {
    leftBtn.addEventListener('click', function() {
        let currentSlide = document.querySelector('.slider-item.active');
        let currentSlideId = +currentSlide.getAttribute('data-slide');
        let currentDot = document.querySelector('.slider__dot.active');
    
        if (currentSlideId !== 1) {
            currentSlide.classList.remove('active');
            document.querySelector(`.slider-item[data-slide='${currentSlideId - 1}']`).classList.add('active');
            currentDot.classList.remove('active');
            document.querySelector(`.slider__dot[data-dot='${currentSlideId - 1}']`).classList.add('active');
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
            document.querySelector(`.slider-item[data-slide='${currentSlideId + 1}']`).classList.add('active');
            currentDot.classList.remove('active');
            document.querySelector(`.slider__dot[data-dot='${currentSlideId + 1}']`).classList.add('active');
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
            let slideId = document.querySelector(`.slider-item[data-slide='${dotId}']`);
            let activeDot = document.querySelector('.slider__dot.active');
            let activeSlide = document.querySelector('.slider-item.active');
    
            activeDot.classList.remove('active');
            dot.classList.add('active');
    
            activeSlide.classList.remove('active');
            slideId.classList.add('active');
        });
    }
}

let writeUsButton       = document.querySelector('.company-contacts__button');
let writeUsPopup        = document.querySelector('.writeus-popup');

if (writeUsButton) {
    let writeUsClose        = writeUsPopup.querySelector('.writeus-popup__close');
    let writeUsName         = writeUsPopup.querySelector('.name');
    let writeUsEmail        = writeUsPopup.querySelector('.email');
    let writeUsMessage      = writeUsPopup.querySelector('.message');
    let writeUsForm         = writeUsPopup.querySelector('.writeus-popup__form');

    let isStorageSupport    = true;
    let storageName         = '';
    let storageEmail        = '';

    try {
        storageName = localStorage.getItem('name');
        storageEmail = localStorage.getItem('email');
    } catch (err) {
        isStorageSupport = false;
    }
    
    writeUsButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.add('writeus-show');
    
        if (storageName && !storageEmail) {
            writeUsName.value = storageName;
            writeUsEmail.focus();
        } else  if (!storageName && storageEmail) {
            writeUsEmail.value = storageEmail;
            writeUsName.focus();
        } else  if (!storageName && !storageEmail) {
            writeUsName.focus();  
        } else {
            writeUsName.value = storageName;
            writeUsEmail.value = storageEmail;
            writeUsMessage.focus();
        }
    });
    
    writeUsClose.addEventListener('click', function(evt) {
        evt.preventDefault();
        writeUsPopup.classList.remove('writeus-show');
        writeUsPopup.classList.remove('writeus-error');
    });
    
    writeUsForm.addEventListener('submit', function(evt) {
        if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
            evt.preventDefault();
            writeUsPopup.classList.remove('writeus-error'); 
            writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
            writeUsPopup.classList.add('writeus-error');
        } else {
            if (isStorageSupport) {
                localStorage.setItem('name', writeUsName.value);
                localStorage.setItem('email', writeUsEmail.value);
            }
        }
    });
    
    window.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (writeUsPopup.classList.contains('writeus-show')) {
                writeUsPopup.classList.remove('writeus-show');
                writeUsPopup.classList.remove('writeus-error');
            }
        }
    });
}