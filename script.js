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

// ---------- Scroll Reveal Animation ----------

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");

                // Animate only once
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

        console.log("Welcome to Rod Joshua Aquino's Portfolio");
