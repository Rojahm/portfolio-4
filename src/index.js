let container = document.getElementById("scale");
function changeMenu() {
  console.log(container.scrollTop);
}
container.addEventListener("scroll", changeMenu);
