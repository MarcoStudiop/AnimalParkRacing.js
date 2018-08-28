///#######POLLO PARK######//



/* VARIABILI GLOBALI */

// GIOCATORI


/* Coordinate */
var posx1 = 0;
var posx2 = 0;
var posy1 = 0;
var posy2 = 0;

/*Sessione*/

/*Object : Pollo*/
function pollo(nome, peso, altezza,speed) {

    this.nome = nome;
    this.peso = peso;
    this.altezza = altezza;
    this.elemento = document.createElement("img");
    this.inizializza = inizializza; // la posizione iniziale
    this.posizione = posizione; // la posizione nel recinto // identità del giocatore in gara
    this.speed = speed; //la velocità in secondi del pollo(standard)
  //  this.velocita = velocita;
};
// Creazione Object : Pollo */
var pol1 = new pollo("cassandro", 160, 122,50);
var pol2 = new pollo("mario", 123, 50,70);
var pol3 = new pollo("pino", 60, 60,60 );

/* Funzione Base : Creazione */
function creazione() {
    var recinto = document.getElementById("recinto");
    var pollobox1 = document.createElement("div");
    var pollobox2 = document.createElement("div");
    var pollobox3 = document.createElement("div");

    /* DIV CONTENENTE IL POLLO */
    pollobox1.className = "pollo";
    pollobox2.className = "pollo";
    pollobox3.className = "pollo";
    /* PROPRIETÀ POLLO 1 */
    pol1.elemento.src = "img/pollo.png";
    pol1.elemento.style.width = "50px";
    pol1.elemento.style.height = "50px";
    pol1.elemento.style.position = "absolute";
    pol1.elemento.setAttribute("value", pol1.nome);
    /* PROPRIETÀ POLLO 2 */
    pol2.elemento.src = "img/pollo.png";
    pol2.elemento.style.width = "50px";
    pol2.elemento.style.height = "50px";
    pol2.elemento.style.position = "absolute";
    pol2.elemento.setAttribute("value", pol2.nome);
    pol2.elemento.style.filter = "hue-rotate(200deg)";
    /* PROPRIETÀ POLLO 3 */
    pol3.elemento.src = "img/pollo.png";
    pol3.elemento.style.width = "50px";
    pol3.elemento.style.height = "50px";
    pol3.elemento.style.position = "absolute";
    pol3.elemento.setAttribute("value", pol3.nome);
    pol3.elemento.style.filter = "hue-rotate(500deg)";

    /*DI PARTENZA TUTTI PARTONO DA 0*/


    //posizione elemento 1
    pol1.elemento.style.left = posx1;
    pol1.elemento.style.top = posy1;
    pol1.elemento.style.bottom = posy2;
    pol1.elemento.style.right = posx2;

    //poszione elemento 2
    pol2.elemento.style.left = posx1;
    pol2.elemento.style.top = posy1;
    pol2.elemento.style.bottom = posy2;
    pol2.elemento.style.right = posx2;
    //posizione elemento 3
    pol3.elemento.style.left = posx1;
    pol3.elemento.style.top = posy1;
    pol3.elemento.style.bottom = posy2;
    pol3.elemento.style.right = posx2;



    //INSERIMENTO DELLE IMMAGINI DENTRO AL DIV POLLO
    pollobox1.appendChild(pol1.elemento);
    pollobox2.appendChild(pol2.elemento);
    pollobox3.appendChild(pol3.elemento);
    //INSERIMENTO DEI DIV POLLO NEL RECINTO
    recinto.appendChild(pollobox1);
    recinto.appendChild(pollobox2);
    recinto.appendChild(pollobox3);


};


