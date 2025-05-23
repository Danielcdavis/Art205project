const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const profile = document.getElementById("profile");

profile.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Hide modal on clicking outside modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Show a confirmation dialog
    const confirmation = confirm("Are you sure you want to submit this form?");

    // Check the user's response
    if (confirmation) {
      // If confirmed, submit the form
      alert("Form submitted successfully!");
      this.submit();
    } else {
      // If canceled, do nothing
      alert("Form submission canceled.");
    }
  });
