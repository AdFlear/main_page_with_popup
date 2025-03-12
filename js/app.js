import '../css/style.scss'

document.addEventListener("DOMContentLoaded", () => {
  const fab = document.getElementById("fabButton");
  const popup = document.getElementById("popup");
  const tabs = document.querySelectorAll(".tabs__button");
  const tabContents = document.querySelectorAll(".popup__tab-content");
  const timerElement = document.querySelectorAll(".timer");
  const closePopup = document.getElementById("closeBtn");

  fab.addEventListener("click", () => {
    popup.classList.add("active");
    fab.classList.add("active");
    popup.classList.remove("closing");
  });

  closePopup.addEventListener("click", () => {
    popup.classList.add("closing");
    fab.classList.remove("active");

    setTimeout(() => {
      popup.classList.remove("active", "closing");
    }, 300);
  });

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      tabContents.forEach(content => content.classList.remove("active"));
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  function updateTimer() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(23, 59, 59, 999);

    const diff = tomorrow - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    timerElement.forEach((time) => {
      time.innerText =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    })

  }

  setInterval(updateTimer, 1000);
  updateTimer();
});
