// Hämta element från DOM
const filterButton = document.querySelector('.main__button');
const filterBox = document.querySelector('.filter_box');
const closeButton = document.getElementById('close_button');

// Eventlyssnare för att öppna rutan vid klick på huvudknappen
filterButton.addEventListener('click', () => {
    filterBox.style.display = 'flex'; // Visa modalrutan
    filterButton.style.display = 'none';
});

// Eventlyssnare för att stänga rutan vid klick på stängningsknappen
closeButton.addEventListener('click', () => {
    filterBox.style.display = 'none'; // 
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



