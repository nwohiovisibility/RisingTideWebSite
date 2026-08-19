/* =======================================================
   FILENAME: main.js
   LAST EDIT DATE: 2026-08-19 EST
   VERSION: 1.4.0

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
       when a toggle or bio element is absent. Both toggles keep
       their `aria-expanded` state in sync so screen reader users
       get the same open/closed signal as the arrow icon and menu
       visibility give sighted users.
======================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.onclick = () => {
            const isOpen = navLinks.classList.toggle("show");
            hamburger.setAttribute("aria-expanded", String(isOpen));
        };
    }

    const toggles = document.querySelectorAll(".leader-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const targetId = toggle.getAttribute("data-target");
            if (!targetId) return;

            const targetBio = document.getElementById(targetId);
            if (!targetBio) return;

            const isOpen = targetBio.style.display === "block";

            document.querySelectorAll(".bio").forEach(bio => {
                bio.style.display = "none";
            });
            toggles.forEach(t => t.setAttribute("aria-expanded", "false"));

            if (!isOpen) {
                targetBio.style.display = "block";
                toggle.setAttribute("aria-expanded", "true");
            }
        });
    });
});
