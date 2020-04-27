
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}

// drop down accordian

var btn = document.getElementsByClassName("two");
var i;

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {

    if (this.className === "two fa fa-arrow-down") {
      this.className = "two fa fa-arrow-up";
    } else {
      this.className = "two fa fa-arrow-down";
    }

    var panel = this.previousElementSibling;

    panel.classList.toggle("active")
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// drop down accordian

