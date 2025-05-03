// Button logic
const btn = document.getElementById("magicBtn");
let toggled = false;

btn.addEventListener("click", () => {
    toggled = !toggled;
    btn.textContent = toggled ? "Clicked!" : "Click Me!";
    btn.style.backgroundColor = toggled ? "#28a745" : "#007bff";
});

// Image gallery logic
const images = [
    "https://plus.unsplash.com/premium_photo-1675972828435-ef9f2f07effa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amF2YXNjcmlwdCUyMGV2ZW50JTIwaGFuZGxpbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1554306274-f23873d9a26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphdmFzY3JpcHQlMjBldmVudCUyMGhhbmRsaW5nfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1682464651356-3c6780eff00c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGphdmFzY3JpcHQlMjBldmVudCUyMGhhbmRsaW5nfGVufDB8fDB8fHww"
];
let currentImg = 0;

function changeImage(direction) {
    currentImg = (currentImg + direction + images.length) % images.length;
    const img = document.getElementById("galleryImg");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = images[currentImg];
        img.style.opacity = 1;
    }, 300);
}

// Tabs logic
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
}
// Hamburger menu toggle
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("show");
});
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameFeedback = document.getElementById("nameFeedback");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

// Name Validation
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() === "") {
    nameFeedback.textContent = "Name is required.";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  } else {
    nameFeedback.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }
});

// Email Validation
emailInput.addEventListener("input", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailFeedback.textContent = "Enter a valid email address.";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
  } else {
    emailFeedback.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }
});

// Password Validation
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
  } else {
    passwordFeedback.textContent = "";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
  }
});

// Final check on submit
document.getElementById("registerForm").addEventListener("submit", (e) => {
  if (
    nameInput.value.trim() === "" ||
    !emailInput.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) ||
    passwordInput.value.length < 8
  ) {
    e.preventDefault();
    alert("Please fix the errors before submitting.");
  }
});
