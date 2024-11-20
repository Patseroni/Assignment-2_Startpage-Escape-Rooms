function createChallengeCard(challenge) {

    const challengesWrapper = document.querySelector(".challenges__wrapper");

    const challengeContainer = document.createElement("article");
    challengeContainer.classList.add("challenges");
    challengesWrapper.appendChild(challengeContainer);

    const challengeID = challenge.id;
    challengeContainer.setAttribute("id", challengeID);
 
    const challengeImg = challenge.image;
    const challengeImgDOM = document.createElement("img");
    challengeImgDOM.classList.add("challenges__image");
    challengeImgDOM.setAttribute("src", challengeImg);
    challengeContainer.appendChild(challengeImgDOM);

    const challengeRatingContainer = document.createElement("div");
    challengeRatingContainer.classList.add("challenge__rating__container");
    challengeContainer.appendChild(challengeRatingContainer);


    //RATING -------------------------------


    const challengeRating = challenge.rating;

    if (challengeRating == 0) {
        for (let i = 0; i <= 4; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 0.5) {
        const challengeRatingHalf = document.createElement("img");
        challengeRatingHalf.classList.add("challenge__rating__half__filled");
        challengeRatingHalf.setAttribute("src", "images/star-half.png");
        challengeRatingContainer.appendChild(challengeRatingHalf);

        for (let i = 0; i <= 3; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 1) {
        const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);

        for (let i = 0; i <= 3; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 1.5) {
        const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);

        const challengeRatingHalf = document.createElement("img");
        challengeRatingHalf.classList.add("challenge__rating__half__filled");
        challengeRatingHalf.setAttribute("src", "images/star-half.png");
        challengeRatingContainer.appendChild(challengeRatingHalf);

        for (let i = 0; i <= 2; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 2) {

        for (let i = 0; i <= 1; i++) {
            const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);
        }
        
        for (let i = 0; i <= 2; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 2.5) {
        for (let i = 0; i <= 1; i++) {
            const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);
        }
        const challengeRatingHalf = document.createElement("img");
        challengeRatingHalf.classList.add("challenge__rating__half__filled");
        challengeRatingHalf.setAttribute("src", "images/star-half.png");
        challengeRatingContainer.appendChild(challengeRatingHalf);

        for (let i = 0; i <= 1 ; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 3) {
        for (let i = 0; i <= 2; i++) {
            const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);
        }
        
        for (let i = 0; i <= 1 ; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 3.5) {
        for (let i = 0; i <= 2; i++) {
            const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);
        }

        const challengeRatingHalf = document.createElement("img");
        challengeRatingHalf.classList.add("challenge__rating__half__filled");
        challengeRatingHalf.setAttribute("src", "images/star-half.png");
        challengeRatingContainer.appendChild(challengeRatingHalf);
        
        for (let i = 0; i < 1 ; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 4) {
        for (let i = 0; i <= 3; i++) {
            const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);
        }
        
        for (let i = 0; i < 1 ; i++) {
            const challengeRatingEmptyStar = document.createElement("img");
            challengeRatingEmptyStar.classList.add("challenges__rating__empty__star");
            challengeRatingEmptyStar.setAttribute("src", "images/star-empty.png");
            challengeRatingContainer.appendChild(challengeRatingEmptyStar);
        }
    }

    if (challengeRating == 4.5) {
        for (let i = 0; i <= 3; i++) {
            const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);
        }

        const challengeRatingHalf = document.createElement("img");
        challengeRatingHalf.classList.add("challenge__rating__half__filled");
        challengeRatingHalf.setAttribute("src", "images/star-half.png");
        challengeRatingContainer.appendChild(challengeRatingHalf);
        
    }

    if (challengeRating == 5) {
        for (let i = 0; i <= 4; i++) {
            const challengeRatingFilled = document.createElement("img");
        challengeRatingFilled.classList.add("challenge__rating__filled");
        challengeRatingFilled.setAttribute("src", "images/star-filled.png");
        challengeRatingContainer.appendChild(challengeRatingFilled);
        }
    }


    //RATING -------------------------------



    const challengeContent = document.createElement("div");
    challengeContent.classList.add("challenges__content");
    challengeContainer.appendChild(challengeContent);

    const challengeTitleContainer = document.createElement("div");
    challengeTitleContainer.classList.add("challenge__title__container");
    challengeContent.appendChild(challengeTitleContainer);

    const challengeTitle = challenge.title;
    const challengeTitleDOM = document.createElement("h3");
    challengeTitleDOM.classList.add("challenges__title");
    challengeTitleDOM.innerHTML = challengeTitle;
    challengeTitleContainer.appendChild(challengeTitleDOM);

    if (challenge.type.includes("onsite")) {
        const onsite = document.createElement("h3");
        onsite.classList.add("challenges__onsite");
        onsite.innerHTML = "(on-site)";
        challengeTitleContainer.appendChild(onsite);
    }

    const challengeParticipantsContainer = document.createElement("div");
    challengeParticipantsContainer.classList.add("challenges__participants__container");
    challengeContent.appendChild(challengeParticipantsContainer);

    const challengeParticipantsMin = challenge.minParticipants;
    const challengeParticipantsMax = challenge.maxParticipants;

    const challengeParticipantsDOM = document.createElement("p");
    challengeParticipantsDOM.classList.add("challenges__participants");
    challengeParticipantsDOM.innerHTML = `${challengeParticipantsMin}-${challengeParticipantsMax} participants`;
    challengeParticipantsContainer.appendChild(challengeParticipantsDOM);

    if (challenge.type.includes("online")) {
        const challengeNetworked = document.createElement("p");
        challengeNetworked.innerHTML = " (networked)";
        challengeNetworked.classList.add("challenges__networked");
        challengeParticipantsContainer.appendChild(challengeNetworked);
    }

    const challengeDescription = challenge.description;
    const challengeDescriptionDOM = document.createElement("p");
    challengeDescriptionDOM.classList.add("challenges__description");
    challengeDescriptionDOM.innerHTML = challengeDescription;
    challengeContent.appendChild(challengeDescriptionDOM);

    if (challenge.type.includes("onsite")) {
        const onsiteBtn = document.createElement("button");
        onsiteBtn.classList.add("challenges__onsiteBtn");
        onsiteBtn.innerHTML = "Book this room";
        challengeContent.appendChild(onsiteBtn);
        onsiteBtn.addEventListener(
            "click",
            openModal,
        );
 

        const challengeIcon = document.createElement("img");
        challengeIcon.classList.add("challenges__icon__onsite");
        challengeIcon.setAttribute("src", "images/icon-onsite.png")
        challengeContainer.appendChild(challengeIcon);
    }
    else {
        const onlineBtn = document.createElement("button");
        onlineBtn.classList.add("challenges__onlineBtn");
        onlineBtn.innerHTML = "Take challenge online";
        challengeContent.appendChild(onlineBtn);
        onlineBtn.addEventListener(
            "click",
            openModal,
        );
 
        
        const challengeIcon = document.createElement("img");
        challengeIcon.classList.add("challenges__icon__online");
        challengeIcon.setAttribute("src", "images/icon-online.png")
        challengeContainer.appendChild(challengeIcon);
    }
}