// Avatar movement effect

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth * 100;
    const mouseY = e.clientY / window.innerHeight * 100;
    
    document.documentElement.style.setProperty('--mouseX', `${mouseX}%`);
    document.documentElement.style.setProperty('--mouseY', `${mouseY}%`);
});

// Project image movement

const projects = document.querySelectorAll(".project_item_container");
projects.forEach((project) => {
    let leftTopRect = project.getElementsByClassName("left_top_border").item(0);
    let bottomRightRect = project.getElementsByClassName("bottom_right_border").item(0);
    let projectImage = project.getElementsByClassName("project_image").item(0);

    project.addEventListener('mouseover', (_e) => {
        leftTopRect.style.transform = "translate(-1rem, -1rem)";
        bottomRightRect.style.transform = "translate(1rem, 1rem)";
        projectImage.style.transform = "scale(1.1)";
    })

    project.addEventListener('mouseout', (_e) => {
        leftTopRect.style.transform = "translate(0, 0)";
        bottomRightRect.style.transform = "translate(0, 0)";
        projectImage.style.transform = "scale(1)";
    })
})

// Experience and Education switch bar effect

var experienceButton = document.getElementById("experience_header");
var educationButton = document.getElementById("education_header");
var experienceBody = document.getElementById("experience_body");
var educationBody = document.getElementById("education_body");

experienceButton.addEventListener('click', (_e) => {
    experienceButton.classList.remove("not_selected");
    educationButton.classList.add("not_selected");
    experienceBody.classList.remove("hidden");
    educationBody.classList.add("hidden");
});

educationButton.addEventListener('click', (_e) => {
    educationButton.classList.remove("not_selected");
    experienceButton.classList.add("not_selected");
    educationBody.classList.remove("hidden");
    experienceBody.classList.add("hidden");
});

// Skill item hover effect
var skillItemElements = document.querySelectorAll(".skill_item");
skillItemElements.forEach((element) => {
    const image = element.querySelector(".skill_item_image");
    const name = element.querySelector(".skill_item_name");
    element.addEventListener('mouseover', (_e) => {
        image.style.transform = "scale(1.2)";
        name.style.transform = "scale(1.2)";
    });

    element.addEventListener('mouseout', (_e) => {
        image.style.transform = "scale(1)";
        name.style.transform = "scale(1)";
    });
})

// Toggle Side Narbar
const sideNavBarElement = document.getElementById("side_nav_bar");
const switchButtonElement = document.getElementById("switch_button");
const sideNavBarItems = document.querySelectorAll(".side_nav_bar_item");
switchButtonElement.addEventListener('click', (_e) => {
    var icons = switchButtonElement.querySelectorAll(".material-icons");
    icons.forEach((icon) => {
        if (icon.classList.contains("hidden")) {
            icon.classList.remove("hidden");
        } else {
            icon.classList.add("hidden");
            if (icon.id === 'arrow_back_icon') {
                switchButtonElement.style.transform = "translateX(calc(50% - 2.5px))";
                sideNavBarItems.forEach((item) => {
                    item.classList.add("hidden");
                })
                sideNavBarElement.style.width = "0%";
                sideNavBarElement.style.border = "none";
            } else {
                switchButtonElement.style.transform = "translateX(0%)";
                sideNavBarItems.forEach((item) => {
                    item.classList.remove("hidden");
                })
                sideNavBarElement.style.width = "20%";
                sideNavBarElement.style.borderRight = "5px solid black";
            }
        }
    })
})

// Select Navbar element when scroll on it
const container = document.querySelector(".main_body");
const topNavBarItems = document.querySelectorAll(".top_nav_bar_item");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sideNavBarItems.forEach((item) => item.classList.remove("selected_side_bar_item"));
            topNavBarItems.forEach((item) => item.classList.remove("selected_top_bar_item"));
            const selectedNavBarElement = document.getElementById(`${entry.target.id.slice(0, -7)}side_item`);
            const selectedTopBarElement = document.getElementById(`${entry.target.id.slice(0, -7)}top_item`);
            selectedNavBarElement.classList.add("selected_side_bar_item");
            selectedTopBarElement.classList.add("selected_top_bar_item");
        }
    });
}, {
    root: container,
    threshold: 0.4
});

const targets = document.querySelectorAll(".section");
targets.forEach((target) => {
    observer.observe(target);
})

// Toggle Top Narbar
const sideTopBarElement = document.getElementById("top_bar_item_container");
const switchTopButtonElement = document.getElementById("switch_top_button");
switchTopButtonElement.addEventListener('click', (_e) => {
    var icons = switchTopButtonElement.querySelectorAll(".material-icons");
    console.log('icons: ', icons);
    icons.forEach((icon) => {
        if (icon.classList.contains("hidden")) {
            icon.classList.remove("hidden");
        } else {
            icon.classList.add("hidden");
            if (icon.id === 'menu_icon') {
                sideTopBarElement.classList.remove("hidden");
            } else {
                sideTopBarElement.classList.add("hidden");
            }
        }
    })
})
