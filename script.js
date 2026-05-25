// =====================
// TYPING EFFECT
// =====================

const text =
"Software Engineering Student | Future AI Developer";

let index = 0;

function typeText(){

    if(index < text.length){

        document.getElementById("typing-text")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}

typeText();

// =====================
// THEME TOGGLE
// =====================

const toggleBtn =
document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        toggleBtn.innerHTML = "☀️";

    }else{

        toggleBtn.innerHTML = "🌙";
    }
});

// =====================
// SCROLL PROGRESS
// =====================

window.addEventListener("scroll", () => {

    let scrollTop =
    document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrollPercent =
    (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
    .style.width = scrollPercent + "%";

    document.getElementById("scroll-percent")
    .innerHTML =
    Math.round(scrollPercent) + "%";
});

// =====================
// CONTACT FORM
// =====================

const form =
document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;

    const response =
    await fetch("https://portfolio-production-50b3.up.railway.app", {

        method: "POST",

        headers: {

            "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

            name,
            email,
            message
        })
    });

    const data =
    await response.json();

    console.log(data);

    document.getElementById("responseMessage")
    .innerText = data.message;

    form.reset();
});

// =====================
// COUNTER
// =====================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }else{

            counter.innerText = target;
        }
    };

    updateCounter();
});

// =====================
// REVEAL ANIMATION
// =====================

const hiddenElements =
document.querySelectorAll(".hidden");

const revealObserver =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");
        }
    });

});

hiddenElements.forEach((el) => {

    revealObserver.observe(el);
});

// =====================
// LOADER
// =====================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 1000);
});

// =====================
// MUSIC
// =====================

const music =
document.getElementById("bg-music");

const musicBtn =
document.getElementById("music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if(isPlaying){

        music.pause();

        musicBtn.innerHTML = "🎵";

    }else{

        music.play();

        musicBtn.innerHTML = "⏸️";
    }

    isPlaying = !isPlaying;
});

// =====================
// CLOCK
// =====================

function updateClock(){

    const now = new Date();

    document.getElementById("clock")
    .innerHTML =
    now.toLocaleTimeString();

    document.getElementById("date")
    .innerHTML =
    now.toDateString();
}

setInterval(updateClock, 1000);

updateClock();

// =====================
// PARTICLES
// =====================

tsParticles.load("particles-js", {

    background: {

        color: "transparent"
    },

    particles: {

        number: {

            value: 50
        },

        color: {

            value: "#38bdf8"
        },

        links: {

            enable: true,

            color: "#38bdf8"
        },

        move: {

            enable: true,

            speed: 2
        },

        size: {

            value: 3
        },

        opacity: {

            value: 0.5
        }
    }
});

// =====================
// ACTIVE NAVBAR
// =====================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current =
            section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")
        === "#" + current){

            link.classList.add("active");
        }
    });
});

// =====================
// SCROLL TOP BUTTON
// =====================

const scrollTopBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTopBtn.style.display = "block";

    }else{

        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});

// =====================
// LOAD PROJECTS
// =====================

async function loadProjects(){

    const response =
    await fetch("https://portfolio-production-50b3.up.railway.app");

    const projects =
    await response.json();

    const projectsContainer =
    document.getElementById("projects-container");

    projectsContainer.innerHTML = "";

    projects.forEach(project => {

        projectsContainer.innerHTML += `

        <div class="project-card">

            <img
            src="${project.image}"
            class="project-image">

            <h2>${project.title}</h2>

            <p>${project.description}</p>

            <br>

            <a href="${project.github}"
            target="_blank">

                <button>

                    GitHub

                </button>

            </a>

        </div>
        `;
    });

    setupImagePopup();
}

loadProjects();

// =====================
// IMAGE POPUP
// =====================

function setupImagePopup(){

    const projectImages =
    document.querySelectorAll(".project-image");

    const popup =
    document.getElementById("image-popup");

    const popupImg =
    document.getElementById("popup-img");

    const closePopup =
    document.getElementById("close-popup");

    projectImages.forEach(img => {

        img.addEventListener("click", () => {

            popup.style.display = "flex";

            popupImg.src = img.src;
        });
    });

    closePopup.addEventListener("click", () => {

        popup.style.display = "none";
    });
}