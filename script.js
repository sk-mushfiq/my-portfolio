const menuBtn   = document.querySelector("#menuIcon");
const navLinks  = document.querySelector(".navLinks");
 
menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
 
    // Keep aria-expanded in sync so screen readers announce the state change
    menuBtn.setAttribute("aria-expanded", isOpen);
 
    // Update the aria-label to reflect the current action
    menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
 
// Close the mobile menu when any nav link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
});