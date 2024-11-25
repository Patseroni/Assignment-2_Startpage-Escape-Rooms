// Hämta element från DOM
const filterButton = document.querySelector('.main__button');
const filterBox = document.querySelector('.filter_box');
const closeButton = document.getElementById('close_button');

// Lägg till eventlyssnare för att öppna rutan när användaren klickar på huvudknappen
filterButton.addEventListener('click', () => {
    filterBox.style.display = 'flex'; // Visa modalrutan
    filterButton.style.display = 'none';
});

// Lägg till eventlyssnare för att stänga rutan när användaren klickar på stängningsknappen
closeButton.addEventListener('click', () => {
    filterBox.style.display = 'none'; // Dölj modalrutan
    filterButton.style.display = 'block';
});

// Eventlyssnare för filterknappar
document.getElementById('onlineButton').addEventListener('click', () => {
    console.log('Filtrerar online-utmaningar');
});

document.getElementById('onsiteButton').addEventListener('click', () => {
    console.log('Filtrerar on-site-utmaningar');
});

document.getElementById('completedButton').addEventListener('click', () => {
    console.log('Filtrerar genomförda utmaningar');
});
