// +++++++++++++++ CHANGING COLOR THEME: DARK AND LIGHT MODE. +++++++++++++++++++

// theme_click = document.getElementsByClassName('theme-button')[0] || document.getElementsByClassName('theme-button')[1];
theme_click = document.querySelectorAll('.theme-button');

for (i = 0; i < theme_click.length; i++) {
    theme_click[i].addEventListener('click', () => {

        // if light mode --> change to dark mode. 
        if (document.body.style.backgroundColor == "white") {
            // Body Background Color.
            document.body.style.backgroundColor = "hsl(190deg 28% 12%)";

            // Body Text Color.
            document.body.style.color = "#F1F3F3";

            // Footer Background Color.
            document.getElementsByClassName('footer')[0].style.backgroundColor = "#0E181B";

            // Navbar Background Color.
            document.getElementsByClassName('navigation')[0].style.backgroundColor = "hsl(190deg 28% 12%)";

            // Navbar Brand Name Text Color.
            document.getElementsByClassName('navbar-brand')[0].style.color = "#F1F3F3";

            // Navbar Text Color.
            x = document.getElementsByClassName('nav-link');
            for (i = 0; i < x.length; i++) {
                document.getElementsByClassName('nav-link')[i].style.color = "#F1F3F3";
            }

            // Languages Span Text Color.
            document.querySelector('.languages span').style.color = "white";
            
            // Navbar-Mobile Background Color.
            document.querySelector('.mobile-navbar').style.backgroundColor = "#162427";
            document.querySelector('.mobile-navbar-brand').style.color = "white";
            
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
            document.getElementsByClassName('navigation')[0].style.backgroundColor = "white";

            // Navbar Brand Name Text Color.
            document.getElementsByClassName('navbar-brand')[0].style.color = "black";
            
            // Navbar Text Color.
            x = document.getElementsByClassName('navbar-js');
            for (i = 0; i < x.length; i++) {
                document.getElementsByClassName('navbar-js')[i].style.color = "black";
            }

            // Languages Span Text Color.
            document.getElementsByClassName('span')[0].style.color = "black";
            document.getElementsByClassName('span')[1].style.color = "black";
            
            // Footer Background Color.
            document.getElementsByClassName('footer')[0].style.backgroundColor = "#57c9e0";
            
            // Footer Text color.
            document.getElementsByClassName('')
            
            // Navbar-Mobile Background Color.
            document.querySelector('.mobile-navbar').style.backgroundColor = "white";
            document.querySelector('.mobile-navbar-brand').style.color = "black";
            
            // Navbar Mobile popup Background Color.
            document.querySelector('.navbar-pop').style.backgroundColor = "white";

            
            navbar_pop_count = document.querySelectorAll('.pop-up-count');
            for(i = 0; i <navbar_pop_count.length; i++)
            {
                document.querySelectorAll('.pop-up-count')[i].style.color = "black";
            }
            
            // Change the change-theme icon.
            document.getElementsByClassName('sun')[0].style.display = "none";
            document.getElementsByClassName('moon')[0].style.display = "block";
        }
    });

}


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

        // Rotating icon.
        document.getElementById('backend-down-arrow').classList.add('fa-rotate-180');
        document.getElementById('frontend-down-arrow').classList.remove('fa-rotate-180');
        document.getElementById('extra-down-arrow').classList.remove('fa-rotate-180');
    }

    // if display is block --> change it to none.
    else {
        document.getElementsByClassName('backend-skills')[0].style.display = "none";
        // Rotating icon.
        document.getElementById('backend-down-arrow').classList.remove('fa-rotate-180');
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

        // Rotating icon.
        document.getElementById('frontend-down-arrow').classList.add('fa-rotate-180');
        document.getElementById('backend-down-arrow').classList.remove('fa-rotate-180');
        document.getElementById('extra-down-arrow').classList.remove('fa-rotate-180');
    }
    
    // if display is block --> change it to none.
    else {
        document.getElementsByClassName('frontend-skills')[0].style.display = "none";
        // Rotating icon.
        document.getElementById('frontend-down-arrow').classList.remove('fa-rotate-180');
    }
});

// Extra Skills.
document.getElementsByClassName('extra-heading')[0].addEventListener('click', () => {
    
    // if display is none --> change it to block.
    if (document.getElementsByClassName('extra-skills')[0].style.display == "none") {
        
        // Make it block.
        document.getElementsByClassName('extra-skills')[0].style.display = "block";
        
        // Make others to none.
        document.getElementsByClassName('backend-skills')[0].style.display = "none";
        document.getElementsByClassName('frontend-skills')[0].style.display = "none";
        // Rotating Icon.
        document.getElementById('extra-down-arrow').classList.add('fa-rotate-180');
        document.getElementById('frontend-down-arrow').classList.remove('fa-rotate-180');
        document.getElementById('backend-down-arrow').classList.remove('fa-rotate-180');
    }
    
    // if display is block --> change it to none.
    else {
        document.getElementsByClassName('extra-skills')[0].style.display = "none";
        // Rotating Icon.
        document.getElementById('extra-down-arrow').classList.remove('fa-rotate-180');
    }
});



// +++++++++++++++++ MOBILE NAVBAR POP UP ++++++++++++++++++++

// For Opening.
document.getElementsByClassName('mobile-more')[0].addEventListener('click', () => {
        document.getElementsByClassName('navbar-pop')[0].style.display = "block";
});

// For Closing.
document.querySelector('.navbar-close').addEventListener('click', () => {
    document.getElementsByClassName('navbar-pop')[0].style.display = "none";
})