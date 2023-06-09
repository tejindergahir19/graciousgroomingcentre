var coll = document.getElementsByClassName("collapsible");
var i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.querySelector("i").classList.add('fa-plus');
      this.querySelector("i").classList.remove('fa-minus');
    } else {
      content.style.display = "block";
      this.querySelector("i").classList.remove('fa-plus');
      this.querySelector("i").classList.add('fa-minus');
    }
  });
}