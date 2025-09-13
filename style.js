function navigateTo(page) {
  window.location.href = page;
}


function showContact() {
  document.getElementById('contactModal').style.display = 'flex';
}

function hideContact() {
  document.getElementById('contactModal').style.display = 'none';
}

window.addEventListener('click', function (e) {
  const modal = document.getElementById('contactModal');
  if (e.target === modal) {
      hideContact();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.getElementById("navMenu");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggleBtn.textContent = nav.classList.contains("active") ? "✖" : "☰";
  });
});
