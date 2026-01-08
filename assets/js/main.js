/* main.js — navegación responsive, estado activo, modo oscuro persistente, año dinámico */
(function () {
  const html = document.documentElement;

  // Persisted theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") html.setAttribute("data-theme", "dark");
  if (savedTheme === "light") html.setAttribute("data-theme", "light");

  // Elements
  const nav = document.getElementById("primary-nav");
  const toggle = document.querySelector(".nav-toggle");
  const themeToggle = document.querySelector(".theme-toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile menu
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on link click (mobile)
    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = html.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // Active section indicator
  const sectionIds = ["about", "projects", "contact"];
  const links = sectionIds
    .map((id) => document.querySelector(`#primary-nav a[href="#${id}"]`))
    .filter(Boolean);

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (sections.length && links.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => a.removeAttribute("aria-current"));
          const active = document.querySelector(`#primary-nav a[href="#${entry.target.id}"]`);
          if (active) active.setAttribute("aria-current", "page");
        });
      },
      { root: null, threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
  }
})();
