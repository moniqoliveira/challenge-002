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
    if (
    (document.getElementById("pedra").checked == true && game == 0) || 
    (document.getElementById("tesoura").checked == true && game == 1) ||
    (docuement.getElementById("papel").checked == true && game == 2)
    ){
      document.getElementById("placar").innerHTML= "Empate";

    } else if (
      (document.getElementById("pedra").checked == true && game == 2) ||
      (document.getElementById("tesoura").checked == true && game == 0) ||
      (document.getElementById("papel".checked == true && game == 1)){
        document.getElementById("placar").innerHTML="Você Ganhou :)"; 
      }
    }
  }

function resetar() {
  document.getElementById("pc").src = "pc.png";
  document.getElementById("placar").innerHTML = "";

}
