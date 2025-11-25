// ---------------- Dropdown ----------------
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Show / hide menu when clicking the button
dropdownBtn.addEventListener("click", () => {
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});

// When selecting an item → update button text
document.querySelectorAll("#dropdownMenu li").forEach(item => {
    item.addEventListener("click", () => {
        dropdownBtn.textContent = item.getAttribute("data-value");
        dropdownMenu.style.display = "none"; // close menu
    });
});


// ---------------- Modal ----------------
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// ---------------- Form Validation ----------------
const form = document.getElementById("myForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (name === "" || email === "" || pass === "") {
        msg.textContent = "All fields are required!";
        msg.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        msg.textContent = "Invalid email format";
        msg.style.color = "red";
        return;
    }

    if (pass.length < 6) {
        msg.textContent = "Password must be at least 6 characters!";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
    form.reset();
});
