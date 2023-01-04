let menu = ["Roja", "About", "Work", "Les Chats!", "Contact"];
let menuBar = document.getElementById("nav").children;
function setMenu() {
  for (i = 0; i < menu.length; i++) {
    menuBar[i].innerHTML = menu[i];
  }
}
setMenu();
let container = document.getElementById("container");
let firstItem = document.getElementById("roja");
let navbar = document.getElementById("nav");
function changeMenu() {
  console.log(container.scrollTop);
  if (container.scrollTop <= 500 && container.scrollTop >= 0) {
    menu = ["Roja", "About", "Work", "Les Chats!", "Contact"];
    setMenu();
    firstItem.classList.remove("hidden");
    firstItem.style.order = "-1";
  }
  if (container.scrollTop <= 626 && container.scrollTop >= 500) {
    firstItem.classList.add("hidden");
    function test() {
      console.log("Hi!");
      firstItem.style.order = "1";
    }
    firstItem.addEventListener("transitionend", test);
  }

  // if (container.scrollTop >= 626) {
  //   menu = ["About", "Work", "Les Chats!", "Contact", "Roja"];
  //   firstItem.classList.add("visibl");
  //   firstItem.classList.remove("hidden");
  //   for (i = 0; i < menu.length; i++) {
  //     menuBar[i].innerHTML = menu[i];
  //   }
  // }
}
container.addEventListener("scroll", changeMenu);
