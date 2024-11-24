// Hämta element från DOM
const filterButton = document.querySelector('.main__button');
const filterModal = document.querySelector('.filter-modal');
const closeButton = document.getElementById('closeButton');

// Lägg till eventlyssnare för att öppna modalrutan när användaren klickar på huvudknappen
filterButton.addEventListener('click', () => {
    filterModal.style.display = 'flex'; // Visa modalrutan
    filterButton.style.display = 'none';
});

// Lägg till eventlyssnare för att stänga modalrutan när användaren klickar på stängningsknappen
closeButton.addEventListener('click', () => {
    filterModal.style.display = 'none'; // Dölj modalrutan
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
