
const sections = [
    "navbar",
    "home",
    "history",
    "types",
    "techniques",
    "shelter",
    "hazards",
    "records",
    "clubs",
    "stories",
    "gallery",
    "latest",
    "guidelines",
    "footer"
];

sections.forEach(section => {

    fetch(`sections/${section}.html`)
        .then(response => response.text())
        .then(data => {

            document.getElementById(section).innerHTML = data;

            // NAVBAR LOAD HONE KE BAAD LINKS SELECT KARO
            if (section === "navbar") {

                const navLinks = document.querySelectorAll(".navbar ul li a");

                navLinks.forEach(link => {

                    link.addEventListener("click", function () {

                        navLinks.forEach(item => {
                            item.classList.remove("active");
                        });

                        this.classList.add("active");

                    });

                });

            }

        })
        .catch(error => {
            console.error(`Error loading ${section}:`, error);
        });

});
