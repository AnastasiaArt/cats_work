const modal = document.querySelector('.modal-error');
const btnModal = document.querySelector('.modal-error__btn');

var template_params = {
   "name": "name_value",
   "email": "email_value",
   "tel": "tel_value",
   "question": "question_value"
}

var service_id = "default_service";
var template_id = "contact_form";

modal.classList.remove('modal-error--visible');

document.addEventListener('click', function(event) {
    var isClickInside = modal.contains(event.target);
    if (!isClickInside) {
        modal.classList.remove('modal-error--visible');
    }
});

document.querySelector('.form-feedback').addEventListener('submit', function(e) {
    let inputs = document.querySelectorAll('.input-js'), result, i;

    for(i = 0; i < inputs.length; i++) {
        if(inputs[i].value) {
            result = true;
            break;
            console.log(1);
        }
    }
    if(!result) {
        e.preventDefault();
        modal.classList.add('modal-error--visible');
        btnModal.addEventListener('click', modalClose);
        inputs[0].focus();
    }
    if(result) {
        emailjs.send(service_id, template_id, template_params);
    //     emailjs.sendForm('contact_service', 'contact_template', '.form-feedback')
    //     .then(function(response) {
    //         console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //         console.log('FAILED...', error);
    //     });
    }
});

function modalClose() {
    modal.classList.remove('modal-error--visible');
}
