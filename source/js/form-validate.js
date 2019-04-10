const modal = document.querySelector('.modal-error');
const btnModal = document.querySelector('.modal-error__btn');
const myform = document.getElementById("contact-form");
let modalText = document.querySelector('.modal-error__text');

const service_id = "default_service";
const template_id = "contact_form";

modal.classList.remove('modal-error--visible');

document.addEventListener('click', function(event) {
    var isClickInside = modal.contains(event.target);
    if (!isClickInside) {
        modal.classList.remove('modal-error--visible');
        modalText.innerText='';
    }
});

document.querySelector('.form-feedback').addEventListener('submit', function(e) {
    let inputs = document.querySelectorAll('.input-js'), result, i;

    e.preventDefault();
    for(i = 0; i < inputs.length; i++) {
        if(inputs[i].value) {
            result = true;
            break;
        }
    }
    if(!result) {
        e.preventDefault();
        openModal("Пожалуйста, укажите ваш Телефон или E-mail.");
        inputs[0].focus();
    }
    if(result) {
        emailjs.sendForm(service_id, template_id, myform)
        .then(function(response) {
            openModal("Форма отправлена! В ближайшее время мы с вами свяжемся.");
            myform.reset();
        }, function(error) {
            openModal("Что-то пошло не так, отправте форму еще раз.");
        });
    }
});

function modalClose() {
    modal.classList.remove('modal-error--visible');
    modalText.innerText='';
}

function openModal(text) {
    modalText.innerText=text
    modal.classList.add('modal-error--visible');
    btnModal.addEventListener('click', modalClose);
}
