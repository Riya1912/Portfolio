document.addEventListener("DOMContentLoaded", function () {
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");
  const placesContainer = document.querySelector(".place");


  //popup

// Function to show the popup
function showPopup() {
  document.getElementById('loginSignupPopup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
  document.getElementById('loginSignupPopup').style.display = 'none';
}

// Attach event listener to the close button
document.getElementById('closePopup').addEventListener('click', closePopup);

// Function to switch to phone verification view
document.getElementById('continueWithPhone').addEventListener('click', function() {
  document.getElementById('loginOptions').style.display = 'none';
  document.getElementById('phoneVerification').style.display = 'block';
});

// Function to check scroll time and trigger the popup
function checkScrollTime() {
  let startTime = Date.now();
  
  window.addEventListener('scroll', function() {
      if (Date.now() - startTime >= 2000) {
          showPopup();
          window.removeEventListener('scroll', arguments.callee); // Remove the event listener after showing the popup
      }
  });
}

// Call the function to check scroll time on page load
window.onload = function() {
  checkScrollTime();
}

//otp verified

// Function to show the OTP verification popup
function showOtpPopup(phoneNumber) {
  document.getElementById('otpPhoneNumber').innerText = phoneNumber;
  document.getElementById('otpVerification').style.display = 'block';
  startOtpTimer();
}

// Function to start the OTP timer
function startOtpTimer() {
  let timeLeft = 25; // Total time in seconds
  const timerDisplay = document.getElementById('timer');
  timerDisplay.innerText = formatTime(timeLeft);

  const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.innerText = "Resend OTP"; // Optionally, enable a resend button here
    }
  }, 1000);
}

// Function to format time as mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Attach event listener to verify OTP button
document.getElementById('verifyOtp').addEventListener('click', function() {
  const enteredOtp = document.getElementById('otpInput').value;
  // Add your OTP verification logic here

  // For demonstration, close the popup on click
  closeOtpPopup();
});

// Attach event listener to close OTP popup
document.getElementById('closeOtpPopup').addEventListener('click', closeOtpPopup);

// Modify the phone number button event to show the OTP popup
document.getElementById('forotp').addEventListener('click', function() {
  document.getElementById('loginOptions').style.display = 'none';
  document.getElementById('phoneVerification').style.display = 'block';
  const phoneNumber = document.getElementById('phoneNumber').value;
  showOtpPopup(phoneNumber);
});

// Function to close the OTP verification popup
function closeOtpPopup() {
  document.getElementById('otpVerification').style.display = 'none';
  document.getElementById('otpInput').value = ''; // Clear the OTP input field
}





// place scrolling box
  leftButton.addEventListener("click", function () {
    placesContainer.scrollBy({
      left: -350,
      behavior: 'smooth'
    });
  });

  rightButton.addEventListener("click", function () {
    placesContainer.scrollBy({
      left: 350,
      behavior: 'smooth'
    });
    leftButton.style.display = 'block';
  });
});



//place
const navLinks = document.querySelectorAll('.nav a');
const destinationItems = document.querySelectorAll('.destination-item');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');

    const target = link.getAttribute('data-target');

    destinationItems.forEach(item => {
      if (item.classList.contains(target)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
navLinks[0].click();

document.querySelectorAll('.btn-minus').forEach(button => {
  button.addEventListener('click', () => {
      const numberSpan = button.nextElementSibling;
      let number = parseInt(numberSpan.textContent);
      if (number > 0) {
          numberSpan.textContent = number - 1;
      }
  });
});

document.querySelectorAll('.btn-plus').forEach(button => {
  button.addEventListener('click', () => {
      const numberSpan = button.previousElementSibling;
      let number = parseInt(numberSpan.textContent);
      numberSpan.textContent = number + 1;
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var popUp = document.getElementById("booking-popup");
  var closeBtn = document.querySelector(".popup .out");
  var bookButtons = document.querySelectorAll(".button button");

  bookButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
          var placeContainer = event.target.closest('.type');
          var place = placeContainer.querySelector('.book').textContent.trim();
          var price = placeContainer.querySelector('.package-price').textContent.trim();
          var adults = placeContainer.querySelector('.form label:nth-child(1) .number').textContent.trim();
          var children = placeContainer.querySelector('.form label:nth-child(2) .number').textContent.trim();

          document.getElementById('popup-place').value = place;
          document.getElementById('popup-price').value = price;
          document.getElementById('popup-adults').value = adults;
          document.getElementById('popup-children').value = children;

          popUp.style.display = "block";
      });
  });

  closeBtn.addEventListener("click", function() {
      popUp.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target == popUp) {
          popUp.style.display = "none";
      }
  });
});


//buttons
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Open modal function
function openModal(title, imgSrc, description, price) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-image").src = imgSrc;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal-price").textContent = price;
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

const readMoreButtons = document.querySelectorAll('.read button');
readMoreButtons.forEach(button => {
  button.addEventListener('click', function () {
    const destinationItem = this.closest('.destination-item');
    const title = destinationItem.querySelector('h1').textContent;
    const imgSrc = destinationItem.querySelector('img').src;
    const description = destinationItem.querySelector('p').textContent;
    const price = "Price: ₹3500";

    openModal(title, imgSrc, description, price);
  });
});


//Download app
document.getElementById('downloadButton').addEventListener('click', function () {
  const qrCode = document.getElementById('qrCode');

  if (qrCode.style.display === 'none') {
    qrCode.style.display = 'block';
  } else {
    qrCode.style.display = 'none';
  }
});

// Faqs
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    question.addEventListener('click', function () {
      const answer = this.querySelector('.answer');

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
        answer.style.display = 'block';
      }
    });
  });
});


//get in touch
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !phone || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message! We will get back to you soon.');

  document.getElementById('contactForm').reset();
});

//footer
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.footer-section.newsletter form');

  newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
          // Display a message to the user (you can replace this with an AJAX request)
          alert(`Thank you for subscribing with ${email}!`);

          // Clear the input field
          emailInput.value = '';
      } else {
          alert('Please enter a valid email address.');
      }
  });
});
