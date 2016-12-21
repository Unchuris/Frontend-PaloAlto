$(document).ready(function () {
Inputmask.extendDefinitions({
  'A': {
    validator: "[А-Яа-яЁёA-Za-z]",
    cardinality: 1
  }
});
$("#username").inputmask('A{1,100}');
$("#username").on("blur", function(){
  if (0 == $("#username").val().length) {
    $(this).after("<label class='form_username'>You must fill in this field</label>");
    $("#username").css({
      "border": "1px red solid"
    });
  } else {
    $("#username").css({
      "border": "1px #5c6bc0 solid"
    });
  };
  $(".form-about").submit(function(e){
    if (0 == $("#username").val().length) {
      e.preventDefault();
    };
  });
});
$("#username").on("focus", function(){
  $('.form_username').remove();
  $("#username").css({
    "border": "none"
  });
  $(".form-about").submit(function(e){
    if (0 == $("#username").val().length) {
      e.preventDefault();
    };
  });
});

$("#lastname").inputmask('A{1,100}');
$("#lastname").on("blur", function(){
  if (0 == $("#lastname").val().length) {
    $(this).after("<label class='form_lastname'>You must fill in this field</label>");
    $("#lastname").css({
      "border": "1px red solid"
    });
  } else {
    $("#lastname").css({
      "border": "1px #5c6bc0 solid"
    });
  };
  $(".form-about").submit(function(e){
    if (0 == $("#lastname").val().length) {
      e.preventDefault();
    };
  });
});
$("#lastname").on("focus", function(){
  $('.form_lastname').remove();
  $("#lastname").css({
    "border": "none"
  });
  $(".about__form").submit(function(e){
    if (0 == $("#lastname").val().length) {
      e.preventDefault();
    };
  });
});

Inputmask("email").mask("#email");
$("#email").on("blur", function(){
  if (0 == $("#email").val().length) {
    $(this).after("<label class='form_email'>You must fill in this field</label>");
    $("#email").css({
      "border": "1px red solid"
    });
  } else {
    $("#email").css({
      "border": "1px #5c6bc0 solid"
    });
  };
  $(".form-about").submit(function(e){
    if (2 > $("#email").val().replace(/[_]/g,'').length) {
      e.preventDefault();
    };
  });
});
$("#email").on("focus", function(){
  $('.form_email').remove();
});
$("#phone").inputmask("+7(999)999-99-99");
$("#phone").on("blur", function(){
  if (11 !== $("#phone").val().replace(/[() _+-]/g,'').length) {
    $(this).after("<label class='form_hint'>You must fill in this field</label>");
    $("#phone").css({
      "border": "1px red solid"
    });
  } else {
    $("#phone").css({
      "border": "1px #5c6bc0 solid"
    });
  };
  $(".form-about").submit(function(e){
    if (11 !== $("#phone").val().replace(/[() _+-]/g,'').length) {
      e.preventDefault();
    };
  });
});
$("#phone").on("focus", function(){;
  $("#phone").css({
    "border": "none"
  });
  $(".form-about").submit(function(e){
    if (11 !== $("#phone").val().replace(/[() _+-]/g,'').length) {
      e.preventDefault();
    };
  });
  $('.form_hint').remove();
});
Inputmask('dd/mm/yyyy').mask("#date");
$("#date").on("blur", function(){
  if (8 !== $("#date").val().replace(/[d/m y]/g,'').length) {
    $("#date").css({
      "border": "1px red solid"
    });
  } else {
    $("#date").css({
      "border": "1px #5c6bc0 solid"
    });
  };
  $(".form-about").submit(function(e){
    if (8 !== $("#date").val().replace(/[d/m y]/g,'').length) {
      e.preventDefault();
    };
  });
});
$("#date").on("focus", function(){;
  $("#date").css({
    "border": "none"
  });
  $(".form-about").submit(function(e){
    if (8 !== $("#date").val().replace(/[d/m y]/g,'').length) {
      e.preventDefault();
    };
  });
});
});

