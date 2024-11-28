
initShowAll ();

async function initShowAll() {

  const challenges = await fetchChallenges();
    for (let i = 0; i < challenges.length; i++) {

    const challengeData = challenges[i]; 

    createChallengeCard(challengeData);
    }
}

