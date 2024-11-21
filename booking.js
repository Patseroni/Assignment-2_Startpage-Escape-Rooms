const div = document.querySelector("#div");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             Modals
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const modals = {
    modal1: document.createElement("dialog"),
    modal2: document.createElement("dialog"),
    modal3: document.createElement("dialog")
};

modals.modal1.classList.add("modal");
modals.modal2.classList.add("modal");
modals.modal3.classList.add("modal");

div.appendChild(modals.modal1);
div.appendChild(modals.modal2);
div.appendChild(modals.modal3);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Modal 1
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const modalTitle = document.createElement("h1");
modalTitle.classList.add("modal__title");
modals.modal1.appendChild(modalTitle);
modalTitle.innerText = "Book room \"Escape room\" (step 1)";

const modalQuestion = document.createElement("p");
modalQuestion.classList.add("modal__question");
modals.modal1.appendChild(modalQuestion);
modalQuestion.innerText = "What date would you like to come?";

const modalDate = document.createElement("label");
modalDate.classList.add("modal__text");
modals.modal1.appendChild(modalDate);
modalDate.innerText = "Date";

const input = document.createElement("input");
input.classList.add("input");
modals.modal1.appendChild(input);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const modalSearch = document.createElement("button");
modalSearch.classList.add("modal__search");
modals.modal1.appendChild(modalSearch);
modalSearch.innerText = "Search available times";

const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal__search");
modals.modal2.appendChild(modalSubmit);
modalSubmit.innerText = "Submit booking";


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Modal 2
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const modalTitle2 = document.createElement("h1");
modalTitle2.classList.add("modal2__title");
modals.modal2.appendChild(modalTitle2);
modalTitle2.innerText = "Book room \"Escape room\" (step 2)";

const modalName = document.createElement("label");
modalName.classList.add("modal__text");
modals.modal2.appendChild(modalName);
modalName.innerText = "Name";

const inputName = document.createElement("input");
inputName.classList.add("input__step2");
modals.modal2.appendChild(inputName);

const modalEmail = document.createElement("label");
modalEmail.classList.add("modal__text");
modals.modal2.appendChild(modalEmail);
modalEmail.innerText = "E-mail";

const inputEmail = document.createElement("input");
inputEmail.classList.add("input__step2");
modals.modal2.appendChild(inputEmail);

const modalTime = document.createElement("label");
modalTime.classList.add("modal__text");
modals.modal2.appendChild(modalTime);
modalTime.innerText = "What time?";

const selectTime = document.createElement("select");
selectTime.classList.add("select__input");
modals.modal2.appendChild(selectTime);

const modalParticipants = document.createElement("label");
modalParticipants.classList.add("modal__text");
modals.modal2.appendChild(modalParticipants);
modalParticipants.innerText = "How many participants?";

const selectParticipants = document.createElement("select");
selectParticipants.classList.add("select__input");
modals.modal2.appendChild(selectParticipants);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Modal 3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const modalMessage = document.createElement("h1");
modalMessage.classList.add("modal__message");
modals.modal3.appendChild(modalMessage);
modalMessage.innerText = "Thank you!";

const link = document.createElement("a");
link.classList.add("link");
modals.modal3.appendChild(link);
link.innerText = "Back to challenges";
link.href = "http://127.0.0.1:5502/frontpage.html#";


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         Eventlisteners
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function openModal() {
    modals.modal1.showModal();
}

modalSearch.addEventListener("click", () => {
    modals.modal1.close();
    modals.modal2.showModal();
});

modalSubmit.addEventListener("click", () => {
    modals.modal2.close();
    modals.modal3.showModal();
});

link.addEventListener("click", () => {
    modals.modal3.close();
});

