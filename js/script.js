/* Бургер-меню */
function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}

// Перевіряє ширину шапки
function checkHeaderFit() {
    const wrapper = document.querySelector(".nav-wrapper");
    const logo = document.querySelector(".logo");
    const menu = document.querySelector(".nav-menu");
    const auth = document.querySelector(".nav-auth");
    const burger = document.querySelector(".burger");

    menu.style.display = "flex";
    auth.style.display = "flex";

    const totalWidth = logo.offsetWidth + menu.offsetWidth + auth.offsetWidth + 40;

    if (totalWidth > wrapper.offsetWidth) {
        burger.style.display = "block";
        menu.style.display = "none";
        auth.style.display = "none";
    } 
    else {
        burger.style.display = "none";
        menu.style.display = "flex";
        auth.style.display = "flex";
        menu.classList.remove("active");
    }
}

window.addEventListener("load", () => {
    setTimeout(checkHeaderFit, 50);
});

window.addEventListener("resize", checkHeaderFit);

/* ВАЛІДАЦІЯ ФОРМИ */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (!form) return;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        let valid = true;

        if (name.value.trim().length < 2) {
            valid = false;
            document.getElementById("nameError").style.display = "block";
        } else {
            document.getElementById("nameError").style.display = "none";
        }

        if (!email.value.includes("@")) {
            valid = false;
            document.getElementById("emailError").style.display = "block";
        } else {
            document.getElementById("emailError").style.display = "none";
        }

        if (message.value.trim().length < 5) {
            valid = false;
            document.getElementById("messageError").style.display = "block";
        } else {
            document.getElementById("messageError").style.display = "none";
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    // при вводі
    document.querySelectorAll("input, textarea").forEach(field => {
        field.addEventListener("input", () => {
            field.classList.add("touched");
        });
    });
});
