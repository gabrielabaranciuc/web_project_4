
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.modal__reset-button');
let modal = document.querySelector('.modal');
let form = document.querySelector('.form');
let saveButton = editButton.querySelector('.form__submit-button');

let nameInput = document.querySelector('.form__input_type_name');
let titleInput = document.querySelector('.form__input_type_title');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');

function openModal () {
    nameInput.value = profileName.textContent;
    titleInput.value = profileTitle.textContent;
    modal.classList.add('modal_opened');
}

function closeModal () {
    modal.classList.remove('modal_opened');
}

function formSubmitHandler(e) {
    e.preventDefault();

    profileName.textContent  = nameInput.value;
    profileTitle.textContent  = titleInput.value;
    
    modal.classList.remove('modal_opened');
}

editButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);

form.addEventListener('submit', formSubmitHandler);