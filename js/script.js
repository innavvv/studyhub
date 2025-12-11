/* Бургер-меню */
function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}


/* ВАЛІДАЦІЯ КОНТАКТНОЇ ФОРМИ */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (!form) return;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        //Вивід у консоль
        console.log("Імʼя:", name.value);
        console.log("Email:", email.value);
        console.log("Повідомлення:", message.value);

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
            alert("Будь ласка, перевірте правильність заповнення форми.");
            return;
        }

        alert("Ваше повідомлення успішно надіслано! Ми звʼяжемося з вами найближчим часом.");
        form.reset();

         form.querySelectorAll("input, textarea").forEach(field => {
        field.classList.remove("touched");
    });
    });

// Відстежуємо зміну полів для додавання класу touched
    document.querySelectorAll("input, textarea").forEach(field => {
        field.addEventListener("input", () => {
            field.classList.add("touched");
        });
    });
});



// Стилізація карток на сторінках курсів
const cards = document.querySelectorAll(".card");

if (cards.length > 0) {
    cards.forEach(card => {
        card.style.border = "2px solid #3B82F6"; // рамка
        card.style.transition = "0.3s";

        //при наведенні змінюємо фон
        card.addEventListener("mouseenter", () => {
            card.style.backgroundColor = "#eef4ff";
        });

        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "#F9FAFB";
        });
    });
}


// Додаємо елемент у кінець головної сторінки

const main = document.querySelector("main");

if (window.location.pathname.includes("index.html")) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Дякуємо, що користуєтеся StudyHub!";
    newParagraph.style.marginTop = "40px";
    newParagraph.style.fontWeight = "600";
    newParagraph.style.color = "#1E3A8A";

    main.append(newParagraph);
}

// Поточна дата у футері
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});

// Показати більше карток 
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("showMoreBtn");
    const extraCards = document.querySelectorAll(".cards-grid .extra");

    if (!btn) return;

    btn.addEventListener("click", () => {
        const hidden = extraCards[0].classList.contains("hidden");

        extraCards.forEach(card => {
            if (hidden) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        btn.textContent = hidden ? "Сховати" : "Показати більше";
    });
});

//  DARK THEME перемикач
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    //Відновлюємо тему з localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

    //"зміна теми"
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        //Зберігаємо в localStorage
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
});


//  Ефект наведення на посилання навігації
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".nav-menu a");

    menuLinks.forEach(link => {

        // Стандартний стиль при завантаженні    
        link.style.transition = "all 0.25s ease";

        // Наведення миші
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.15)";
            link.style.color = "#2563EB";
        });

        // Вихід миші
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
            
            if (!link.classList.contains("active")) {
                link.style.color = "#1E3A8A";  
            }
        });
    });
});

// Зміна розміру шрифту за допомогою стрілок вгору/вниз

let textScale = 1;

const textElements = document.querySelectorAll(
    "p, a, li, h1, h2, h3, h4, h5, h6, button, span, label"
);

// Зберігаємо оригінальні розміри шрифту
textElements.forEach(el => {
    const style = window.getComputedStyle(el);
    el.dataset.originalSize = parseFloat(style.fontSize);
});

// Функція застосування масштабу
function applyTextScale() {
    textElements.forEach(el => {
        const base = parseFloat(el.dataset.originalSize);
        el.style.fontSize = (base * textScale) + "px";
    });
}

// Реакція на клавіші
document.addEventListener("keydown", (event) => {

    // ЗБІЛЬШИТИ
    if (event.key === "ArrowUp") {
        textScale += 0.1;

        if (textScale > 1.1) textScale = 1.1;

        applyTextScale();
    }

    // ЗМЕНШИТИ
    if (event.key === "ArrowDown") {
        textScale -= 0.1;

        if (textScale < 0.9) textScale = 0.9;

        applyTextScale();
    }
});

