// Handle VIP login form submission
document.getElementById("vipLoginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("vipUsername").value;
    const password = document.getElementById("vipPassword").value;

    // Logic to validate VIP credentials
    if (vipUsers.includes(username)) {
        // Grant access
        alert("Welcome, VIP member!");
    } else {
        document.getElementById("loginError").textContent = "Invalid credentials.";
    }
});
