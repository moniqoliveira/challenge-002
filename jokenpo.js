let scoreMachine = 0;
let scoreUser = 0;

const PEDRA = 0;
const TESOURA = 1;
const PAPEL = 2;

const PEDRA_ELEMENT = document.getElementById("pedra");
const TESOURA_ELEMENT = document.getElementById("tesoura");
const PAPEL_ELEMENT = document.getElementById("papel");

function playMachine() {
  const play = Math.floor(Math.random() * 3);

  switch (play) {
    case PEDRA:
      document.getElementById("pc").src = "images/pedra_pc.png";
      break;
    case TESOURA:
      document.getElementById("pc").src = "images/tesoura_pc.png";
      break;
    case PAPEL:
      document.getElementById("pc").src = "images/papel_pc.png";
      break;
  }

  return play;
}

function alertNoChoices() {
  alert("escolha uma opção para Jogar :)");
}

function showResult(message) {
  document.getElementById("placar").innerHTML = message;
}

function showScore() {
  document.getElementById("placar-jogador").innerHTML = scoreUser;
  document.getElementById("placar-maquina").innerHTML = scoreMachine;
}

function addPointToMachine() {
  scoreMachine = scoreMachine + 1;
}

function addPointToUser() {
  scoreUser = scoreUser + 1;
}

function matchGame() {
  const machineChoice = playMachine();

  const IS_DRAW =
    (PEDRA_ELEMENT.checked && machineChoice == PEDRA) ||
    (TESOURA_ELEMENT.checked && machineChoice == TESOURA) ||
    (PAPEL_ELEMENT.checked && machineChoice == PAPEL);

  const HAS_MACHINE_WON =
    (PEDRA_ELEMENT.checked && machineChoice == PAPEL) ||
    (TESOURA_ELEMENT.checked && machineChoice == PEDRA) ||
    (PAPEL_ELEMENT.checked && machineChoice == TESOURA);

  const HAS_USER_WON = !HAS_MACHINE_WON;

  if (IS_DRAW) {
    showResult("Empate");
    return;
  }

  if (HAS_MACHINE_WON) {
    addPointToMachine();
    showResult("Você Perdeu :(");
    showScore();
    return;
  }

  if (HAS_USER_WON) {
    addPointToUser();
    showResult("Você Ganhou :)");
    showScore();
    return;
  }
}

function play() {
  const HAS_NO_CHOICES =
    !PEDRA_ELEMENT.checked &&
    !TESOURA_ELEMENT.checked &&
    !PAPEL_ELEMENT.checked;

  if (HAS_NO_CHOICES) {
    alertNoChoices();
  } else {
    matchGame();
  }
}

function reseta() {
  document.getElementById("pc").src = "images/pc.png";
  document.getElementById("placar").innerHTML = "";
  document.getElementById("placar-jogador").innerHTML = "";
  document.getElementById("placar-maquina").innerHTML = "";
  scoreMachine = 0;
  scoreUser = 0;
}
