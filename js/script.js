
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
        })
        .catch(error => {
            console.error(`Error loading ${section}:`, error);
        });

});
