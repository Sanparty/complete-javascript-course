'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const addHidden = function (i) {
  i.classList.add('hidden');
};
const removeHidden = function (i) {
  i.classList.remove('hidden');
};

const hideModal = function () {
  addHidden(modal);
  addHidden(overlay);
};

const displayModal = function () {
  removeHidden(modal);
  removeHidden(overlay);
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', displayModal);
}
overlay.addEventListener('click', hideModal);
btnCloseModal.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
