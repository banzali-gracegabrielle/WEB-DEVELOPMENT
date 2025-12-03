document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    if (username == "omlingo" && password == "pupt") {
        alert("Login successful! Welcome, " + username);
        window.location.href = "dashboard.html";
    } 
    
    else {
        alert("Invalid username or password.");
    }
});
