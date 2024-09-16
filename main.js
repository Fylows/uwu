const flipCard = document.getElementById('flip-card');
const flipButton = document.getElementById('flip-button');
const button = document.getElementById('noo');
const yes = document.getElementById('yes');
const start = document.getElementById('start');
var audio = document.getElementById('audio');
audio.volume = 0.65;


flipButton.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
});

yes.addEventListener('click', () => {
    document.getElementById('bgimg').id = 'fade';

    console.log("aa");
    audio.play();

    
    document.body.style.height = '100vh';

    document.body.style.backgroundColor = "f4f4f4";
    document.flipButton.style.display = 'block';

});

// function imahe() {
//     document.body.style.height = '150vh';
//     document.body.style.backgroundColor = "f4f4f4";
//     document.flipButton.style.display = 'block';
// }

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });
const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

$(document).ready(function(){

  $("#yes").click(function() {
    console.log('clicked');
    // fade outs

    $('#start').fadeOut(5);
    $('#yes').fadeOut(2000);
    $('#noo').fadeOut(2000);

    // fade Ins

    
    $('#flip-button').fadeIn(5000);

  });
});

