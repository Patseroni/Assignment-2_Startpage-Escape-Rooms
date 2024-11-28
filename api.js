async function fetchChallenges() {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json(); 

    return data.challenges;
}

async function fetchAvailableTimes(date, challengeId) {
    const url = `https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${date}&challenge=${challengeId}`;
    const res = await fetch(url);
    return res.json();
}

async function postReservations(id, name, email, date, time, nrOfparticipants){
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            challenge: id,
            name: name,
            email: email,
            date: date,
            time: time,
            participants: nrOfparticipants,
        }),
    });
    if (!res.ok) {
        throw new Error(`Failed: ${res.statusText}`);
    }
    else{
        return res;
    }
}