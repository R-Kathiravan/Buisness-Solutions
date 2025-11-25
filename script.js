const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-items");
const closeBtn = document.querySelector(".btn-close");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("show");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});

document.addEventListener("click", function (e) {
  const clickedInsideMenu = menu.contains(e.target);
  const clickedHamburger = hamburger.contains(e.target);

  if (!clickedInsideMenu && !clickedHamburger && menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
});

function validateEmailForm(event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = form.querySelector('input[type="email"]');

  if (!emailInput) return;

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    showToast("Please enter a valid email address!", "error");
    emailInput.focus();
    emailInput.style.borderColor = 'red';
    return;
  }
  window.location.href = "404page.html";
}
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", validateEmailForm);
});

function showToast(message, type = "default") {
  const toast = document.getElementById("toast");

  toast.textContent = message;

  if (type === "success") toast.style.background = "#28a745";
  else if (type === "error") toast.style.background = "#dc3545";
  else if (type === "info") toast.style.background = "#007bff";
  else toast.style.background = "#333";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}