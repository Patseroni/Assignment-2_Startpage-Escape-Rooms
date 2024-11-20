

async function fetchStuff(){
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            challenge: 12,
            name: "Customer Name",
            email: "name@example.com",
            date: "2022-12-12",
            time: "18:30",
            participants: 4,
        }),
    });
    const data = await res.json();
    console.log(data);
}

fetchStuff();



const bookingDate = '2024-12-12';

async function fetchAvaliableTimesAndId(date, id){
    const respons = await fetch(`https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${date}&challenge=${id}`);
    const data = await respons.json();
    return data;
}

async function printAvaliableTimesAndId(){
    const data = await fetchAvaliableTimesAndId(bookingDate, openModal);
    console.log(data);
}

printAvaliableTimesAndId();


function openModal(challengeIDBooking) {
    return challengeIDBooking
}
console.log(openModal);

