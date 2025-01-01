// Add any JavaScript functionality here.
// Below is an example of a simple contact form submission handler.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name    = document.getElementById('name').value;
    const email   = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nForm submitted successfully!`);

    // Clear the form
    form.reset();
  });
});

