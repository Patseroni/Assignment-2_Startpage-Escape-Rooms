const challengesArray = [];
const challengesWrapper = document.querySelector(".challenges__wrapper");


async function getAPI() {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json(); 
    console.log(data);

    data.challenges.forEach((challenge) => {
        challengesArray.push(challenge);
    })

for (i = 0; i < data.challenges.length; i++) {

    const challenge = data.challenges[i];

    const challengeContainer = document.createElement("article");
    challengeContainer.classList.add("challenges");
    challengesWrapper.appendChild(challengeContainer);
    

    const challengeImg = challenge.image;
    const challengeImgDOM = document.createElement("img");
    challengeImgDOM.classList.add("challenges__image");
    challengeImgDOM.setAttribute("src", challengeImg);
    challengeContainer.appendChild(challengeImgDOM);

    const challengeTitle = challenge.title;
    const challengeTitleDOM = document.createElement("h3");
    challengeTitleDOM.classList.add("challenges__title");
    challengeTitleDOM.innerHTML = challengeTitle;
    challengeContainer.appendChild(challengeTitleDOM);

    if (challenge.type.includes("onsite")) {
        const onsite = document.createElement("span");
        onsite.classList.add("challenges__onsite")
        onsite.innerHTML = "(on-site)";
        challengeContainer.appendChild(onsite);
    }

    const challengeParticipantsMin = challenge.minParticipants;
    const challengeParticipantsMax = challenge.maxParticipants;

    const challengeParticipantsDOM = document.createElement("p");
    challengeParticipantsDOM.classList.add("challenges__participants");
    challengeParticipantsDOM.innerHTML = `${challengeParticipantsMin}-${challengeParticipantsMax} participants`;
    challengeContainer.appendChild(challengeParticipantsDOM);

    const challengeDescription = challenge.description;
    const challengeDescriptionDOM = document.createElement("p");
    challengeDescriptionDOM.classList.add("challenges__description");
    challengeDescriptionDOM.innerHTML = challengeDescription;
    challengeContainer.appendChild(challengeDescriptionDOM);

    if (challenge.type.includes("onsite")) {
        const onsiteBtn = document.createElement("button");
        onsiteBtn.classList.add("challenges__onsiteBtn")
        onsiteBtn.innerHTML = "Book this room";
        challengeContainer.appendChild(onsiteBtn);
    }
    else {
        const onlineBtn = document.createElement("button");
        onlineBtn.classList.add("challenges__onlineBtn");
        onlineBtn.innerHTML = "Take challenge online";
        challengeContainer.appendChild(onlineBtn);
    }
}

}
console.log(challengesArray);


/* Example on all objects from API
 "challenges": [
        {
            "id": 1,
            "type": "onsite",
            "title": "Project: X of Doom",
            "description": "Try your hardest and succeed. Or fail",
            "minParticipants": 2,
            "maxParticipants": 4,
            "rating": 1,
            "image": "https://placekitten.com/640/480",
            "labels": [
                "linux",
                "web",
                "javascript"
            ]
        },
        // More objects...
    ]
}


/*
Moment: Ladda challenge-data från API

Listan med alla challenges ska laddas från ett API. Exakt format specificeras den 13 nov, men data som finns för varje challenge är:

En container som innehåller följande för varje Challenge: -- KLAR

URL till bild -- KLAR
Titel -- KLAR
Typ (online/on-site) -- KLAR
Minsta antal deltagare -- KLAR
Högsta antal deltagare -- KLAR
Beskrivning -- KLAR
Rating (siffra 0-5)
Etiketter

Data från API ska användas för att bygga upp “korten” för rummen i DOM

Dels på startsidan där de tre med högst rating ska visas
Dels på en ny sida där alla ska visas
*/