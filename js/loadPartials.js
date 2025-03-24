function includeHTML() {
    document.querySelectorAll("[data-include]").forEach(el => {
        let file = el.getAttribute("data-include");
        let activePage = el.getAttribute("data-page");

        fetch(file)
            .then(response => response.text())
            .then(data => {
                    el.innerHTML = data;

                    let navLinks = el.querySelectorAll(".nav-link");
                    navLinks.forEach(link => {
                        if (link.getAttribute("href").includes(activePage)) {
                            link.classList.add("active");
                        } else {
                            link.classList.remove("active");
                        }
                    });

                    let navBar = el.querySelector(".navbar")
                    navBar.classList.add(el.getAttribute("data-navbar-color"))
                
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    });
}

document.addEventListener("DOMContentLoaded", includeHTML);
