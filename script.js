const menu_Icon = document.querySelector("#menuIcon");
const nav_Links = document.querySelector(".navLinks");

menu_Icon.onclick = () => {
    nav_Links.classList.toggle("active");
}