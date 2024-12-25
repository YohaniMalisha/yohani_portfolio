// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
window.onscroll = function() {
    let scrollButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

    // Clear form data when the thank-you page is loaded
    window.addEventListener("load", function () {
        history.replaceState(null, null, location.href); // Clear form submission from history
    });
    document.querySelector("form").addEventListener("submit", function (event) {
        setTimeout(() => {
            event.target.reset(); // Clears the form fields
        }, 500); // Wait for Formspree to process the submission
    });
    
