
const openBtn = document.getElementById("openModal");
const closeIcon = document.getElementById("closeIcon");
const closeBtn = document.getElementById("closeModal");

const overlay = document.getElementById("modalOverlay");
const modalBox = document.getElementById("modalBox");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const successMessage = document.getElementById("successMessage");

// Open the modal
function openModal() {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    nameInput.focus();
}

// Close the modal
function closeModal() {
    if (!overlay.classList.contains("active")) {
        return;
    }

    overlay.classList.remove("active");
    document.body.style.overflow = "";

    openBtn.focus();
}

// Open button
openBtn.addEventListener("click", openModal);

// Close using the X button
closeIcon.addEventListener("click", closeModal);

// Close using the Cancel button
closeBtn.addEventListener("click", closeModal);

// Close when clicking outside the popup
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        closeModal();
    }
});

// Close using the Escape key
document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        overlay.classList.contains("active")
    ) {
        closeModal();
    }
});

// Handle form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    successMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    contactForm.reset();
});
