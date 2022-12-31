let menu = ["Roja", "About", "Work", "Les Chats!", "Contact"];
let menuBar = document.getElementById("nav").children;
function regularMenu() {
  for (i = 0; i < menu.length; i++) {
    menuBar[i].innerHTML = menu[i];
  }
}
function swapMenu(n) {
  menu.push(menu[0]);
  menu.shift();
  for (i = 0; i < menu.length; i++) {
    menuBar[i].innerHTML = menu[i];
  }
}
let container = document.getElementById("container");
function changeMenu() {
  console.log(container.scrollTop);
  //   console.log(container.scrollHeight);
  //   console.log(container.scrollHeight - container.scrollTop);
  //   console.log(container.clientHeight);

  if (container.scrollTop <= 626 && container.scrollTop >= 0) {
    menu = ["Roja", "About", "Work", "Les Chats!", "Contact"];
    regularMenu();
  }

  if (container.scrollTop >= 626) {
    menu = ["About", "Work", "Les Chats!", "Contact", "Roja"];
    for (i = 0; i < menu.length; i++) {
      menuBar[i].innerHTML = menu[i];
    }
  }
}
container.addEventListener("scroll", changeMenu);
console.log(document.getElementById("roja-page"));
console.log(document.getElementById("about-page"));
// if (
//   document.getElementById("roja-page").nextElementSibling == "div#about-age"
// ) {
//   for (i = 0; i < menu.length; i++) {
//     menuBar[i].innerHTML = "About";
//   }
// }
