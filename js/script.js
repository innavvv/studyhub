/* Бургер-меню */
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}

/* =========================
      ВАЛІДАЦІЯ ФОРМИ
   ========================= */

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

    // Додаємо клас "touched" при вводі
    document.querySelectorAll("input, textarea").forEach(field => {
        field.addEventListener("input", () => {
            field.classList.add("touched");
        });
    });
});
