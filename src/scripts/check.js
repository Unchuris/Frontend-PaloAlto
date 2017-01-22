$(document).ready(function () {
  $.fn.check = function(name){
  switch (name) {
    case "username":
    case "lastname":
    case "email":
        $(this).checkNull(name);
        break;
    case "date":
        $(this).checkDate();
        break;
    case "phone":
        $(this).checkPhone();
        break;        
  }
}
$.fn.checkDate = function(name) {
  $(this).on("blur", function(){
  if (8 !== $(this).val().replace(/[d/m y]/g,'').length) {
    $(this).css({
      "border": "1px red solid"
    });
  } else {
    $(this).css({
      "border": "1px #5c6bc0 solid"
    });
  };
  $(this).submit(function(e){
    if (8 !== $(this).val().replace(/[d/m y]/g,'').length) {
      e.preventDefault();
    };
  });
});
$(this).on("focus", function(){;
  $(this).css({
    "border": "none"
  });
  $(".form-about").submit(function(e){
    if (8 !== $(this).val().replace(/[d/m y]/g,'').length) {
      e.preventDefault();
    };
  });
});
}
$.fn.checkPhone = function(name) {
  $(this).on("blur", function(){
  if (11 !== $(this).val().replace(/[() _+-]/g,'').length) {
    $(this).after("<label class='form_hint'>You must fill in this field</label>");
    $(this).css({
      "border": "1px red solid"
    });
  } else {
    $(this).css({
      "border": "1px #5c6bc0 solid"
    });
  };
  $(".form-about").submit(function(e){
    if (11 !== $(this).val().replace(/[() _+-]/g,'').length) {
      e.preventDefault();
    };
  });
});
$(this).on("focus", function(){;
  $(this).css({
    "border": "none"
  });
  $(".form-about").submit(function(e){
    if (11 !== $(this).val().replace(/[() _+-]/g,'').length) {
      e.preventDefault();
    };
  });
  $('.form_hint').remove();
});
}
$.fn.checkNull = function(name) {
  $(this).on("blur", function(){
            if (0 == $(this).val().length) {
                  switch (name) {
                    case 'username':{
                        $(this).after("<label class='form_username'>You must fill in this field</label>");
                        break;}
                    case 'lastname':{
                        $(this).after("<label class='form_lastname'>You must fill in this field</label>");
                        break;}
                    case 'email': {
                        $(this).after("<label class='form_email'>You must fill in this field</label>");
                        break; } 
                  }
              $(this).css({
                "border": "1px red solid"
              });
            } else {
                $(this).css({
                  "border": "1px #5c6bc0 solid"
                });
            };
          switch (name) {
              case 'email': {
                  $(".form-about").submit(function(e){
                    if (2 > $("#email").val().replace(/[_]/g,'').length) {
                      e.preventDefault();
                    };
                  });
                  break;}
              case 'username':
              case 'lastname': {
                  $(".form-about").submit(function(e){
                      if (0 == $(this).val().length) {
                      e.preventDefault();
                      };
                  });
                  break;}
          }
  });
        $(this).on("focus", function(){
          if (name == "email") {
            $('.form_email').remove();
          } 
          if (name == "username") {
              $('.form_username').remove();
          };
          if (name == "lastname") {
              $('.form_lastname').remove();
          };
          $(this).css({
              "border": "none"
          });
          if (name == "username") {
              $(".form-about").submit(function(e){
                if (0 == $(this).val().length) {
                  e.preventDefault();
                };
              });
          };
          if (name == "lastname") {
              $(".about__form").submit(function(e){
                if (0 == $(this).val().length) {
                  e.preventDefault();
                };
              });
          };
        });
}
});