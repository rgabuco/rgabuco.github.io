document.addEventListener("DOMContentLoaded", function(){
    /* Event listener for "Download CV" button */
    document.getElementById("downloadCV").addEventListener("click", function() {
    window.open('../assets/files/rudy-cv.pdf', "_blank");
    });
});
