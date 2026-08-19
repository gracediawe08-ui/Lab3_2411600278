document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const alertContainer = document.getElementById("alertContainer");

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

       
        if (username === "admin" && password === "admin123") {

            alertContainer.innerHTML = `
                <div class="alert alert-success">
                    Login successful! Opening dashboard...
                </div>
            `;

            setTimeout(function () {
                window.location.href = "dashboard.html";
            }, 500);

        } else {

            alertContainer.innerHTML = `
                <div class="alert alert-danger">
                    Invalid username or password.
                </div>
            `;
        }

    });

});