
initShowAll ();

async function fetchChallenges() {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json(); 

    return data.challenges;
}

async function initShowAll() {

  const challenges = await fetchChallenges();
    for (let i = 0; i < challenges.length; i++) {

    const challengeData = challenges[i]; 

    createChallengeCard(challengeData);
    }
}

