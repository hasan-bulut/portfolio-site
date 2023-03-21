const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in");
  }
  txts[index].classList.add("text-in");
  index = index == txtsLen - 1 ? 0 : index + 1;
  setTimeout(animateText, 3000)
}

$(window).on("load", function () {
  animateText();
});


$(function () {
  let lastScrollTop = 0,
    delta = 15;
  $(window).scroll(function (event) {
    let st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    if ((st > lastScrollTop) && (lastScrollTop > 0)) {
      // downscroll code
      $("header").css("top", "-80px");
      $("#checkbox").prop("checked", false);

    } else {
      // upscroll code
      $("header").css("top", "0px");
    }
    lastScrollTop = st;
  });
});