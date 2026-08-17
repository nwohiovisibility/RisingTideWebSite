/* =======================================================
   FILENAME: main.js
   LAST EDIT DATE: 2026-08-17 EST
   VERSION: 1.3.0

   PURPOSE:
       Provides general interactive behavior for the Rising Tide
       website. Header and footer markup is now inlined into each
       page by build.js at build time (no longer fetched at
       runtime), so this file also owns the hamburger menu toggle
       that previously lived in header.js.

   DESCRIPTION:
       Includes the mobile nav hamburger toggle and a defensive
       leadership bio toggle system that safely handles missing
       targets or incomplete markup, preventing runtime errors
       when a toggle or bio element is absent.
======================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.onclick = () => {
            navLinks.classList.toggle("show");
        };
    }

    const toggles = document.querySelectorAll(".leader-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const targetId = toggle.getAttribute("data-target");
            if (!targetId) return;

            const targetBio = document.getElementById(targetId);
            if (!targetBio) return;

            document.querySelectorAll(".bio").forEach(bio => {
                if (bio !== targetBio) {
                    bio.style.display = "none";
                }
            });

            targetBio.style.display =
                targetBio.style.display === "block" ? "none" : "block";
        });
    });
});
