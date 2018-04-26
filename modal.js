var modal = document.getElementById('modal')
var closebtn = document.getElementById('closebtn')

closebtn.addEventListener("click", function() {
  modal.style.display = "none";
})
function openModal() {
  setTimeout(function() {
    modal.style.display = "block";
  }, 3000);
}
openModal()
