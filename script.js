
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [" JAVA FULL STACK DEVELOPER"];
const speed = 100;
const eraseSpeed = 50;
const pauseBeforeErase = 1000;
const pauseBeforeType = 500;
let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, pauseBeforeErase);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, pauseBeforeType);
    }
}

// Ensure typewriter runs after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});
function hamburg() {
    document.querySelector(".dropdown").classList.add("show");
  }
  
  function cancel() {
    document.querySelector(".dropdown").classList.remove("show");
  }
  // Mobile Navbar Toggle
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.display = "block"; // Show the navbar without any sliding effect
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.display = "none"; // Hide the navbar without any sliding effect
}



function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, pauseBeforeErase);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, pauseBeforeType);
    }
}

// Ensure typewriter runs after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});
