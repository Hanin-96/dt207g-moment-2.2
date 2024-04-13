"use strict"

window.onload = loadCv;

async function loadCv() {
    document.getElementById("error").innerHTML = "";

    try {
        const response = await fetch("https://dt207g-moment-2.onrender.com/api/cv");
        const data = await response.json();
        console.log(data);

        displayCv(data);

    } catch {
        document.getElementById("error").innerHTML = "Det går inte att läsa in cv:n";
    }
}

function displayCv(cvData) {
    cvData.forEach(cv => {
        console.log(cv);
        document.getElementById("cv-wrap").innerHTML +=
            `<article class="cv-article">
                <h2 class="cv-wrap-title">${cv.job_title}</h2>
                <p class="cv-company">${cv.company_name}</p>
                <p class="cv-location">${cv.location}</p>
                <p class="cv-description">${cv.description}</p>
            </article>`
    });
}