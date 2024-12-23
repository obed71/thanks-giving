import './style.css';
import Typewriter from 'typewriter-effect/dist/core';
import photo from '/WhatsApp Image 2024-12-23 at 09.20.06.jpeg';
import photo1 from '/th-534600341.jpg';
import photo2 from '/th-3280659880.jpg';
import music from '/applause-180037.mp3';
import musicChristmass from '/WhatsApp Audio 2024-12-23 at 16.17.41.mp4';

const applause = new Audio(music);
const christmass = new Audio(musicChristmass);

const app = document.getElementById('app');
document.body.style.backgroundImage = `url(${photo})`;

const elx = document.createElement('div');
elx.id = 'x';

const heading = document.createElement('h1');
heading.textContent = 'I made this to thank CCE';

const paragraph = document.createElement('p');
const paragraphTextContent = `
  Ndashimira buriwese wamfashije 
  ndwaje petfrer <span class="strong">IMANA</span> Ibahe umugisha `;
const ndabemera = 'ndabemera';
const ndabakunda = 'ndabakunda !';

const typewriter = new Typewriter(paragraph, {
  loop: false,
  delay: 150,
});

typewriter
  .typeString(paragraphTextContent)
  .typeString(`<span class="wrong">${ndabemera}</span>`)
  .pauseFor(300)
  .deleteChars(ndabemera.length)
  .pauseFor(300)
  .typeString(`<span class="right">${ndabakunda}</span>`)
  .pauseFor(200)
  .deleteAll()
  .callFunction(() => paragraph.querySelector('.Typewriter__cursor').remove())
  .typeString(
    `<button id="showSurprise">Ready for a Surprise? Click Me!</button>`
  )
  .callFunction(allowAutoPlay)
  .callFunction(showSurprise)
  .start();

app.append(heading, paragraph, elx);

function playMusic() {
  if (applause.paused) {
    applause.play();
    christmass.play();
  }
}

function allowAutoPlay() {
  paragraph.querySelector('#showSurprise').addEventListener('click', playMusic);
}

function showSurprise() {
  const showSurpriseEl = paragraph.querySelector('#showSurprise');

  showSurpriseEl.addEventListener('click', () => {
    paragraph.remove();

    const photo1El = document.createElement('img');
    photo1El.src = photo1;
    photo1El.classList.add('surprise');

    const photo2El = document.createElement('img');
    photo2El.src = photo2;
    photo2El.classList.add('surprise');

    app.append(photo1El, photo2El);
  });
}
