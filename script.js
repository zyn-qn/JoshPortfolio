const root = document.documentElement;
        const toggle = document.getElementById("themeToggle");
        const icon = document.getElementById("themeIcon");

        function applyIcon(theme) {
            icon.className =
                theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }

        applyIcon(root.getAttribute("data-theme"));

        toggle.addEventListener("click", () => {
            const current = root.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            applyIcon(next);
        });

        console.log("Welcome to Rod Joshua Aquino's Portfolio");