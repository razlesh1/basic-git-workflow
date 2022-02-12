document.addEventListener("DOMContentLoaded", function(event) {

    let title = document.getElementById("title")

    setTimeout(() => {
        title.classList.remove("hidden");
    }, 3000)
});