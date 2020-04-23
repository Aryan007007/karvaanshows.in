
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}

function myFunction2a() {
  var x = document.getElementById("k1");
  if (x.className === "try") {
    x.className = "try-show";
  } else {
    x.className = "try";
  }
}


function myFunction2b() {
  var x = document.getElementById("k2");
  if (x.className === "try") {
    x.className += " try-show";
  } else {
    x.className = "try";
  }
}

