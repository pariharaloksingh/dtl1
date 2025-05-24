document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form-container form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mobile = document.getElementById("mobile").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !mobile || !message) {
                alert("Please fill in all fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("mobile", mobile);
            formData.append("message", message);

            fetch("https://formspree.io/f/meogwgnd", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert("Thank you, " + name + "! Your message has been sent.");
                    form.reset();
                } else {
                    alert("Oops! Something went wrong. Please try again later.");
                }
            })
            .catch(error => {
                console.error("Form submission error:", error);
                alert("An error occurred while sending your message.");
            });
        });
    }
});


 // Back to Top Button Functionality footer
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Newsletter Form Functionality
    document.querySelector('.newsletter-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('.newsletter-input input');
        const email = emailInput.value.trim();
        
        if (email && email.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });