console.log("main.js loaded");

/* =======================================================
   FILE: main.js
   PURPOSE:
       Provides general interactive behavior for the Rising Tide
       website that does NOT depend on dynamically injected header
       elements.
======================================================= */

// Leadership bio toggle system
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".leader-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const targetId = toggle.getAttribute("data-target");
            const targetBio = document.getElementById(targetId);

            // Close all bios first
            document.querySelectorAll(".bio").forEach(bio => {
                if (bio !== targetBio) {
                    bio.style.display = "none";
                }
            });

            // Toggle the selected bio
            targetBio.style.display =
                targetBio.style.display === "block" ? "none" : "block";
        });
    });
});
