document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission (no redirect)

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Ask for JSON response
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                form.reset(); // Reset form fields
            } else {
                // Show error message
                successMessage.style.display = 'none';
                errorMessage.style.display = 'block';
            }
        })
        .catch(error => {
            // Handle network errors
            console.error('Error:', error);
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
        });
    });
});
