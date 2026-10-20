document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".themeToggle");

    if (!toggle) {
        console.error("Theme toggle button not found!");
        return;
    }

    const savedTheme = localStorage.getItem("antara-theme");

    if (savedTheme === null || savedTheme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    function updateThemeLabel() {
        const isDark = document.body.classList.contains("dark");

        toggle.setAttribute(
            "aria-label",
            `Switch to ${isDark ? "light" : "dark"} theme`
        );

        toggle.setAttribute(
            "title",
            `Switch to ${isDark ? "light" : "dark"} theme`
        );
    }

    updateThemeLabel();

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        localStorage.setItem("antara-theme", isDark ? "dark" : "light");

        updateThemeLabel();
    });
});