// ВАЛІДАЦІЯ ФОРМИ РЕЄСТРАЦІЇ
document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.querySelector(".auth-form.register");
    if (registerForm) {

        const name = registerForm.querySelector("input[type='text']");
        const email = registerForm.querySelector("input[type='email']");
        const password = registerForm.querySelector("input[type='password']");
        const confirmPassword = registerForm.querySelectorAll("input[type='password']")[1];

        registerForm.addEventListener("submit", (event) => {
            event.preventDefault(); 
            let valid = true;

             //Вивід у консоль
            console.log("Імʼя:", name.value);
            console.log("Email:", email.value);
            console.log("Пароль:", password.value);
            console.log("Підтвердження:", confirmPassword.value);

            // ІМ’Я
            if (name.value.trim().length < 3) {
                showError(name, "Ім’я повинно містити мінімум 3 символи");
                valid = false;
            } else {
                hideError(name);
            }

            // EMAIL
            if (!email.value.includes("@") || !email.value.includes(".")) {
                showError(email, "Некоректний email");
                valid = false;
            } else {
                hideError(email);
            }

            // ПАРОЛЬ
            if (password.value.trim().length < 6) {
                showError(password, "Пароль має містити мінімум 6 символів");
                valid = false;
            } else {
                hideError(password);
            }

            // ПІДТВЕРДЖЕННЯ
            if (confirmPassword.value !== password.value) {
                showError(confirmPassword, "Паролі не збігаються");
                valid = false;
            } else {
                hideError(confirmPassword);
            }

            if (!valid) return;

            // Якщо пройшло валідацію
            alert("Реєстрація успішна!");
            registerForm.reset();

            registerForm.querySelectorAll("input").forEach(field => {
                field.classList.remove("touched");
            });
        });
    }

    function showError(field, message) {
        field.classList.add("error");
        field.classList.add("touched");
        
        let errorElem = field.nextElementSibling;
        if (!errorElem || !errorElem.classList.contains("error-text")) {
            errorElem = document.createElement("p");
            errorElem.classList.add("error-text");
            field.after(errorElem);
        }
        errorElem.textContent = message;
    }

    function hideError(field) {
        field.classList.remove("error");
        field.classList.add("touched");

        let errorElem = field.nextElementSibling;
        if (errorElem && errorElem.classList.contains("error-text")) {
            errorElem.remove();
        }
    }

});

// ВАЛІДАЦІЯ ФОРМИ ВХОДУ
document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector(".auth-form.login");
    if (loginForm) {

        const email = loginForm.querySelector("input[type='email']");
        const password = loginForm.querySelector("input[type='password']");

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let valid = true;

            //Вивід у консоль
            console.log("Email:", email.value);
            console.log("Пароль:", password.value);

            // EMAIL
            if (!email.value.includes("@") || !email.value.includes(".")) {
                showError(email, "Некоректний email");
                valid = false;
            } else {
                hideError(email);
            }

            // ПАРОЛЬ
            if (password.value.trim().length < 6) {
                showError(password, "Пароль має бути мінімум 6 символів");
                valid = false;
            } else {
                hideError(password);
            }

            if (!valid) return;

            alert("Вхід виконано успішно!");
            loginForm.reset();

            loginForm.querySelectorAll("input").forEach(field => {
                field.classList.remove("touched");
            });
        });
    }

    function showError(field, message) {
        field.classList.add("error");
        field.classList.add("touched");
        
        let errorElem = field.nextElementSibling;
        if (!errorElem || !errorElem.classList.contains("error-text")) {
            errorElem = document.createElement("p");
            errorElem.classList.add("error-text");
            field.after(errorElem);
        }
        errorElem.textContent = message;
    }

    function hideError(field) {
        field.classList.remove("error");
        field.classList.add("touched");

        let errorElem = field.nextElementSibling;
        if (errorElem && errorElem.classList.contains("error-text")) {
            errorElem.remove();
        }
    }

});
