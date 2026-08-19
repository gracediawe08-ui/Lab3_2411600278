/* ==================================================
   DATE AND TIME
   ================================================== */

function updateDateTime() {

    const now = new Date();

    const dateElement =
        document.getElementById("currentDate");

    const timeElement =
        document.getElementById("currentTime");


    /* DATE */

    if (dateElement) {

        dateElement.textContent =
            now.toLocaleDateString("en-US", {

                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"

            });

    }


    /* TIME */

    if (timeElement) {

        timeElement.textContent =
            now.toLocaleTimeString("en-US", {

                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"

            });

    }

}


/* Update immediately */

updateDateTime();


/* Update every second */

setInterval(updateDateTime, 1000);



/* ==================================================
   SIDEBAR NAVIGATION
   ================================================== */

const navItems =
    document.querySelectorAll(".nav-item");

const dashboardSection =
    document.getElementById("dashboard");

const revenueSection =
    document.getElementById("revenue");


navItems.forEach(function(item) {

    item.addEventListener("click", function(event) {

        event.preventDefault();


        /* Remove active */

        navItems.forEach(function(nav) {

            nav.classList.remove("active");

        });


        /* Add active */

        this.classList.add("active");


        const target =
            this.getAttribute("href");


        /* ==========================
           DASHBOARD
           ========================== */

        if (target === "#dashboard") {

            dashboardSection.style.display = "block";

            revenueSection.style.display = "none";

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        }


        /* ==========================
           REVENUE
           ========================== */

        else if (target === "#revenue") {

            dashboardSection.style.display = "none";

            revenueSection.style.display = "block";

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        }


        /* ==========================
           DAILY ORDERS
           ========================== */

        else if (target === "#orders") {

            dashboardSection.style.display = "block";

            revenueSection.style.display = "none";

            document
                .getElementById("orders")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }


        /* ==========================
           POPULAR MENU
           ========================== */

        else if (target === "#popular") {

            dashboardSection.style.display = "block";

            revenueSection.style.display = "none";

            document
                .getElementById("popular")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }


        /* ==========================
           TABLE STATUS
           ========================== */

        else if (target === "#tables") {

            dashboardSection.style.display = "block";

            revenueSection.style.display = "none";

            document
                .getElementById("tables")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }

    });

});



/* ==================================================
   VIEW ALL ORDERS
   ================================================== */

function showOrders() {

    const orders =
        document.getElementById("orders");

    if (orders) {

        orders.scrollIntoView({

            behavior: "smooth"

        });

    }

}



/* ==================================================
   LOGOUT
   ================================================== */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");


    if (confirmLogout) {

        alert("You have been logged out.");

        /* Login page is index.html */

        window.location.href = "index.html";

    }

}