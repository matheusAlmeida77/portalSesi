const navLeft = document.querySelector(".navLeft");
console.log(navLeft);

navLeft.addEventListener("click", () => {
    navLeft.classList.toggle("navLeftShow");
})