'use strict';


const readMore = document.querySelector('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const hiddenModal = document.querySelector('.modal');
const bgBlur = document.querySelector('.overlay');

// We can use the classList property to access an element classes, even when they are more than 1. We can remove, add, toggle with the respective method.


/*
const showModal = function() {

    bgBlur.classList.remove('hidden');
    hiddenModal.classList.remove('hidden');
    

};

const closeModal = function() {

    bgBlur.classList.add('hidden');
    hiddenModal.classList.add('hidden');
    
};

readMore.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
bgBlur.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
    console.log(event);
});
*/



const showOrHideModal = function() {

    bgBlur.classList.toggle('hidden');
    hiddenModal.classList.toggle('hidden');

};


readMore.addEventListener('click', showOrHideModal);
closeBtn.addEventListener('click', showOrHideModal);
bgBlur.addEventListener('click', showOrHideModal);
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !hiddenModal.classList.contains('hidden')) {
        showOrHideModal();
    }
});





