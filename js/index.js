// +++++++++++++++ CHANGING COLOR THEME: DARK AND LIGHT MODE. +++++++++++++++++++

document.getElementById('theme-button').addEventListener('click', () => {

    // if light mode --> change to dark mode. 
    if (document.body.style.backgroundColor == "white") {
        // Body Background Color.
        document.body.style.backgroundColor = "hsl(190deg 28% 12%)";

        // Body Text Color.
        document.body.style.color = "#F1F3F3";

        // Footer Background Color.
        document.getElementsByClassName('footer')[0].style.backgroundColor = "#0E181B";

        // Navbar Background Color.
        document.getElementsByClassName('navbar')[0].style.backgroundColor = "hsl(190deg 28% 12%)";

        // Navbar Brand Name Text Color.
        document.getElementsByClassName('navbar-brand')[0].style.color = "#F1F3F3";

        // Navbar Text Color.
        x = document.getElementsByClassName('nav-link');
        for (i = 0; i < x.length; i++) {
            document.getElementsByClassName('nav-link')[i].style.color = "#F1F3F3";
        }

        // Languages Span Text Color.
        document.querySelector('.languages span').style.color = "white";


        // Change the change-theme icon.
        document.getElementsByClassName('moon')[0].style.display = "none";
        document.getElementsByClassName('sun')[0].style.display = "block";
    }

    // if dark mode --> change to light mode. 
    else {
        // Body Background Color.
        document.body.style.backgroundColor = "white";

        // Body Text Color.
        document.body.style.color = "black";

        // Footer Background Color.
        document.getElementsByClassName('footer')[0].style.backgroundColor = "#57C9E0";

        // Navbar Background Color.
        document.getElementsByClassName('navbar')[0].style.backgroundColor = "white";

        // Navbar Brand Name Text Color.
        document.getElementsByClassName('navbar-brand')[0].style.color = "black";

        // Navbar Text Color.
        x = document.getElementsByClassName('navbar-js');
        for (i = 0; i < x.length; i++) {
            document.getElementsByClassName('navbar-js')[i].style.color = "black";
        }

        // Languages Span Text Color.
        document.querySelector('.languages span').style.color = "black";

        // Footer Text color.
        document.getElementsByClassName('')



        // Change the change-theme icon.
        document.getElementsByClassName('sun')[0].style.display = "none";
        document.getElementsByClassName('moon')[0].style.display = "block";
    }
});



// +++++++++++++++++ SKILLS SECTION JS +++++++++++++++++++++++

// Backend Skills.
document.getElementsByClassName('backend-heading')[0].addEventListener('click', () => {

    // if display is none --> change it to block.
    if (document.getElementsByClassName('backend-skills')[0].style.display == "none") {
        // Make it block.
        document.getElementsByClassName('backend-skills')[0].style.display = "block";
        // Make others to none.
        document.getElementsByClassName('frontend-skills')[0].style.display = "none";
        document.getElementsByClassName('extra-skills')[0].style.display = "none";

    }

    // if display is block --> change it to none.
    else {
        document.getElementsByClassName('backend-skills')[0].style.display = "none";
    }
});

// Frontend Skills.
document.getElementsByClassName('frontend-heading')[0].addEventListener('click', () => {

    // if display is none --> change it to block.
    if (document.getElementsByClassName('frontend-skills')[0].style.display == "none") {
        // Make it block.
        document.getElementsByClassName('frontend-skills')[0].style.display = "block";
        // Make others to none.
        document.getElementsByClassName('backend-skills')[0].style.display = "none";
        document.getElementsByClassName('extra-skills')[0].style.display = "none";
    }

    // if display is block --> change it to none.
    else {
        document.getElementsByClassName('frontend-skills')[0].style.display = "none";
    }
});

// Extra Skills.
document.getElementsByClassName('extra-heading')[0].addEventListener('click', () => {

    // if display is none --> change it to block.
    if (document.getElementsByClassName('extra-skills')[0].style.display == "none") {
        // Make it block.
        document.getElementsByClassName('extra-skills')[0].style.display = "block";
        // document.getElementsByClassName('extra-down-arrow')[0].classList.add('fa-rotate-180');
        // Make others to none.
        document.getElementsByClassName('backend-skills')[0].style.display = "none";
        document.getElementsByClassName('frontend-skills')[0].style.display = "none";
        // document.getElementsByClassName('extra-down-arrow')[0].classList.remove('fa-rotate-180');
    }

    // if display is block --> change it to none.
    else {
        document.getElementsByClassName('extra-skills')[0].style.display = "none";
    }
});

