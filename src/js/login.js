// Tabs and Forms
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

function switchTabs(activeTab, inactiveTab, activeForm, inactiveForm) {
  activeTab.classList.add("active");
  inactiveTab.classList.remove("active");
  activeForm.classList.remove("hidden");
  inactiveForm.classList.add("hidden");
}

loginTab.addEventListener("click", () => {
  switchTabs(loginTab, registerTab, loginForm, registerForm);
});

registerTab.addEventListener("click", () => {
  switchTabs(registerTab, loginTab, registerForm, loginForm);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login Successful! Redirecting to Feed...");
  window.location.href = "feed.html";
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration Successful! Please log in.");
  switchTabs(loginTab, registerTab, loginForm, registerForm);
});
