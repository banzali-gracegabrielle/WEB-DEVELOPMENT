function pupAlert(title, message, callback = null) {
    const overlay = document.createElement("div");
    overlay.className = "pup-alert-overlay";

    overlay.innerHTML = `
        <div class="pup-alert-box">
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="pup-alert-btn">OK</button>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector("button").addEventListener("click", () => {
        overlay.remove();
        if (typeof callback === "function") {
            callback();
        }
    });
}

document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        pupAlert("Missing Fields", "Please enter both username and password.");
        return;
    }

    if (username == "omlingo" && password == "pupt") {
    pupAlert("Login Successful", "Welcome, " + username + "!", () => {
        window.location.href = "dashboard.html";
    });
}

    
    else {
        pupAlert("Login Failed", "Invalid username or password.");
    }
});
