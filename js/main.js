const link = document.querySelector(".link");
const linkIcon = document.querySelector(".link_icon");
const logoutButton = document.querySelector(".navbar__login .link");
const admin__link = document.querySelector(".admin__link");

function checkLinkStatus() {
  const token = localStorage.getItem("x-auth-token");
  if (token) {
    link.classList.add("logout");
    link.textContent = "Log out";
    linkIcon.innerHTML = `<i class="fa-solid fa-door-open"></i>`;
    admin__link.innerHTML = `<a class="admin__link" href="/pages/admin.html"><p>admin</p></a>`;
  } else {
    link.textContent = "Login";
    linkIcon.innerHTML = `<i class="fa-solid fa-door-closed"></i>`;
  }
}

checkLinkStatus();

logoutButton.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("x-auth-token");
  checkLinkStatus();
  window.location.href = "/pages/login.html";
});
