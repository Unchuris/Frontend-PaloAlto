$(document).ready(function () {
Inputmask.extendDefinitions({
  'A': {
    validator: "[А-Яа-яЁёA-Za-z]",
    cardinality: 1
  }
});
$("#username").check('username');
$("#username").inputmask('A{1,100}');
$("#lastname").check('lastname');
$("#lastname").inputmask('A{1,100}');
Inputmask("email").mask('#email');
$("#email").check('email');
$("#phone").inputmask("+7(999)999-99-99");
$("#phone").check('phone');
Inputmask('dd/mm/yyyy').mask("#date");
$("#date").check('date');
});