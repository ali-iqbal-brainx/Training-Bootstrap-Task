const toggler = document.querySelector(".btn");
toggler.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
    document.querySelector(".navbar-logo").classList.toggle("hidden");
});