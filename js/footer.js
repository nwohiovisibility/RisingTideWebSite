/* =======================================================
   FILE: footer.js
   PURPOSE:
     Dynamically loads and injects the shared footer component
     into any Rising Tide or NOVA webpage that includes a
     <div id="footer"></div> placeholder.

   DESCRIPTION:
     This script fetches the contents of footer.html and
     inserts it directly into the page DOM. It ensures that
     all pages share a consistent footer without duplicating
     HTML across multiple files.

   SUPPORTED BY:
     - footer.html (static footer markup)
     - styles.css (visual styling for footer)
     - main.js (general site behavior)
     - header.js (paired with footer injection for layout)

   DEPENDENCIES:
     - A valid <div id="footer"></div> element in the page
     - The footer.html file located in the same directory

   NOTES:
     - No logic beyond fetch + inject is embedded here.
     - Update documentation if footer loading behavior changes.
     - This script is used by every page in the Rising Tide site.

   VERSION:
     v1.0.0

   LAST UPDATED:
     2026-07-07

   AUTHOR:
     Brian Von Wert / Rising Tide
======================================================= */
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });
