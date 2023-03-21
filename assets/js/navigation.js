function route(targetID) {
  let position = $("#" + targetID).position();
  $('html, body').animate({
    scrollTop: position.top
  }, 'slow');
}