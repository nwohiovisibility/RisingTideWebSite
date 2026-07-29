/* =======================================================
   FILE: header.js
   PURPOSE:
       Dynamically loads and injects the shared header component
       into any Rising Tide or NOVA webpage that includes a
       <div id="header"></div> placeholder.

   DESCRIPTION:
       This script fetches the contents of header.html and inserts
       it directly into the DOM. After injection, it reattaches the
       hamburger menu functionality so mobile navigation works
       correctly.

   SUPPORTED BY:
       - header.html (static header markup)
       - styles.css (visual styling for navigation)
       - main.js (general site behavior)
       - footer.js (paired with header injection for layout)

   DEPENDENCIES:
       - A valid <div id="header"></div> element in the page
       - The header.html file located in the same directory

   NOTES:
       - No logic beyond fetch + inject + event binding.
       - Update documentation if navigation structure changes.
       - This script is used by every page in the Rising Tide site.

   VERSION: v1.0.0
   LAST UPDATED: 2026-07-07
   AUTHOR: Brian Von Wert / Rising Tide
======================================================= */

fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Hamburger menu toggle AFTER header loads
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }
  });
