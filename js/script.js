document.addEventListener('DOMContentLoaded', function() {

    // ===== 1. LIGHTBOX FUNCTIONALITY =====
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".close-lightbox");

    const images = document.querySelectorAll('.clickable-img');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            if (lightbox && lightboxImg) {
                lightbox.style.display = "block";
                lightboxImg.src = this.src;
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            lightbox.style.display = "none";
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // ===== 2. FORM VALIDATION =====
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const nameInput = document.getElementById('name') || document.getElementById('contact-name');
            const emailInput = document.getElementById('email') || document.getElementById('contact-email');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields.");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been sent successfully to Ubuntu Bakery.");
            form.reset(); 
        });
    });

});
    // ===== 3. SEARCH FUNCTIONALITY =====
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const filter = this.value.toLowerCase();
            const products = document.querySelectorAll('.product-item'); 
            products.forEach(function(product) {
                const text = product.textContent.toLowerCase();
                if (text.includes(filter)) {
                    product.style.display = ""; 
                } else {
                    product.style.display = "none"; 
                }
            });
        });
    }
