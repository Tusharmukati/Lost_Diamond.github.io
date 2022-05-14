var cards = document.querySelectorAll(".cards");
var cardSound1 = new Audio("mixkit-select-click-1109.wav");
var cardSound2 = new Audio("mixkit-click-error-1110.wav");
var cardMusic1 = new Audio("No_Turning_Back_(getmp3.pro).mp3");
var cardMusic2 = new Audio(
  "Sink_into_Oblivion_Genshin_Impact_(getmp3.pro).mp3"
);

music();
function music() {
  switch (Math.floor(Math.random() * (2 - 0)) + 0) {
    case 1:
      cardMusic1.play();
      break;

    default:
      cardMusic2.play();
      break;
  }
}

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", run);
}

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", clicked);
}
function run() {
  switch (Math.floor(Math.random() * (10 - 0)) + 0) {
    case 0:
      cards[0].classList.add("diamond");
      ids = cards[0].id;
      break;
    case 1:
      cards[1].classList.add("diamond");
      ids = cards[1].id;

      break;
    case 2:
      cards[2].classList.add("diamond");
      ids = cards[2].id;

      break;
    case 3:
      cards[3].classList.add("diamond");
      ids = cards[3].id;

      break;
    case 4:
      cards[4].classList.add("diamond");
      ids = cards[4].id;

      break;
    case 5:
      cards[5].classList.add("diamond");
      ids = cards[5].id;
      break;
    case 6:
      cards[6].classList.add("diamond");
      ids = cards[6].id;

      break;
    case 7:
      cards[7].classList.add("diamond");
      ids = cards[7].id;

      break;
    case 8:
      cards[8].classList.add("diamond");
      ids = cards[8].id;

      break;

    default:
      cards[9].classList.add("diamond");
      ids = cards[9].id;
      break;
  }
}

function clicked() {
  if (this.id == ids) {
    cardSound1.play();
    
    document.getElementById("tag").innerHTML = "Congratulation u won"
} else {
    cardSound2.play();
    document.getElementById("tag").innerHTML = "Better luck next time"
    
  }
}
