/* =======================================================
   FILENAME: footer.js
   LAST EDIT DATE: 2026-08-13 EST
   VERSION: 1.1.0

   PURPOSE:
     Dynamically loads and injects the shared footer component
     into any Rising Tide or NOVA webpage that includes a
     <div id="footer"></div> placeholder.

   DESCRIPTION:
     This script fetches the contents of footer.html and
     inserts it directly into the page DOM. It includes defensive
     checks to avoid runtime errors if the host element is missing
     or the remote file cannot be loaded.

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
     - Added safety checks for early-stage site reliability.

   AUTHOR:
     Brian Von Wert / Rising Tide
======================================================= */

const footerHost = document.getElementById("footer");

if (footerHost) {
    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Footer fetch failed with status ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            footerHost.innerHTML = data;
        })
        .catch(error => {
            console.error("Unable to load footer:", error);
            footerHost.innerHTML = "<footer><div class=\"container\"><p>Footer unavailable.</p></div></footer>";
        });
}
