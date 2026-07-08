/* ======================================================= FILE: main.js PURPOSE: Provides general interactive behavior for the Rising Tide website, including navigation toggling and shared UI functionality used across all pages.

DESCRIPTION: This script attaches the hamburger menu toggle behavior for mobile 
navigation. It works alongside header.js, which injects the header markup dynamically. 
When the hamburger icon is clicked, the navigation menu expands or collapses.

SUPPORTED BY: - header.js (injects header and menu elements) - styles.css (defines
 .hamburger and .nav-links behavior) - footer.js (paired for consistent layout across 
 pages)

DEPENDENCIES: - A valid <div id="header"></div> with injected markup - Elements with IDs: 
#hamburger and #nav-links

NOTES: - No additional logic is embedded here. - Update documentation if navigation 
structure changes. - This script is used by every page in the Rising Tide site.

VERSION: v1.0.0

LAST UPDATED: 2026-07-07

AUTHOR: Brian Von Wert / Rising Tide ================================================ */
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
