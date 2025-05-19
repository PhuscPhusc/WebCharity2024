document.addEventListener("DOMContentLoaded", function () {
  const inquiryForm = document.getElementById('inquiry-form');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();

      document.getElementById('nameError').textContent = "";
      document.getElementById('emailError').textContent = "";
      document.getElementById('eventError').textContent = "";
      document.getElementById('categoryError').textContent = "";

      let valid = true;

      const name = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const event = document.getElementById('event').value;
      const categories = document.querySelectorAll('input[name="category"]:checked');
      const details = document.getElementById('details').value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name === "") {
        document.getElementById('nameError').textContent = "Full Name is required.";
        valid = false;
      }

      if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
        valid = false;
      }

      if (event === "") {
        document.getElementById('eventError').textContent = "Please select an event.";
        valid = false;
      }

      if (categories.length === 0) {
        document.getElementById('categoryError').textContent = "Please select at least one category.";
        valid = false;
      }

      if (valid) {
        alert("Your enquiry has been submitted successfully!");

        const selectedCategories = Array.from(categories).map(cb => cb.value).join(', ');
        const summary = `
Your Submission:
-------------------------
Full Name: ${name}
Email: ${email}
Event: ${event}
Category: ${selectedCategories}
Details: ${details || "(No details provided)"}
        `;
        alert(summary);
        this.reset();
      }
    });
  }
});
