function DarkMode() {
// body
var element = document.body;
element.classList.toggle("body-dark");

// header
var darkhead = document.getElementById("header").className === "header";
    if (darkhead) {
        document.getElementById("header").className = "header-dark";
    } else if (!darkhead) {
        document.getElementById("header").className = "header";
    }

var darkhead = document.getElementById("header-r").className === "header-r";
    if (darkhead) {
        document.getElementById("header-r").className = "header-r-dark";
    } else if (!darkhead) {
        document.getElementById("header-r").className = "header-r";
    }

var darkhead = document.getElementById("header-l").className === "header-l";
    if (darkhead) {
        document.getElementById("header-l").className = "header-l-dark";
    } else if (!darkhead) {
        document.getElementById("header-l").className = "header-l";
    }

var darkhead = document.getElementById("menu-bar").className === "menu-bar";
    if (darkhead) {
        document.getElementById("menu-bar").className = "menu-bar-dark";
    } else if (!darkhead) {
        document.getElementById("menu-bar").className = "menu-bar";
    }

// home
var darkhome = document.getElementById("home").className === "home";
    if (darkhome) {
        document.getElementById("home").className = "home-dark";
    } else if (!darkhome) {
        document.getElementById("home").className = "home";
    }

var darkhome = document.getElementById("origin").className === "origin";
    if (darkhome) {
        document.getElementById("origin").className = "origin-dark";
    } else if (!darkhome) {
        document.getElementById("origin").className = "origin";
    }

// about
var darkabout = document.getElementById("about-content").className === "about-content";
    if (darkabout) {
        document.getElementById("about-content").className = "about-content-dark";
    } else if (!darkabout) {
        document.getElementById("about-content").className = "about-content";
    }

var darkabout = document.getElementById("aboutMe").className === "aboutMe";
    if (darkabout) {
        document.getElementById("aboutMe").className = "aboutMe-dark";
    } else if (!darkabout) {
        document.getElementById("aboutMe").className = "aboutMe";
    }

// experience
var darkexperience = document.getElementById("experience").className === "experience";
    if (darkexperience) {
        document.getElementById("experience").className = "experience-dark";
    } else if (!darkexperience) {
        document.getElementById("experience").className = "experience";
    }

var darkexperience = document.getElementById("study-content").className === "study-content";
    if (darkexperience) {
        document.getElementById("study-content").className = "study-content-dark";
    } else if (!darkexperience) {
        document.getElementById("study-content").className = "study-content";
    }

var darkexperience = document.getElementById("work-content").className === "work-content";
    if (darkexperience) {
        document.getElementById("work-content").className = "work-content-dark";
    } else if (!darkexperience) {
        document.getElementById("work-content").className = "work-content";
    }

// project
var darkproject = document.getElementById("project").className === "project";
    if (darkproject) {
        document.getElementById("project").className = "project-dark";
    } else if (!darkproject) {
        document.getElementById("project").className = "project";
    }

// contact
var darkcontact = document.getElementById("contact").className === "contact";
    if (darkcontact) {
        document.getElementById("contact").className = "contact-dark";
    } else if (!darkcontact) {
        document.getElementById("contact").className = "contact";
    }

var darkcontact = document.getElementById("contact-form").className === "contact-form";
    if (darkcontact) {
        document.getElementById("contact-form").className = "contact-form-dark";
    } else if (!darkcontact) {
        document.getElementById("contact-form").className = "contact-form";
    }

// footer
var darkfooter = document.getElementById("footer").className === "footer";
    if (darkfooter) {
        document.getElementById("footer").className = "footer-dark";
    } else if (!darkfooter) {
        document.getElementById("footer").className = "footer";
    }

var darkfooter = document.getElementById("footer-h3").className === "footer-h3";
    if (darkfooter) {
        document.getElementById("footer-h3").className = "footer-h3-dark";
    } else if (!darkfooter) {
        document.getElementById("footer-h3").className = "footer-h3";
    }

}