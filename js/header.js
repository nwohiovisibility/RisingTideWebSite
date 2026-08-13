/* =======================================================
   FILENAME: header.js
   LAST EDIT DATE: 2026-08-13 EST
   VERSION: 1.1.0

   PURPOSE:
       Dynamically loads and injects the shared header component
       into any Rising Tide or NOVA webpage that includes a
       <div id="header"></div> placeholder.

   DESCRIPTION:
       This script fetches the contents of header.html and inserts
       it directly into the DOM. It includes defensive checks to
       avoid errors when the element is missing or the fetch fails.
       After injection, it reattaches the hamburger menu
       functionality so mobile navigation works correctly.

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
       - Added safety checks for early-stage site reliability.

   AUTHOR:
       Brian Von Wert / Rising Tide
======================================================= */

const headerHost = document.getElementById("header");

if (headerHost) {
    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Header fetch failed with status ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            headerHost.innerHTML = data;

            const hamburger = document.getElementById("hamburger");
            const navLinks = document.getElementById("nav-links");

            if (hamburger && navLinks) {
                hamburger.onclick = () => {
                    navLinks.classList.toggle("show");
                };
            }
        })
        .catch(error => {
            console.error("Unable to load header:", error);
            headerHost.innerHTML = "<header><div class=\"container\"><p>Navigation unavailable.</p></div></header>";
        });
}
