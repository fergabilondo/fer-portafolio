const menu = document.querySelector(".menu");
const button = document.querySelector("button");
console.log("funciona");
console.log(menu);
console.log(button);

const nav = document.querySelector(".menu");

function Menu(nav) {
  const menuLink = nav.querySelector(".menu-item a");
  const subMenu = nav.querySelector(".sub-menu");

  menuLink.addEventListener("click", showSubMenu);

  function showSubMenu(e) {
    const valor = e.target;
    console.log(valor);
    e.preventDefault();
    subMenu.classList.toggle("open");
    e.stopPropagation();
  }
}

Menu(nav);
