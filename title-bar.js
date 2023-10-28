window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "50px";
    document.getElementById("logo").style.width = "50px";
  } else {
    document.getElementById("logo").style.width = "200px";
    document.getElementById("logo").style.height = "200px";
  }
}