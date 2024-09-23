/*scrolling*/
const boxesContainer = document.querySelector('.boxes');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollAmount = 0;

rightArrow.addEventListener('click', () => {
    scrollAmount += 299;
    boxesContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

leftArrow.addEventListener('click', () => {
    scrollAmount -= 300;
    if (scrollAmount < 0) scrollAmount = 0;
    boxesContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

/*steps*/
let currentStepIndex = 0;
const steps = document.querySelectorAll('.step');
const stepIndicators = document.querySelectorAll('.sh');

function showStep(index) {
    steps.forEach((step, i) => {
        step.classList.remove('active');
        stepIndicators[i].classList.remove('active');
    });
    steps[index].classList.add('active');
    stepIndicators[index].classList.add('active');
}
function autoChangeStep() {
    showStep(currentStepIndex);
    currentStepIndex = (currentStepIndex + 1) % steps.length;
}
setInterval(autoChangeStep, 2000);
showStep(0);

/* feedbacks*/
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}
function startAutoSlide() {
    showTestimonial(currentIndex);
    currentIndex = (currentIndex + 1) % testimonials.length;
}
setInterval(startAutoSlide, 2000);
showTestimonial(0);

//FAQs
const questions = document.querySelectorAll('.faq .ques .que');

// Loop through each question block and add event listener
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked question block
        question.classList.toggle('active');
    });
});







