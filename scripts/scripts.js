
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.modal__reset-button');
let form = document.querySelector('.form');
let modal = document.querySelector('.modal');

let nameInput = document.querySelector('.form__input_type_name');
let titleInput = document.querySelector('.form__input_type_title');
let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');

form.addEventListener('submit', function(Event) {
    Event.preventDefault();

    profileName.textContent  = nameInput.value;
    profileTitle.textContent  = titleInput.value;

    toggleModal();
})

function toggleModal() {
    
    modal.classList.toggle('modal_opened');
}

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);