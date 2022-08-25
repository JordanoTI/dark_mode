const chengeThemeBtn = document.querySelector("#change-theme");

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
};

// Load Mode Theme
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

chengeThemeBtn.addEventListener("change", () => {
    toggleDarkMode();

    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1);
    };
});