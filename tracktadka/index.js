document.addEventListener('DOMContentLoaded', function () {
  // Get form and modal elements
  const contactForm = document.getElementById('contactForm');
  const getOtpBtn = document.getElementById('getOtpBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const trainInsideBtn = document.getElementById('trainInsideBtn');
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  const mainPage = document.getElementById('main-page'); 
  const staticBackdrop = new bootstrap.Modal(document.getElementById('staticBackdrop'));

  // Handle OTP button click
  getOtpBtn.addEventListener('click', function () {
    alert('OTP sent to your phone number');
  });

  // Handle Cancel button click
  cancelBtn.addEventListener('click', function () {
    contactForm.reset(); // Reset the form
  });

  // Handle Train Inside button click
  trainInsideBtn.addEventListener('click', function () {
    staticBackdrop.show();
  });

  // Form submission event listener
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Perform validation or further processing here

    modal.show(); // Show the modal after form submission
  });

  // Modal lights blinking animation
  const lights = document.querySelectorAll('.lights');
  let blinkInterval;

  trainInsideBtn.addEventListener('click', function () {
    blinkInterval = setInterval(function () {
      lights.forEach(light => {
        light.classList.toggle('active');
      });
    }, 500);
  });

  //modals
  document.getElementById('staticBackdrop').addEventListener('shown.bs.modal', function () {
        mainPage.classList.add('background-blur'); // Add blur effect to the main page
        document.getElementById('exampleModal').style.display = 'none'; // Hide exampleModal
    });

    document.getElementById('staticBackdrop').addEventListener('hidden.bs.modal', function () {
        mainPage.classList.remove('background-blur'); // Remove blur effect from the main page
        document.getElementById('exampleModal').style.display = 'block'; // Show exampleModal
    });

  // Stop blinking lights when the modal is closed
  document.getElementById('staticBackdrop').addEventListener('hidden.bs.modal', function () {
    clearInterval(blinkInterval);
    lights.forEach(light => {
      light.classList.remove('active');
    });
  });
});




