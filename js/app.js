const showBtn = document.querySelector("#show-btn");
const hiddenNav = document.querySelector(".header__hidden");


showBtn.addEventListener("click", () => {
    hiddenNav.classList.toggle("show");
    document.body.style.overflowY = "hidden"
})