async function fetchChallenges() {
    try {
        const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenge');
        
        if (!res.ok) {
            throw new Error("Challenges could not be downloaded")
        }
    
    const data = await res.json(); 
    return data.challenges;
    } catch (error) {
        console.error("Error when downloading challenges:", error);
        
        const errorDiv = document.createElement('div');
        errorDiv.textContent = error.message;
        document.body.appendChild(errorDiv);
    }
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