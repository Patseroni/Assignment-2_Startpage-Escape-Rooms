const div = document.querySelector("#div");

const modal = document.createElement("dialog");
modal.classList.add("modal");
div.appendChild(modal);

const modal_title = document.createElement("h3");
modal_title.classList.add("modal__title");
modal.appendChild(modal_title);
modal_title.innerText = "Book room \"Escape room\" (step 1)";

const modal_question = document.createElement("p");
modal_question.classList.add("modal__question");
modal.appendChild(modal_question);
modal_question.innerText = "What date would you like to come?";

const modal_date = document.createElement("label");
modal_date.classList.add("modal__date");
modal.appendChild(modal_date);
modal_date.innerText = "Date";

const input = document.createElement("input");
input.classList.add("input");
modal.appendChild(input);
input.focus();

const modal_search = document.createElement("button");
modal_search.classList.add("modal__search");
modal.appendChild(modal_search);
modal_search.innerText = "Search available times";

/*
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
*/



const bookingDate = '2024-12-12';

async function fetchAvaliableTimesAndId(date, id){
    const respons = await fetch(`https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${date}&challenge=${id}`);
    const data = await respons.json();
    return data;
}

async function printAvaliableTimesAndId(){
    const data = await fetchAvaliableTimesAndId(bookingDate, challengeIDBooking);
    console.log(data);
}

printAvaliableTimesAndId();


function openModal(challengeIDBooking) {
    //modal.showModal();

    return challengeIDBooking;
}

console.log(openModal);


/*
    rummetsKnapp.addEventListened("click", () =>
    rummet.id = challengeIDBooking
    
){

}
*/


