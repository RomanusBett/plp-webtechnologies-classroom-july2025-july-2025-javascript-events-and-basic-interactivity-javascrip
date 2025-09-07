
const planets = document.querySelectorAll(".planet");
const planetInfo = document.getElementById("planetInfo");

planets.forEach(planet => {
  planet.addEventListener("mouseover", () => {
    planetInfo.textContent = planet.dataset.info;
  });

  planet.addEventListener("mouseout", () => {
    planetInfo.textContent = "Hover over a planet to see details here...";
  });
});


const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

const questions = document.querySelectorAll(".faq-question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});


const form = document.getElementById("spaceForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  }

  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }

  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*[0-9]).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 chars and include a number.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
