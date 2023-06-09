var navbar =  document.getElementById("navbar");
function openNav() {
  navbar.style.width = "90%";
}

function closeNav() {
  navbar.style.left = "-90%";
  setTimeout(()=>{
    window.location.reload();
  },700);
}