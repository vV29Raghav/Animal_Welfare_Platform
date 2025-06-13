document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');
    const parallaxContent = aboutSection.querySelector('.parallax-content');

    function handleScroll() {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollProgress = Math.min(1, Math.max(0, (windowHeight - rect.top) / windowHeight));
            const translateValue = (1 - scrollProgress) * -100; 

            parallaxContent.style.transform = `translateX(${translateValue}px)`;
            parallaxContent.style.transition = 'transform 0.02s ease-out'; 
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const reportForm = document.getElementById("report-form");
const adoptionForm = document.getElementById("adoption-form");
const lostForm = document.getElementById("lost-form");
const foundForm = document.getElementById("found-form");
const contactForm = document.getElementById("contact-form");
const signupForm = document.getElementById("signup-form");
const reminderForm = document.getElementById("reminder-form");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});

document.addEventListener("click", (event) => {
    if (!mobileMenu.classList.contains("hidden") && !mobileMenu.contains(event.target) && event.target !== hamburgerBtn) {
        mobileMenu.classList.add("hidden");
    }
});

function openReportForm() {
    reportForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeReportForm() {
    reportForm.classList.add("hidden");
    document.body.style.overflow = "";
}

function openAdoptionForm(petName = "") {
    adoptionForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("pet-name").value = petName;
}

function closeAdoptionForm() {
    adoptionForm.classList.add("hidden");
    document.body.style.overflow = "";
}

function openLostForm() {
    lostForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeLostForm() {
    lostForm.classList.add("hidden");
    document.body.style.overflow = "";
}

function openFoundForm() {
    foundForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeFoundForm() {
    foundForm.classList.add("hidden");
    document.body.style.overflow = "";
}

function openContactForm() {
    contactForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeContactForm() {
    contactForm.classList.add("hidden");
    document.body.style.overflow = "";
}

function openSignupForm() {
    signupForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeSignupForm() {
    signupForm.classList.add("hidden");
    document.body.style.overflow = "";
}

function openReminderForm() {
    reminderForm.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeReminderForm() {
    reminderForm.classList.add("hidden");
    document.body.style.overflow = "";
}

function openGoogleMaps() {
    window.open("https://www.google.com/maps/search/vet+hospitals+near+me", "_blank");
}

document.addEventListener('click', (event) => {
    if (reportForm && !reportForm.classList.contains('hidden') && !reportForm.contains(event.target) && event.target !== document.querySelector('[onclick="openReportForm()"]')) {
        closeReportForm();
    }
    if (adoptionForm && !adoptionForm.classList.contains('hidden') && !adoptionForm.contains(event.target) && !event.target.closest('[onclick^="openAdoptionForm"]')) {
        closeAdoptionForm();
    }
    if (lostForm && !lostForm.classList.contains('hidden') && !lostForm.contains(event.target) && event.target !== document.querySelector('[onclick="openLostForm()"]')) {
        closeLostForm();
    }
    if (foundForm && !foundForm.classList.contains('hidden') && !foundForm.contains(event.target) && event.target !== document.querySelector('[onclick="openFoundForm()"]')) {
        closeFoundForm();
    }
    if (contactForm && !contactForm.classList.contains('hidden') && !contactForm.contains(event.target) && event.target !== document.querySelector('[onclick="openContactForm()"]')) {
        closeContactForm();
    }
    if (signupForm && !signupForm.classList.contains('hidden') && !signupForm.contains(event.target) && event.target !== document.querySelector('[onclick="openSignupForm()"]')) {
        closeSignupForm();
    }
    if (reminderForm && !reminderForm.classList.contains('hidden') && !reminderForm.contains(event.target) && event.target !== document.querySelector('[onclick="openReminderForm()"]')) {
        closeReminderForm();
    }
});

// Form submission handlers
document.getElementById('report-animal-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Report Form Data:', Object.fromEntries(formData));
    closeReportForm();
    alert('Thank you for your report! We will take necessary action.');
});

document.getElementById('adoption-form-data').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Adoption Form Data:', Object.fromEntries(formData));
    closeAdoptionForm();
    alert('Thank you for your interest in adoption! We will contact you soon.');
});

document.getElementById('lost-pet-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Lost Pet Form Data:', Object.fromEntries(formData));
    closeLostForm();
    alert('Thank you for reporting your lost pet. We will keep an eye out.');
});

document.getElementById('found-pet-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Found Pet Form Data:', Object.fromEntries(formData));
    closeFoundForm();
    alert('Thank you for reporting the found pet. We will try to find its owner.');
});

document.getElementById('contact-us-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Contact Us Form Data:', Object.fromEntries(formData));
    closeContactForm();
    alert('Thank you for contacting us. We will get back to you shortly.');
});

document.getElementById('signup-form-data').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get('password');
    const email = formData.get('email');
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    console.log('Signup Form Data:', Object.fromEntries(formData));
    closeSignupForm();
    alert('Thank you for signing up! Please log in to your account.');
});

document.getElementById('reminder-form-data').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const petName = formData.get('pet-name');
    const vaccinationDate = formData.get('vaccination-date');
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (!vaccinationDate) {
        alert('Please enter a valid vaccination date.');
        return;
    }
    console.log('Reminder Form Data:', Object.fromEntries(formData));
    closeReminderForm();
    alert(`Reminder set for ${petName} on ${vaccinationDate}!`);
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}