// script.js

/* TYPING EFFECT */

const text =
"Software Engineering Student | Future AI Developer";

let index = 0;

function typeText(){

    if(index < text.length){

        document.getElementById("typing-text")
        .innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);
    }
}

typeText();

/* CUSTOM CURSOR */

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

    document.getElementById("cursor-glow")
    .style.left = e.clientX + "px";

    document.getElementById("cursor-glow")
    .style.top = e.clientY + "px";
});

/* THEME TOGGLE */

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

/* PROGRESS BAR */

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
    .innerHTML =Math.round(scrollPercent) + "%";
});

/* ACTIVE NAV LINKS */

// const navLinks =
// document.querySelectorAll("nav ul li a");

// navLinks.forEach(link => {

//     link.addEventListener("click", () => {

//         navLinks.forEach(link => {

//             link.classList.remove("active");
//         });

//         link.classList.add("active");
//     });
// });

/* CONTACT FORM */

const form =
document.querySelector("form");
form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");
});

/* COUNTER */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =+counter.getAttribute("data-target");

        const current =+counter.innerText;

        const increment =target / 100;

        if(current < target){

            counter.innerText =`${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        }else{

            counter.innerText = target;
        }
    };

    updateCounter();
});

/* REVEAL */

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

/* LOADER */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 1000);
});

/* MUSIC */

const music =document.getElementById("bg-music");

const musicBtn =document.getElementById("music-btn");

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

/* CLOCK */

function updateClock(){

    const now = new Date();

    const time =
    now.toLocaleTimeString();

    const date =
    now.toDateString();

    document.getElementById("clock")
    .innerHTML = time;

    document.getElementById("date")
    .innerHTML = date;
}

setInterval(updateClock, 1000);

updateClock();

/* PARTICLES */

tsParticles.load("particles-js", {

    background: {

        color: "transparent"
    },

    particles: {

        number: {

            value: 60
        },

        color: {

            value: "#2563eb"
        },

        links: {

            enable: true,

            color: "#2563eb"
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

/* SPARK EFFECT */

document.addEventListener("mousemove", (e) => {

    const spark =
    document.createElement("div");

    spark.classList.add("spark");

    document.getElementById("spark-container")
    .appendChild(spark);

    spark.style.left = e.clientX + "px";

    spark.style.top = e.clientY + "px";

    setTimeout(() => {

        spark.remove();

    }, 800);
});

/* AUTO ACTIVE NAVBAR */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");
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

/* PROJECT FILTER */

const filterBtns =
document.querySelectorAll(".filter-btn");

const projectCards =
document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(btn => {

            btn.classList.remove("active-filter");
        });

        btn.classList.add("active-filter");

        const filter =
        btn.getAttribute("data-filter");

        projectCards.forEach(card => {

            if(filter === "all"){

                card.style.display = "block";

            }else if(card.classList.contains(filter)){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }
        });
    });
});

/* IMAGE POPUP */

const projectImages =
document.querySelectorAll(".project-card img");

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