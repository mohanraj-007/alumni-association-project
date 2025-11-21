// ------------------ STUDENT DATABASE ------------------
const students = [
  { roll: "21MX001", name: "Mohanraj" },
  { roll: "21MX002", name: "Karthick" },
  { roll: "21MX003", name: "Priya" },
  { roll: "21MX004", name: "Sahana" }
];

// ------------------ LOGIN FUNCTION ------------------
if (document.getElementById("loginBtn")) {
  document.getElementById("loginBtn").addEventListener("click", () => {
    const roll = document.getElementById("rollInput").value.trim().toUpperCase();
    const error = document.getElementById("loginError");

    const found = students.some(s => s.roll === roll);

    if (found) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("studentRoll", roll);
      window.location.href = "index.html";
    } else {
      error.textContent = "Invalid Roll Number! Contact admin.";
    }
  });
}

// ------------------ PAGE PROTECTION ------------------
// if (window.location.pathname.includes("alumni.html")) {
//   const logged = localStorage.getItem("loggedIn");

//   if (!logged) {
//     alert("Please login first!");
//     window.location.href = "index.html";
//   }
// }
// ------------------ HOME PAGE PROTECTION ------------------
if (window.location.pathname.includes("index.html")) {
  const logged = localStorage.getItem("loggedIn");
  if (!logged) {
    alert("Please login first!");
    window.location.href = "login.html";
  }
}

// ------------------ LOGOUT FUNCTION ------------------
if (document.getElementById("logoutBtn")) {
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("studentRoll");
    window.location.href = "login.html";
  });
}

// ------------------ SEARCH FILTER ------------------
const input = document.getElementById('searchInput');
if (input) {
  const cards = document.querySelectorAll('.alumni-card');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(q) ? 'block' : 'none';
    });
  });
}
// ------------------ NAVBAR LOGIN → LOGOUT SWITCH ------------------
const navArea = document.getElementById("navArea");
const loginLink = document.getElementById("loginLink");

if (navArea && loginLink) {
  const logged = localStorage.getItem("loggedIn");

  if (logged) {
    // Remove login link
    loginLink.remove();

    // Create logout button
    const logoutButton = document.createElement("button");
    logoutButton.id = "logoutBtn";
    logoutButton.className = "logout-btn";
    logoutButton.textContent = "Logout";

    // Add logout button to navbar
    navArea.appendChild(logoutButton);

    // Logout functionality
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("studentRoll");
      window.location.href = "login.html";
    });
  }
}