/* Funzione Costruttore : Gara() */
function gara(nome_gara, partecipanti, obiettivo,sessione_gara,classifica) {

    this.nome_gara = nome_gara;
    this.partecipanti = partecipanti;
    this.obiettivo = obiettivo;
    this.sessione_gara = sessione_gara;
    this.classifica = classifica;
    this.tempo_partita = tempo_partita; // ; da definire

    function partecipanti(){
    var selgiocatore1 = prompt("Seleziona Personaggio : Digita '01' Cassandro '02' Mario '03' Pino ");
    //var giocatore2 = prompt("Seleziona Personaggio : Digita '01' Cassandro '02' Mario '03' Pino ");
    //var qnt_giocatori = uno switch per selezionare quanti giocatori
    var partecipanti = new Array(3);

    switch (selgiocatore1) {

        case '01':
            if (pol1.player == null) {
                pol1.player = pol1.nome;
                partecipanti[0] = pol1.player;
            } else {
                alert("Cassandro è stato già preso");
            }

            if (pol2.player != null) {
                pol2.player = pol2.nome;
                partecipanti[1] = pol2.player;
            } else {
                pol2.player = "bot";
                partecipanti[1] = pol2.player;
            }

            if (pol3.player != null) {
                pol3.player = pol3.nome;
                partecipanti[2] = pol2.player;

            } else {
                pol3.player = "bot";
                partecipanti[2] = pol2.player;
            }

            break;
        case '02':
            if (pol2.player == null) {
                pol2.player = pol2.nome;
                partecipanti[1] = pol2.player;
            } else {
                alert("Mario è stato già preso");
            }
            if (pol1.player != null) {
                pol1.player = pol1.nome;
                partecipanti[0] = pol1.player;
            } else {
                pol1.player = "bot";
                partecipanti[0] = pol1.player;
            }

            if (pol3.player != null) {
                pol3.player = pol3.nome;
                partecipanti[2] = pol3.player;
            } else {
                pol3.player = "bot";
                partecipanti[2] = pol3.player;
            }
            break;
        case '03':
            if (pol3.player == null) {
                pol3.player = pol3.nome;
                partecipanti[2] = pol3.player;
            } else {
                alert("già preso");
            }
            if (pol1.player != null) {
                pol1.player = pol1.nome;
                partecipanti[0] = pol1.player;
            } else {
                pol1.player = "bot";
                partecipanti[0] = pol1.player;
            }

            if (pol2.player != null) {
                pol2.player = pol2.nome;
                partecipanti[1] = pol2.player;
            } else {
                pol2.player = "bot";
                partecipanti[1] = pol2.player;
            }
            break;


    };
    /* SPAZIO DEDICATO ALLA POSSIBILITA DI PIÙ GIOCATORI
        switch (giocatore2) {

        case 01:
            if (pol1.player == null) {
                pol1.player = pol1.nome;
            } else {
                alert("Cassandro è stato già preso");
            }

            if (pol2.player != null) {
                pol2.player = pol2.nome;
            } else {
                pol2.player = "bot";
            }

            if (pol3.player != null) {
                pol3.player = pol3.nome;
            } else {
                pol3.player = "bot";
            }

            break;
        case 02:
            if (pol2.player == null) {
                pol2.player = pol1.nome;
            } else {
                alert("già preso");
            }
            if (pol1.player != null) {
                pol1.player = pol1.nome;
            } else {
                pol1.player = "bot";
            }

            if (pol3.player != null) {
                pol3.player = pol3.nome;
            } else {
                pol3.player = "bot";
            }
        case 03:
            if (pol3.player == null) {
                pol3.player = pol1.nome;
            } else {
                alert("già preso");
            }
            if (pol1.player != null) {
                pol1.player = pol1.nome;
            } else {
                pol1.player = "bot";
            }

            if (pol2.player != null) {
                pol2.player = pol2.nome;
            } else {
                pol2.player = "bot";
            }
            break;









            */
    var y = document.getElementById("partecipanti");
    y.innerHTML = "<p> PARTECIPANTI : |*" + partecipanti[0] + "*||*" + partecipanti[1] + "*| |* " + partecipanti[2] + "*|" ;
    return partecipanti.valueOf();

   };
 //definire i partecipanti
     this.partecipanti  = partecipanti();
};

//istanza partita
function creaPartita() {


    // CREO LA PARTITA
    var partita = new gara("corsadei1500", "partecipanti();", 1500,false,"classifica();");
    return partita;
};


/* Funzione Finale : Start() */


//left,top,right,bottom//

// Metodo : inizializza()
function inizializza(posx1, posy1, posx2, posy2) {
    this.elemento.style.left = posx1;
    this.elemento.style.top = posy1;
    this.elemento.style.bottom = posy2;
    this.elemento.style.right = posx2;
};
// Metodo : speed()
function tempo_partita() {
    var velocita = Math.floor(Math.random() * 500);
    return velocita;
};
// Metodo : posizione()
function posizione() {
    var speed = this.speed;
    var accellera = Math.floor(Math.random() * 200);
    /* QUI IL MOVIMENTO DEI POLLI*/

    if (accellera >= posx1) {
        posx1 = accellera + speed ;
        this.elemento.style.left = posx1 + "px";
        if(posx1 >= 1500){

            posx1 = 1500;
            this.elemento.style.left = posx1 + "px";
        }



    } else if (accellera <= posx1) {
        posx1 = posx1 + accellera;
        this.elemento.style.left = posx1 + "px";
         if(posx1 >= 1000){
             clearInterval();

            };
       /* else{
            return posx1;
        }*/


    } else if (posx1 == 1500){
            posx1 = 1500;
            this.elemento.style.left = posx1 + "px";

    }

    else{
        alert("la strada è dall'altra parte...rincoglionito");
    }
    return posx1;

};

function start() {

    var sessione_partita = creaPartita();
    sessione_partita.nomepartita = prompt("Dai un nome alla partita");
    var stanza = document.getElementById("nomepartita");
    stanza.innerHTML = "ROOM NAME : " + sessione_partita.nomepartita ;

    sessione_partita.sessione_gara = true;


    // TEMPO MOVIMENTO //
    var tempoDigioco; // var t2; var t3;
    var t_partita = sessione_partita.tempo_partita();
    // var sp2 = pol2.velocita();
    //var sp3 = pol3.velocita();

    tempoDigioco = setInterval(function() {ponte(tempoDigioco,sessione_partita);}, t_partita);


};

