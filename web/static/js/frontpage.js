/* global window, document, $ */
$(document).ready(function() {
  $(".section__top").parallax({
    imageSrc: "/static/img/pexels-photo-132650.jpeg"
  });

  $(".section__numbers").parallax({
    imageSrc: "/static/img/pexels-photo-94654.jpeg"
  });

  $(".section__pricing").parallax({
    imageSrc: "/static/img/pexels-photo-241544.jpeg"
  })

  $("[data-countup]").countup({
    startVal: parseInt($(this).data("start") || 0, 10),
    endVal: parseInt($(this).data("end") || 0, 10)
  });

  $("a.scrollto").click(function(event) {
    event.preventDefault();
    $(window).scrollTo($($(this).attr('href')), 1000);
  });

  let $isoElems = $(".grid").isotope({
    itemSelector: '.grid-item',
    layoutMode: "fitRows"
  });

  $(".tools__all").click(function() {
    $isoElems.isotope({filter: '*'});
  });
  $(".tools__pos").click(function() {
    $isoElems.isotope({filter: '.pos'});
  });
  $(".tools__gloss").click(function() {
    $isoElems.isotope({filter: '.gloss'});
  });
  $(".tools__lemma").click(function() {
    $isoElems.isotope({filter: '.lemma'});
  });
  $(".tools__chunker").click(function() {
    $isoElems.isotope({filter: '.chunker'});
  });
  $(".tools__multilingual").click(function() {
    $isoElems.isotope({filter: '.multilingual'});
  });
});

