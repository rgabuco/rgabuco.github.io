document.addEventListener("DOMContentLoaded", function(){
    /* Event listener for "Download CV" button */
    document.getElementById("downloadBtn").addEventListener("click", function() {
    window.open('../assets/rudy-cv.pdf', "_blank");
    });
});
