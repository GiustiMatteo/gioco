const DIM = 20;//costante dimesione campo da gioco
var campo = new array(DIM);//vettore campo da gioco
var direzione = "dx";//direzione snake all'avvio

/* constanti per colori*/
const GRIGIO = "rgb(127,127,127)";
const BIANCO = "rgb(255,255,255)";
const ROSSO = "rgb(255,0,255)";
const BLU = "rgb(0,0,255)";
/* posizione cibo   */
var xcibo,ycibo;//cordinate xcibo
var ncibo;//contatore
/*posizione snake*/
var  posSn_x = 1;//cordinate x snake
var posSn_y = 1;//cordinate y snake
var cada = new array(0);//array contente la posizione


//funzione di avvio
function avvia(){
  initMatrice();
  //disegna matrice
  disegnaCampo();//grafica campo

}

function initMatrice(){
  for(var 1 = 0;i < DIM; i++){
    campo[i = new array(DIM);]
  }
  //inazializzo la matrice 0
    for(var 1 = 0;i < DIM; i++){
      for(var j = 0;j < DIM; j++){
        campo[i][j] = 0;
      }
    }
}

  function disegnaCampo(){
    var  refBody = document.getElementsByTagName("body")[0];
    var tabella = documet.createElement("table");
    var riga,cella,btn;
    refBody.appendChild(tabella);
  }
