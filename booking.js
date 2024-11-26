function createModal1(challenge) {
    console.log(challenge);

    const div = document.querySelector("#div");
    
    const modal1 = document.createElement("dialog");
    modal1.classList.add("modal");
    div.appendChild(modal1);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close__button");
    modal1.appendChild(closeBtn);
    closeBtn.innerText = "X";

    const modalTitle = document.createElement("h1");
    modalTitle.classList.add("modal__title");
    modal1.appendChild(modalTitle);
    modalTitle.innerText = "Book room \"Escape room\" (step 1)";

    const modalQuestion = document.createElement("p");
    modalQuestion.classList.add("modal__question");
    modal1.appendChild(modalQuestion);
    modalQuestion.innerText = "What date would you like to come?";

    const modalDate = document.createElement("label");
    modalDate.classList.add("modal__text");
    modal1.appendChild(modalDate);
    modalDate.innerText = "Date";

    const input = document.createElement("input");
    input.classList.add("input");
    input.type = "date";
    modal1.appendChild(input);

    const modalSearch = document.createElement("button");
    modalSearch.classList.add("modal__search");
    modal1.appendChild(modalSearch);
    modalSearch.innerText = "Search available times";

    modalSearch.addEventListener("click", () => {
        inputValue = input.value;
        modal1.close();

        const modal2 = createModal2(challenge);
        modal2.showModal();
    });

    closeBtn.addEventListener("click", () => {
        modal1.close();
    });

    return modal1;
}

function createModal2(challenge) {
    const div = document.querySelector("#div");
    console.log(challenge.id)

    const modal2 = document.createElement("dialog");
    modal2.classList.add("modal");
    div.appendChild(modal2);

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close__button");
    modal2.appendChild(closeBtn);
    closeBtn.innerText = "X";
    
    const modalTitle2 = document.createElement("h1");
    modalTitle2.classList.add("modal2__title");
    modal2.appendChild(modalTitle2);
    modalTitle2.innerText = "Book room \"Escape room\" (step 2)";

    const modalName = document.createElement("label");
    modalName.classList.add("modal__text");
    modal2.appendChild(modalName);
    modalName.innerText = "Name";

    const inputName = document.createElement("input");
    inputName.classList.add("input__step2");
    modal2.appendChild(inputName);

    const modalEmail = document.createElement("label");
    modalEmail.classList.add("modal__text");
    modal2.appendChild(modalEmail);
    modalEmail.innerText = "E-mail";

    const inputEmail = document.createElement("input");
    inputEmail.classList.add("input__step2");
    modal2.appendChild(inputEmail);

    const modalTime = document.createElement("label");
    modalTime.classList.add("modal__text");
    modal2.appendChild(modalTime);
    modalTime.innerText = "What time?";

    const selectTime = document.createElement("select");
    selectTime.classList.add("select__input");
    modal2.appendChild(selectTime);

    const modalParticipants = document.createElement("label");
    modalParticipants.classList.add("modal__text");
    modal2.appendChild(modalParticipants);
    modalParticipants.innerText = "How many participants?";

    const selectParticipants = document.createElement("select");
    selectParticipants.classList.add("select__input");
    modal2.appendChild(selectParticipants);

    const modalSubmit = document.createElement("button");
    modalSubmit.classList.add("modal__search");
    modal2.appendChild(modalSubmit);
    modalSubmit.innerText = "Submit booking";

    modalSubmit.addEventListener("click", () => {
        inputNameValue = inputName.value;
        inputEmailValue = inputEmail.value;
        //selectTimeValue = selectTime.value;
        //selectParticipantsValue = selectParticipants.value;

        modal2.close();  
        const modal3 = createModal3();
        modal3.showModal();
        logReservations();
    });

    closeBtn.addEventListener("click", () => {
        modal2.close();
    });

    return modal2;
}

function createModal3() {

    const div = document.querySelector("#div");

    const modal3 = document.createElement("dialog");
    modal3.classList.add("modal");
    div.appendChild(modal3);
    

    const modalMessage = document.createElement("h1");
    modalMessage.classList.add("modal__message");
    modal3.appendChild(modalMessage);
    modalMessage.innerText = "Thank you!";

    const link = document.createElement("a");
    link.classList.add("link");
    modal3.appendChild(link);
    link.innerText = "Back to challenges";
    link.href = "http://127.0.0.1:5502/challenges.html";

    link.addEventListener("click", () => {
        modal3.close();
    });

    return modal3;
}

function openModal(challenge) {
    const modal1 = createModal1(challenge);
    modal1.showModal();

    return challenge;
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

async function logReservations(){
    const res = await postReservations(challengeID=12, inputNameValue, inputEmailValue, inputValue, selectTime="18:40", selectParticipants=4);
    const data = await res.json();
    console.log(data);
}



