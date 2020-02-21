let writeUsButton       = document.querySelector('.company-contacts__button');

let writeUsPopup        = document.querySelector('.writeus-popup');
let writeUsClose        = writeUsPopup.querySelector('.writeus-popup__close');
let writeUsName         = writeUsPopup.querySelector('.name');
let writeUsEmail        = writeUsPopup.querySelector('.email');
let writeUsMessage      = writeUsPopup.querySelector('.message');
let writeUsForm         = writeUsPopup.querySelector('.writeus-popup__form');

let isStorageSupport    = true;
let storageName         = '';
let storageEmail        = '';

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
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