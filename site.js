// Theme switch. The page follows the system theme until the reader picks one.
// The choice is stored under the same "theme" key the old site used.
(function () {
  var button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  var root = document.documentElement;
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function current() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }
  function label() {
    button.textContent = current() === "dark" ? "Light theme" : "Dark theme";
  }

  button.hidden = false; // the button only shows when this script runs
  label();
  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    label();
  });
  systemDark.addEventListener("change", label);
})();
