/* =======================================================
   FILENAME: main.js
   LAST EDIT DATE: 2026-08-17 EST
   VERSION: 1.2.0

   PURPOSE:
       Provides general interactive behavior for the Rising Tide
       website that does NOT depend on dynamically injected header
       elements.

   DESCRIPTION:
       This file includes a defensive leadership toggle system
       that safely handles missing targets or incomplete markup.
       It prevents runtime errors when a toggle or bio element is
       absent.
======================================================= */

document.addEventListener("DOMContentLoaded", function () {
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
