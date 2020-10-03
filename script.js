function showMenu() {
    const menuBtn = document.getElementById("nav_menu-img");
    const navMenu = document.getElementById("toplink");

    if (navMenu.style.opacity == 0) {
        navMenu.style.opacity = 1;
        menuBtn.src = "./images/icon-close.svg";
    } else {
        navMenu.style.opacity = 0;
        menuBtn.src = "./images/icon-hamburger.svg";
    }
}

const userForm = document.getElementById("user_form");

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById("user_input");
    const emailError = document.getElementById("email_error");

    if (!validateEmail(userInput.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}