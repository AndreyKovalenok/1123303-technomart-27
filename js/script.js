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



