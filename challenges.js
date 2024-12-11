
initShowAll ();

async function initShowAll() {

  const challenges = await fetchChallenges();
    for (let i = 0; i < challenges.length; i++) {

    const challengeData = challenges[i]; 

    createChallengeCard(challengeData);
    }
}

document.querySelector(".sort-by").addEventListener(
  "click",
    async function (e) {
    const challengesArray = await fetchChallenges();

    const rating = document.querySelector(".sort-by__rating");
    const title = document.querySelector(".sort-by__title");
    const challengesWrapper = document.querySelector(".challenges__wrapper");

    if (e.target.className === "sort-by__rating") {
      const sortedArray = challengesArray.toSorted((a, b) => b.rating - a.rating);
      reorderChallenges(sortedArray, challengesWrapper, title);
    }

    if (e.target.className === "sort-by__title") {
      const sortedArray = challengesArray.toSorted((a, b) => a.title.localeCompare(b.title));
      reorderChallenges(sortedArray, challengesWrapper, rating);
    }
    if (title.checked == false && rating.checked == false) {
      reorderChallenges(challengesArray, challengesWrapper, rating);
    }
  },
);

function reorderChallenges(sortedArray, wrapper, type) {
  type.checked = false
  const challengeCards = Array.from(wrapper.children);

  sortedArray.slice(0, sortedArray.length).forEach((challenge) => {
    const matchingCard = challengeCards.find(card => card.id == challenge.id);

    if (matchingCard) {
      wrapper.appendChild(matchingCard);
    }
  });
}


