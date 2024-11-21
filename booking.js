function createModal() {
    const modal = document.createElement("dialog");
    modal.classList.add("modal");
    document.body.appendChild(modal);

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

    return modal;
}

function openModal(challengeIDBooking, challengeParticipantsMin, challengeParticipantsMax) {
    const modal = createModal();
    modal.showModal();
    console.log(challengeIDBooking);
    console.log(challengeParticipantsMin);
    console.log(challengeParticipantsMax);

    return challengeIDBooking, challengeParticipantsMin, challengeParticipantsMax;
}

/*
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




console.log(openModal);
*/