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

// var isSignin = false;
// var signInItem = document.getElementById("sign-in-menu-item");

function profile_signed_in(){
  isSignin = true;
  window.open('index.html');
}

function profile_signed_out(){
  isSignin = false;
  window.open('index.html');
}

// if (isSignin && signInItem != null){
//   console.log('sign in complete');
//   signInItem.innerHTML = "<button onclick=\"profile_signed_out\" class=\"btn btn-primary submit-button w-100 my-4\">Logout, Simran</button>";
// }
// else if (!isSignin && signInItem != null){
//   console.log('sign out complete');
//   signInItem.innerHTML = "<a href=\"sign-in.html\">Sign in</a>";
// }