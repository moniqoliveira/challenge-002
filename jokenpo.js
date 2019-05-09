function jogar() {
  if (
    document.getElementById("pedra").checked == false &&
    document.getElementById("tesoura").checked == false &&
    document.getElementById("papel").checked == false
  ) {
    alert("escolha uma opção para Jogar :)");
  } else {
    var game = Math.floor(Math.random() * 3);
    switch (game) {
      case 0:
        document.getElementById("pc").src = "images/pedra_pc.png";
        break;
      case 1:
        document.getElementById("pc").src = "images/tesoura_pc.png";
        break;
      case 2:
        document.getElementById("pc").src = "images/papel_pc.png";
        break;
    }
  }
}

function resetar() {
  document.getElementById("pc").src = "pc.png";
  document.getElementById("placar").innerHTML = "";
}
