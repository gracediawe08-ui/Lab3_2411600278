function updateDateTime() {

    const now = new Date();

    const dateElement =
        document.getElementById("currentDate");

    const timeElement =
        document.getElementById("currentTime");


   

    if (dateElement) {

        dateElement.textContent =
            now.toLocaleDateString("en-US", {

                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"

            });

    }


   

    if (timeElement) {

        timeElement.textContent =
            now.toLocaleTimeString("en-US", {

                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"

            });

    }

}




updateDateTime();




setInterval(updateDateTime, 1000);





const navItems =
    document.querySelectorAll(".nav-item");

const dashboardSection =
    document.getElementById("dashboard");

const revenueSection =
    document.getElementById("revenue");


navItems.forEach(function(item) {

    item.addEventListener("click", function(event) {

        event.preventDefault();


        

        navItems.forEach(function(nav) {

            nav.classList.remove("active");

        });


       

        this.classList.add("active");


        const target =
            this.getAttribute("href");


        

        if (target === "#dashboard") {

            dashboardSection.style.display = "block";

            revenueSection.style.display = "none";

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        }


        

        else if (target === "#revenue") {

            dashboardSection.style.display = "none";

            revenueSection.style.display = "block";

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        }


        

        else if (target === "#orders") {

            dashboardSection.style.display = "block";

            revenueSection.style.display = "none";

            document
                .getElementById("orders")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }


       
        else if (target === "#popular") {

            dashboardSection.style.display = "block";

            revenueSection.style.display = "none";

            document
                .getElementById("popular")
                .scrollIntoView({

                    behavior: "smooth"

                });

        }


       

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





function showOrders() {

    const orders =
        document.getElementById("orders");

    if (orders) {

        orders.scrollIntoView({

            behavior: "smooth"

        });

    }

}





function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");


    if (confirmLogout) {

        alert("You have been logged out.");

        

        window.location.href = "index.html";

    }

}