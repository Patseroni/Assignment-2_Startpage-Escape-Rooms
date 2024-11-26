// Hämta element från DOM
const filterButton = document.querySelector('.main__button');
const filterBox = document.querySelector('.filter_box');
const closeButton = document.getElementById('close_button');

// Eventlyssnare för att öppna rutan vid klick på huvudknappen
filterButton.addEventListener('click', () => {
    filterBox.style.display = 'flex'; // Visa modalrutan
    filterButton.style.display = 'none';
});

// Eventlyssnare för att stänga rutan vid klick på stängningsknappen
closeButton.addEventListener('click', () => {
    filterBox.style.display = 'none'; // 
    filterButton.style.display = 'block';
});

// Eventlyssnare för filterknappar

const onlineCheckbox = document.querySelector(".online")
const onsiteCheckbox = document.querySelector(".onsite")
const challengesWrapper = document.querySelector(".challenges__wrapper")


//FILTER

// Initial filter state
let currentFilters = {
    type: null,        // online or onsite
    search: "",        // search input value
    lowestRating: 0,   // lowest rating selected
    highestRating: 5,  // highest rating selected
    tags: []           // active tags
};

// Function to update the display based on the current filters
function applyFilters() {
    for (let i = 0; i < challengesArray.length; i++) {
        const challenge = challengesWrapper.children.item(i);
        const challengeData = challengesArray[i];

        // Check if challenge meets all filter criteria
        const matchesType = !currentFilters.type || challengeData.type === currentFilters.type;
        const matchesSearch = challengeData.title.toLowerCase().includes(currentFilters.search) ||
            challengeData.description.toLowerCase().includes(currentFilters.search);
        const matchesRating = challengeData.rating >= currentFilters.lowestRating && challengeData.rating <= currentFilters.highestRating;
        const matchesTags = currentFilters.tags.every(tag => challengeData.labels.includes(tag));

        // Apply visibility based on all filter conditions
        if (matchesType && matchesSearch && matchesRating && matchesTags) {
            challenge.style.display = "flex";
        } else {
            challenge.style.display = "none";
        }
    }
    checkChallenges();
}

// Filter by type (online/onsite)
onlineCheckbox.addEventListener('click', function () {
    if (this.checked) {
        currentFilters.type = "online";
        onsiteCheckbox.checked = false;
    }
    else {
        currentFilters.type = "";
    }
    applyFilters();
});
onsiteCheckbox.addEventListener('click', function () {
    if (this.checked) {
        currentFilters.type = "onsite";
        onlineCheckbox.checked = false;
    }
    else {
        currentFilters.type = "";
    }
    applyFilters();
});


// Search filter
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
});

// Rating filter
document.querySelector(".rating_stars").addEventListener("click", function (e) {
    if (e.target.id === "star1") {
        currentFilters.lowestRating = 1;
        if (document.querySelector("#star1").classList.contains("fa-solid")) {
            for (let i = 2; i <= 5; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            document.querySelector("#star1").classList.replace("fa-regular", "fa-solid");
        }
    }
    if (e.target.id === "star2") {
        currentFilters.lowestRating = 2;
        if (document.querySelector("#star2").classList.contains("fa-solid")) {
            for (let i = 3; i <= 5; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            for (let i = 1; i <= 2; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }

    }
    if (e.target.id === "star3") {
        currentFilters.lowestRating = 3;
        if (document.querySelector("#star3").classList.contains("fa-solid")) {
            for (let i = 4; i <= 5; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            for (let i = 1; i <= 3; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }
    }
    if (e.target.id === "star4") {
        currentFilters.lowestRating = 4;
        if (document.querySelector("#star4").classList.contains("fa-solid")) {
            for (let i = 5; i <= 5; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }

    }
    if (e.target.id === "star5") {
        currentFilters.lowestRating = 5;
        if (document.querySelector("#star5").classList.contains("fa-solid")) {
            document.querySelector(`#star5`).classList.replace('fa-solid', "fa-regular");
        }
        else {
            for (let i = 1; i <= 5; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }

    }

    //if (highest == 0) {
    if (e.target.id === "star6") {
        currentFilters.highestRating = 1;
        if (document.querySelector("#star6").classList.contains("fa-solid")) {
            for (let i = 7; i <= 10; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            document.querySelector("#star6").classList.replace("fa-regular", "fa-solid");
        }
    }
    if (e.target.id === "star7") {
        currentFilters.highestRating = 2
        if (document.querySelector("#star7").classList.contains("fa-solid")) {
            for (let i = 8; i <= 10; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            for (let i = 6; i <= 7; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }
    }

    if (e.target.id === "star8") {
        currentFilters.highestRating = 3;
        if (document.querySelector("#star8").classList.contains("fa-solid")) {
            for (let i = 9; i <= 10; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            for (let i = 6; i <= 8; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }
    }
    if (e.target.id === "star9") {
        currentFilters.highestRating = 4;
        if (document.querySelector("#star9").classList.contains("fa-solid")) {
            for (let i = 10; i <= 10; i++) {
                document.querySelector(`#star${i}`).classList.replace('fa-solid', "fa-regular");
            }
        }
        else {
            for (let i = 6; i <= 9; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }
    }
    if (e.target.id === "star10") {
        currentFilters.highestRating = 5;
        if (document.querySelector("#star10").classList.contains("fa-solid")) {
            document.querySelector(`#star10`).classList.replace('fa-solid', "fa-regular");
        }
        else {
            for (let i = 6; i <= 10; i++) {
                document.querySelector(`#star${i}`).classList.replace("fa-regular", "fa-solid");
            }
        }

    }

    applyFilters();
});

// Tag filter
const tags = document.querySelectorAll('.filter__tag');
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        // Toggle tag activation
        if (tag.classList.contains("activated")) {
            tag.classList.remove("activated");
            const tagIndex = currentFilters.tags.indexOf(tag.innerHTML.toLowerCase());
            if (tagIndex !== -1) {
                currentFilters.tags.splice(tagIndex, 1);
            }
        } else {
            tag.classList.add("activated");
            currentFilters.tags.push(tag.innerHTML.toLowerCase());
        }

        // Apply filters with updated tags
        applyFilters();
    });
});





//NO MATCH


function checkChallenges() {
    const challenges = document.querySelectorAll('.challenges');
    const message = document.querySelector('.no-challenges-message');
    let allHidden = true;

    challenges.forEach(function (challenge) {
        if (challenge.style.display !== 'none') {
            allHidden = false;
        }
    });

    if (allHidden) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}

