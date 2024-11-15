const body = document.querySelector('body');
const header = document.querySelector('.header');
const pageWrapper = document.querySelector('.page-wrapper');

const hamburgerLink = document.createElement('a');
const hamburgerImg = document.createElement('img');
const menuLinksDiv = document.createElement('div');
const menuBackground = document.createElement('div');

const menuCrossDiv = document.createElement('div');
const menuCrossLink = document.createElement('a');
const menuCross = document.createElement('img');

const playOnlineLink = document.createElement('a');
const playOnsiteLink = document.createElement('a');
const theStoryLink = document.createElement('a');
const contactLink = document.createElement('a');

menuCrossLink.classList.add('menu-cross-link');
hamburgerLink.classList.add('hamburger-link');
hamburgerImg.classList.add('menu-img');
menuBackground.classList.add('menu-background');
menuCrossDiv.classList.add('menu-cross-div');
menuCross.classList.add('menu-cross');
menuLinksDiv.classList.add('menu-links-div');

hamburgerLink.href = '#';
hamburgerImg.src = 'images/Group_7.png';

menuCross.src = 'images/close.png';
menuBackground.appendChild(menuCrossDiv);
menuCrossLink.appendChild(menuCross);
menuCrossDiv.appendChild(menuCrossLink);
menuBackground.appendChild(menuLinksDiv);

header.appendChild(hamburgerLink);
hamburgerLink.appendChild(hamburgerImg);

menuLinksDiv.appendChild(playOnlineLink);
menuLinksDiv.appendChild(playOnsiteLink);
menuLinksDiv.appendChild(theStoryLink);
menuLinksDiv.appendChild(contactLink);

playOnlineLink.innerHTML = "Play Online";
playOnsiteLink.innerHTML = "Play On-site";
theStoryLink.innerHTML = "The Story";
contactLink.innerHTML = "Contact";


hamburgerLink.addEventListener('click', () => {
  body.appendChild(menuBackground);

  if (!pageWrapper.classList.contains('page-wrapper-animate')) {
    pageWrapper.classList.add('page-wrapper-animate');
  }
  else {
    pageWrapper.classList.remove('page-wrapper-animate');
  }

});

menuCrossLink.addEventListener('click', () => {
  body.removeChild(menuBackground);
  pageWrapper.classList.remove('page-wrapper-animate');

});




const challengeArray = [];
const sortedArray = [];

console.log(challengeArray);


async function getAPI() {
  const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
  const data = await res.json();

  data.challenges.forEach((challenge) => {
    challengeArray.push(challenge);
  })

  const SortArray = [];

  for (let i = 0; i < challengeArray.length; i++) {

    let sortedChallenge = challengeArray[i].rating
    let sortedID = challengeArray[i].id
    const SortObject = { id: sortedID, rating: sortedChallenge }


    sortedArray.push(SortObject);
    console.log(SortObject);
  }
  sortedArray.sort()


  for (let i = 0; i < 3; i++) {
    const maxValue = (Math.max.apply(null, sortedArray))
    console.log(maxValue);
    sortedArray.pop();
    console.log(sortedArray)

  }
}

getAPI();
