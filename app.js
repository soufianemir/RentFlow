const alerts = [
  { title: "Rent Payment Overdue", lease: "Adams House", status: "Late", date: "Apr 11, 2024" },
  { title: "Exit Inspection Due", lease: "Park View Apt.", status: "Reminder", date: "Apr 08, 2024" },
  { title: "Exit Inspection Due", lease: "Park View Apt.", status: "Reminder", date: "Mar 29, 2024" },
];

function renderAlerts(filter = "") {
  const body = document.getElementById("alertsTable");
  const f = filter.trim().toLowerCase();
  const rows = alerts
    .filter(a => !f || `${a.title} ${a.lease} ${a.status} ${a.date}`.toLowerCase().includes(f))
    .map(a => {
      const badge =
        a.status === "Late"
          ? `<span class="badge badge--late"><span class="dot dot--red"></span>Late</span>`
          : `<span class="badge badge--reminder"><span class="dot"></span>Reminder</span>`;
      return `
        <div class="table__row" role="row">
          <div role="cell">${a.title}</div>
          <div role="cell">${a.lease}</div>
          <div role="cell">${badge}</div>
          <div role="cell" class="right">${a.date}</div>
        </div>
      `;
    })
    .join("");

  body.innerHTML = rows || `<div class="table__row" role="row"><div role="cell" class="muted">No results</div><div></div><div></div><div></div></div>`;
}

function setTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  const icon = document.getElementById("themeIcon");
  if (icon) icon.textContent = next === "light" ? "☀︎" : "◐";
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return setTheme(saved);
  // default: dark (comme le template)
  setTheme("dark");
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
}

function switchView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("is-visible"));
  const el = document.getElementById(`view-${name}`);
  if (el) el.classList.add("is-visible");

  document.querySelectorAll(".nav__item").forEach(b => b.classList.remove("is-active"));
  const btn = document.querySelector(`.nav__item[data-view="${name}"]`);
  if (btn) btn.classList.add("is-active");
}

function initNav() {
  document.querySelectorAll(".nav__item").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });
}

function initSearch() {
  const input = document.getElementById("searchInput");
  input?.addEventListener("input", (e) => renderAlerts(e.target.value));
}

function initButtons() {
  document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);
  document.getElementById("themeBtn2")?.addEventListener("click", toggleTheme);

  document.getElementById("viewAllBtn")?.addEventListener("click", () => {
    alert("V1: ici tu ouvrirais la page 'Alerts' complète.");
  });

  document.getElementById("importLeaseBtn")?.addEventListener("click", () => {
    alert("V1: import de bail (PDF) + extraction + création du dossier.");
  });

  document.getElementById("createLeaseBtn")?.addEventListener("click", () => {
    alert("V1: wizard de création de bail.");
  });

  document.getElementById("openPeriodBtn")?.addEventListener("click", () => {
    alert("V1: page période mensuelle avec facture, paiements, documents, quittance.");
  });

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    alert("V1: logout.");
  });
}

initTheme();
initNav();
initSearch();
initButtons();
renderAlerts();
switchView("dashboard");
