// Mobile nav toggle (accessible)
const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (mobile)
  navMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Contact form validation (basic)
const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const success = document.querySelector("#formSuccess");

// Simple email pattern (basic)
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function setError(el, msg) {
  el.textContent = msg;
}

function clearErrors() {
  setError(nameError, "");
  setError(emailError, "");
  setError(messageError, "");
  if (success) success.textContent = "";
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let ok = true;

    if (name.length < 2) {
      setError(nameError, "Please enter at least 2 characters.");
      ok = false;
    }

    if (!isValidEmail(email)) {
      setError(emailError, "Please enter a valid email address.");
      ok = false;
    }

    if (message.length < 10) {
      setError(messageError, "Message must be at least 10 characters.");
      ok = false;
    }

    if (ok) {
      // Demo success only (no backend). You can later connect EmailJS / Formspree.
      if (success) success.textContent = "Message validated successfully (demo).";
      form.reset();
    }
  });
}
