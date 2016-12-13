$(document).ready(function () {

  nunjucks.configure({
    autoescape: true,
    web: {
      async: true
    }
  });

  $.ajax({
    url: "../mockapi/structure.json",
    success: function(data, status) {
      for (item in data.articles) {
        nunjucks.render('./partials/article.html', data.articles[item], function (err, res) {
          $('.js-articles').append(res);
        });
      }
    }
  });
  $(".nav_menu").click(function() {
    var menu = $(".nav");
    menu.slideToggle(1800);
    var search = $(".nav__ref-src_output");
    search.show();
    $(document).mouseup(function (e) {
    var cont = $(".nav");
    if (cont.has(e.target).length === 0){
        cont.hide(1800);
    }
    });
  });
});