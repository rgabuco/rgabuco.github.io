document.addEventListener("DOMContentLoaded", function() {
    /* Get references to the main navigation links and cheat sheet dropdown links */
    const navLinks = document.querySelectorAll("nav a");
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");

    /* Combine all links into a single NodeList */
    const allLinks = Array.from(navLinks).concat(Array.from(dropdownLinks));

    /* Define click event handlers for each link */
    allLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            /* Prevent default link behavior */
            event.preventDefault();

            /* Get the destination URL */
            const destination = this.getAttribute("href");

            /* Add page transition class to body */
            document.body.classList.add("page-transition");

            /* Wait for transition to complete before navigating to the destination */
            setTimeout(function() {
                window.location.href = destination;
            }, 200);
        });
    });

  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  /* Event listener for clicking the Cheat Sheet dropdown button */
  dropbtn.addEventListener('click', function() {
      if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
      } else {
          dropdownContent.style.display = 'block';
      }
  });

  /* Close the dropdown when clicking outside of it */
  window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropbtn')) {
          dropdownContent.style.display = 'none';
      }
  });
  /* Event listener for "Download CV" button */
  document.getElementById("downloadBtn").addEventListener("click", function() {
    window.open('../assets/rudy-cv.pdf', "_blank");
  });
});
