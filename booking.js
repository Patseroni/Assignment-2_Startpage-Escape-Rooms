function openModal(challenge) {
    const modal1 = createModal1(challenge);
    modal1.showModal();

    return challenge;
}

function noAvailableTimeSlots(modal1) {

    let noAvailableTime = modal1.querySelector(".modal__noAvailableTime");

    if (!noAvailableTime) {
        noAvailableTime = document.createElement("p");
        noAvailableTime.classList.add("modal__noAvailableTime");
        modal1.appendChild(noAvailableTime);
    }

    noAvailableTime.innerText = "Unfortunately, all times are fully booked for this day. Please try selecting another day.";
}

function userChoosePastDate(date, modal1) {
    const selectedDate = new Date(date);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            let pastDate = modal1.querySelector(".modal__pastDate");

            if (!pastDate) {
                pastDate = document.createElement("p");
                pastDate.classList.add("modal__pastDate");
                modal1.appendChild(pastDate);
            }

            pastDate.innerText = "You cannot select a past date. Please choose another date.";
            return true;
        }
    return false;
}

function createModal1(challenge) {

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
    modalTitle.innerText = `Book room ${challenge.title} (step 1)`;

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

    modalSearch.addEventListener("click", async () => {
        const date = input.value;
        const availableTimes = await fetchAvailableTimes(date, challenge.id);
        
        if (userChoosePastDate(date, modal1)) {
            return;
        };
   
        if (availableTimes.slots.length === 0) {
            noAvailableTimeSlots(modal1);
            return;
        }

        modal1.close();

        const modal2 = createModal2(challenge, availableTimes, date);
        modal2.showModal();
    });

    closeBtn.addEventListener("click", () => {
        modal1.close();
    });

    return modal1;
}

function createModal2(challenge, availableTimes, date) {
    const div = document.querySelector("#div");

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
    modalTitle2.innerText = `Book room ${challenge.title} (step 2)`;

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

    for (let i = 0; i < availableTimes.slots.length; i++) {
        const startTime = availableTimes.slots[i];

        let [hours, minutes] = startTime.split(':').map(Number);

        let totalMinutes = hours * 60 + minutes;

        totalMinutes += 90;

        const newHours = Math.floor(totalMinutes / 60);
        const newMinutes = totalMinutes % 60;

        let correctMinutes = newMinutes;
        if (newMinutes < 10) {
            correctMinutes = "0" + newMinutes;
        }

        const endTime = `${newHours}:${correctMinutes}`;

        const option = document.createElement("option");
        option.value = availableTimes.slots[i];
        option.textContent = `${startTime} - ${endTime}`;
        selectTime.appendChild(option);
    }

    const modalParticipants = document.createElement("label");
    modalParticipants.classList.add("modal__text");
    modal2.appendChild(modalParticipants);
    modalParticipants.innerText = "How many participants?";

    const selectParticipants = document.createElement("select");
    selectParticipants.classList.add("select__input");
    modal2.appendChild(selectParticipants);

    for (let i = challenge.minParticipants; i <= challenge.maxParticipants; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `${i} participants`;
        selectParticipants.appendChild(option);
    }

    const modalSubmit = document.createElement("button");
    modalSubmit.classList.add("modal__search");
    modal2.appendChild(modalSubmit);
    modalSubmit.innerText = "Submit booking";

     modalSubmit.addEventListener("click", async () => {
        
        if (inputName.value === "" || inputEmail.value === "") {
            const emptyInput = document.createElement("p");
            emptyInput.classList.add("modal__emptyInput");
            modal2.appendChild(emptyInput);
            emptyInput.innerText = "Please enter your name and email.";
        }

        const challengeID = challenge.id;
        const inputNameValue = inputName.value;
        const inputEmailValue = inputEmail.value;
        const dateValue = date;
        const selectTimeValue = selectTime.value;
        const selectParticipantsValue = parseInt(selectParticipants.value, 10);

        const res = await postReservations(challengeID, inputNameValue, inputEmailValue, dateValue, selectTimeValue, selectParticipantsValue);
        const data = await res.json();
        console.log(data);

        modal2.close();  
        const modal3 = createModal3();
        modal3.showModal();
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
    link.href = "challenges.html";

    link.addEventListener("click", () => {
        modal3.close();
    });

    return modal3;
}