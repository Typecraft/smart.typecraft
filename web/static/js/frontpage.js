/* global window, document, $ */
$(document).ready(function() {
  $(".section__top").parallax({
    imageSrc: "/static/img/pexels-photo-132650.jpeg"
  });

  $(".section__numbers").parallax({
    imageSrc: "/static/img/pexels-photo-94654.jpeg"
  });

  $("[data-countup]").countup({
    startVal: 10,  // parseInt($(this).data("start"), 10),
    endVal: 1000  // parseInt($(this).data("end"), 10)
  });

  $("a.scrollto").click(function(event) {
    event.preventDefault();
    $(window).scrollTo($($(this).attr('href')), 1000);
  });
});
