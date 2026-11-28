// ==============================
// WEBSITE SECTIONS
// ==============================

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


// ==============================
// LOAD WEBSITE SECTIONS
// ==============================

sections.forEach(section => {

    fetch(`sections/${section}.html`)

        .then(response => {

            if (!response.ok) {
                throw new Error(`Could not load ${section}.html`);
            }

            return response.text();

        })

        .then(data => {

            // Find section container
            const sectionContainer = document.getElementById(section);

            if (!sectionContainer) {
                console.error(`Container not found: ${section}`);
                return;
            }

            // Insert HTML
            sectionContainer.innerHTML = data;


            // ==============================
            // NAVBAR FUNCTIONALITY
            // ==============================

            if (section === "navbar") {

                // Select all navbar links
                const navLinks = document.querySelectorAll(
                    "#navbar .navbar-nav .nav-link"
                );

                // Select mobile menu
                const navbarMenu = document.getElementById("mainNavbar");


                // Add click event to every link
                navLinks.forEach(link => {

                    link.addEventListener("click", function () {

                        // Remove active class from all links
                        navLinks.forEach(item => {
                            item.classList.remove("active");
                        });

                        // Add active class to clicked link
                        this.classList.add("active");


                        // Close mobile menu after clicking a link
                        if (window.innerWidth < 1400 && navbarMenu) {

                            const bsCollapse =
                                bootstrap.Collapse.getOrCreateInstance(navbarMenu);

                            bsCollapse.hide();

                        }

                    });

                });

            }

        })

        .catch(error => {

            console.error(`Error loading ${section}:`, error);

        });

});




// ==============================
// HOME SECTION FUNCTIONALITY
// ==============================


// ==============================
// HISTORY SECTION FUNCTIONALITY
// ==============================


// ==============================
// TYPES / STYLES FUNCTIONALITY
// ==============================


// ==============================
// TECHNIQUES SECTION FUNCTIONALITY
// ==============================


// ==============================
// SHELTER SECTION FUNCTIONALITY
// ==============================


// ==============================
// HAZARDS SECTION FUNCTIONALITY
// ==============================


// ==============================
// RECORDS SECTION FUNCTIONALITY
// ==============================


// ==============================
// CLUBS SECTION FUNCTIONALITY
// ==============================


// ==============================
// SUCCESS STORIES FUNCTIONALITY
// ==============================


// ==============================
// GALLERY SECTION FUNCTIONALITY
// ==============================


// ==============================
// LATEST DEVELOPMENTS FUNCTIONALITY
// ==============================


// ==============================
// GUIDELINES SECTION FUNCTIONALITY
// ==============================


// ==============================
// FOOTER FUNCTIONALITY
// ==============================