function ponte(tempoDigioco,sessione_partita){

    var check_player = sessione_partita.partecipanti;
    var giocatore1; var giocatore2; var giocatore3;


    if((giocatore1 != 1500) ||  (giocatore2 != 1500) || (giocatore3 != 1500)){

    giocatore1 = pol1.posizione();
   /* if(giocatore1 >= 1500){
        clearInterval(tempoDigioco);
    }*/
    giocatore2 = pol2.posizione();
   /* if(giocatore2 >= 1500){
        clearInterval(tempoDigioco);
    }*/
    giocatore3 = pol3.posizione();

   /* if(giocatore3 == 1500){
        clearInterval(tempoDigioco);
    }*/
    }
    // BUG : TUTTI DIVENTANO 1500 E DANNO UNDEFINED
    if((giocatore1 >= 1500) || (giocatore2 >= 1500) || (giocatore3 >= 1500))
    {


        clearInterval(tempoDigioco);

        sessione_partita.sessione_gara = false;

        classifica(giocatore1,giocatore2,giocatore3);
     };



   /* else{

        giocatore1 = pol1.posizione();
        if(giocatore1 >= 1500){
            clearInterval(tempoDigioco);
        }
        giocatore2 = pol2.posizione();
        if(giocatore2 >= 1500){
            clearInterval(tempoDigioco);
        }
        giocatore3 = pol3.posizione();

        if(giocatore3 == 1500){
            clearInterval(tempoDigioco);
        }*/


     if (giocatore1 == 1500) {
        sessione_partita.vincitore = check_player[0];
        if ( check_player[0] != "bot") {
            alert("COMPLIMENTI HAI VINTO TU!!!");
            }

        }

    if (giocatore2 == 1500) {
        sessione_partita.vincitore = check_player[1];
        if (check_player[1] != "bot") {
            alert("COMPLIMENTI HAI VINTO TU!!!");

        }


    };
    if (giocatore3 == 1500) {
        sessione_partita.vincitore = check_player[2];
        if (check_player[2] != "bot") {
            alert("COMPLIMENTI HAI VINTO TU!!!");
        }


    }



    function classifica(giocatore1,giocatore2,giocatore3){


        var classifica = new Array(3);
        var x = document.getElementById("classifica");
        if((giocatore1 > giocatore2) && (giocatore1 > giocatore3))
                { classifica[0] = pol1.player  + "| posizione : " + String(giocatore1) + "px";}
        else if ( giocatore2 > giocatore1 && giocatore2 > giocatore3)
                { classifica[0] = pol2.player  + "| posizione : " + String(giocatore2) + "px";}
        else if ( giocatore3 > giocatore1 && giocatore3 > giocatore2)
                { classifica[0] = pol3.player  + "| posizione : " + String(giocatore3) + "px";};


         if ((giocatore1 > giocatore2) && (giocatore1 < giocatore3))
                { classifica[1] = pol1.player + "| posizione : " + String(giocatore1) + "px";}
        else if ( giocatore2 > giocatore1 && giocatore2 < giocatore3)
                { classifica[1] = pol2.player + "| posizione : " + String(giocatore2) + "px";}
        else if ( giocatore3 > giocatore1 && giocatore3 < giocatore2)
                { classifica[1] = pol3.player + "| posizione : " + String(giocatore3) + "px";};


        if((giocatore1 < giocatore2) && (giocatore1 < giocatore3) )
                { classifica[2] = pol1.player + "| posizione : " + String(giocatore1) + "px";}
        else if ( giocatore2 < giocatore1 && giocatore2 < giocatore3)
                { classifica[2] = pol2.player + "| posizione : " + String(giocatore2) + "px";}
        else if ( giocatore3 < giocatore1 && giocatore3 < giocatore2)
                { classifica[2] = pol3.player + "| posizione : " + String(giocatore3) + "px";};


        return x.innerHTML = "<h2>Classifica</h2><br><p id='posto1'>PRIMO POSTO : " + classifica[0] + "</p>" + "<br><p id='posto2'>SECONDO POSTO : " + classifica[1] + "</p>" + "<br><p id='posto3'>TERZO POSTO : " + classifica[2] + "</p>"  + "<br><p>Il VINCITORE E' : " + classifica[0] +"!!!!!</p>";

    };

};

/* Creazione */
creazione();
//creazione dei polli nel recinto//
function ricarica(){
    location.reload();
};

//posizione iniziale
pol1.inizializza(0, 0, 0, 0);
pol2.inizializza(0, 100, 0, 0);
pol3.inizializza(0, 200, 0, 0);

// fai partire il gioco
//start();  ora va col button




/* ISTANZE */