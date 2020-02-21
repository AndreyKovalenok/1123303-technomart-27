let servicesItems    = document.querySelectorAll('.services__item');
let servicesTabs     = document.querySelectorAll('.services-tab');

for (let item of servicesItems) {
    item.addEventListener('click', function(evt) {
        let itemId = this.getAttribute('data-tab');
        let tabId = document.querySelector(`.services-tab[data-tab="${itemId}"]`);
        let activeItem = document.querySelector('.services__item.active');
        let activeTab = document.querySelector('.services-tab.active');

        activeItem.classList.remove('active');
        item.classList.add('active');

        activeTab.classList.remove('active');
        tabId.classList.add('active');
    });
}