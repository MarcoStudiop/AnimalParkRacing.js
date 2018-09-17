///#######POLLO PARK 0.3######//


/*
    MARCO SAVIANO 2018

    CREDITS TO 
    //---------------------------------------------------------------------------------------------//
        Icon/Draw ANNA CAGNI
        Testing GIULIA PASTROLIN
    //---------------------------------------------------------------------------------------------//
    
    GAME TYPE
    //---------------------------------------------------------------------------------------------//
        WEB/BROWSER GAME
    
    LANGUAGE PROGRAMMING
    //---------------------------------------------------------------------------------------------//
        JAVASCRIPT, JQUERY(ALMOST), SQL(FUTURE), NODE.JS(FUTURE)
    
    INTRODUCTION
    //---------------------------------------------------------------------------------------------//
        POLLO PARK 0.3 is a race of animals developed in whole javascript code. At moment is
        not completely competitive. Will get time to create a funny free game. I hope this kind
        of project will inspire you.  Enjoy!

    INDICE
    //---------------------------------------------------------------------------------------------//

    RIGA | FUNZIONE

    //---------------------------------------------------------------------------------------------//
    110   COSTRUTTORE POLLO
          POLLO : POSIZIONE
          POLLO : INIZIALIZZA
    //---------------------------------------------------------------------------------------------//       
    186   CREAZIONE (ANIMALI IN CAMPO)
    //---------------------------------------------------------------------------------------------// 
    308   GARA : FUNZIONE MAIN
    350   GARA : METODO PARTECIPANTI
          GARA : METODO TEMPO_PARTITA
          GARA : METODO CLASSIFICA
    //---------------------------------------------------------------------------------------------//          
          START
    //---------------------------------------------------------------------------------------------//
          PONTE
    //---------------------------------------------------------------------------------------------//
          RICARICA
 



    //---------------------------------------------------------------------------------------------//
    
    
*/

//---------------------------------------------------------------------------------------------//


// JOY INCLUDE

//#NOTAZIONE ES6 (ECMASCRIPT 6)
//---------------------------------------------------------------------------------------------//
import {
    joy
} from './modules/autojoy.js';
//---------------------------------------------------------------------------------------------//
import {
    joy_comment
} from './modules/autojoy.js';
//---------------------------------------------------------------------------------------------//
import {
    joy_error
} from './modules/autojoy.js';
//---------------------------------------------------------------------------------------------//

//#VARIABILI IMPORTATE
import {
    program
} from './modules/autojoy.js';
import {
    programmer
} from './modules/autojoy.js';
import {
    commento
} from './modules/autojoy.js';


/* VARIABILI GLOBALI */
//---------------------------------------------------------------------------------------------//

/* ########## Coordinate ########## */
//---------------------------------------------------------------------------------------------//
var posx1 = 0; // POSIZIONE ASSE X  (LEFT)
var posx2 = 0; // POSIZIONE ASSE X  (RIGHT)
var posy1 = 0; // POSIZIONE ASSE Y  (TOP)
var posy2 = 0; // POSIZIONE ASSE Y  (BOTTOM)
//---------------------------------------------------------------------------------------------//

/* ########## Memorie ##########*/
//---------------------------------------------------------------------------------------------//
var reg_m = new Array(); // REGISTRA  VELOCITA BASE E ACCELLERA
var mem_pos = new Array(3); // MEMORIZZA POSX
var game_PLAYER = new Array(); // ARRAY DEI GIOCATORI
var game_BOT = new Array() // ARRAY DEI BOT
//---------------------------------------------------------------------------------------------//

/* ########## COMANDI ##########*/
//---------------------------------------------------------------------------------------------//
//var e =  document.getElementById("comando1").value; // VALORE UNICODE "68"
var arrow_left = document.getElementById("comando2").value; //VALORE UNICODE "39"
//---------------------------------------------------------------------------------------------//

/* ########## Contatori Globali ##########*/
//---------------------------------------------------------------------------------------------//
var i;
//---------------------------------------------------------------------------------------------//


//# GIOCATORI DELLA PARTITA
//---------------------------------------------------------------------------------------------//
var giocatore1;
var giocatore2;
var giocatore3;

//KEY ASSOCIATI

// var key_p1;
//---------------------------------------------------------------------------------------------//

/*function tasto_D(right_d) {
    
    //ASSOCIO IL TASTO "D" DELLA TASTIERA ALL'EVENTO KEYDOWN
    var key = right_d;
    //TEST A VIDEO DEL VALORE UNICODE DEL TASTO "D"
    document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;

    
    // STRATEGIA PER FAR SI CHE SI MUOVA.... CON LA PRESSIONE DEL TASTO
    // IDEE....
    //#0 L'EVENTO DEVE ACCADERE QUANDO? INIZIA LA PARTITA
    //#1 CHI INTERROGA L'EVENTO? ALL'ANIMALE SELEZIONATO
    //#2
}*/


//---------------------------------------------------------------------------------------------//
function tasto_FRECCIADESTRA(arrow_left) {

    var key = arrow_left;
    document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;
}
//---------------------------------------------------------------------------------------------//




/* ########## COSTRUTTORE ANIMALE : POLLO  ##########*/
//---------------------------------------------------------------------------------------------//
function pollo(default_NOME, nome, peso, altezza, speed) {

    //# NOME_DEFAULT
    this.default_NOME = default_NOME;
    //---------------------------------------------------------------------------------------------//

    //# NOME
    this.nome = nome;
    //---------------------------------------------------------------------------------------------//

    //# PESO
    this.peso = peso;
    //---------------------------------------------------------------------------------------------//

    //# ALTEZZA
    this.altezza = altezza;
    //---------------------------------------------------------------------------------------------//

    //# ICONA
    this.elemento = document.createElement("img");
    //---------------------------------------------------------------------------------------------//

    //# POSIZIONE DI PARTENZA
    this.inizializza = inizializza;
    //---------------------------------------------------------------------------------------------//

    //# POSIZIONE IN GIOCO
    this.posizione = posizione;
    //---------------------------------------------------------------------------------------------//

    //# VELOCITÀ BASE
    this.speed = speed;
    //---------------------------------------------------------------------------------------------//

    /*
        this.player = player;
        
        ?) elemento.player viene definito dopo. Per questo motivo che non la si trova qui
    */

};



/* ########## COSTRUTTORE ANIMALE : SCIMMIA  ##########*/

/* ########## COSTRUTTORE ANIMALE : ELEFANTE ##########*/

/* ########## COSTRUTTORE ANIMALE : ORSO ##########*/

/* ########## COSTRUTTORE ANIMALE : ALCE  ##########*/

/* ########## Animali Creati ##########*/

//---------------------------------------------------------------------------------------------//
var pol1 = new pollo("Cassandro", "Cassandro", 160, 122, 50);
var pol2 = new pollo("Mario", "Mario", 123, 50, 70);
var pol3 = new pollo("Pino", "Pino", 60, 60, 60);
//---------------------------------------------------------------------------------------------//






/* ########## FUNZIONI ##########*/
//---------------------------------------------------------------------------------------------//
function myfunction() {

    alert("prova");
}
//---------------------------------------------------------------------------------------------//

//#186
//# CREAZIONE 0.2
//---------------------------------------------------------------------------------------------//



    //# SPIEGAZIONE

    //---------------------------------------------------------------------------------------------//
    /*
        FINALITÀ :

        1) CREA GLI ELEMENTI NELL'HTML
        2) DEFINISCE LE PROPRIETÀ
        3) INSERISCE ALL'INTERNO DELLA PAGINA
    */
    //---------------------------------------------------------------------------------------------//


    /* ########## VARIABILI ##########*/
    //---------------------------------------------------------------------------------------------//

    //# CAMPO DI GIOCO
    //---------------------------------------------------------------------------------------------//
    var recinto = document.getElementById("recinto");
    //---------------------------------------------------------------------------------------------//

    //# ELEMENTI HTML POLLO1,POLLO2,POLLO3
    //---------------------------------------------------------------------------------------------//
    var pollobox1 = document.createElement("div");
    var pollobox2 = document.createElement("div");
    var pollobox3 = document.createElement("div");
    //---------------------------------------------------------------------------------------------//

    /* ########## ELEMENTI DIV ##########*/
    //---------------------------------------------------------------------------------------------//

    ///# PROPRIETÀ CLASSE DEI DIV CONTENENTI CIASCUNO UN ELEMENTO IMG
    //---------------------------------------------------------------------------------------------//
    pollobox1.className = "pollo";
    pollobox2.className = "pollo";
    pollobox3.className = "pollo";
    //---------------------------------------------------------------------------------------------//


    /* ########## ELEMENTI IMG ##########*/
    //---------------------------------------------------------------------------------------------//


    ///# PROPRIETÀ IMG POLLO 1
    //---------------------------------------------------------------------------------------------//
<<<<<<< master
<<<<<<< master
    pol1.elemento.src = "img/pollo.png";
=======
    pol1.elemento.src = "./img/pollo.png";
>>>>>>> FIx
=======
    pol1.elemento.src = "./img/pollo.png";
>>>>>>> Update
    pol1.elemento.style.width = "50px";
    pol1.elemento.style.height = "50px";
    pol1.elemento.style.position = "absolute";
    pol1.elemento.setAttribute("value", pol1.nome);
    //---------------------------------------------------------------------------------------------//

    pol1.elemento.id = "player1";


    ///# PROPRIETÀ IMG POLLO 2
    //---------------------------------------------------------------------------------------------//
<<<<<<< master
<<<<<<< master
    pol2.elemento.src = "img/pollo.png";
=======
    pol2.elemento.src = "./img/pollo.png";
>>>>>>> FIx
=======
    pol2.elemento.src = "./img/pollo.png";
>>>>>>> Update
    pol2.elemento.style.width = "50px";
    pol2.elemento.style.height = "50px";
    pol2.elemento.style.position = "absolute";
    pol2.elemento.setAttribute("value", pol2.nome);
    pol2.elemento.style.filter = "hue-rotate(200deg)";
    //---------------------------------------------------------------------------------------------//

    ///# PROPRIETÀ IMG POLLO 3
    //---------------------------------------------------------------------------------------------//
<<<<<<< master
<<<<<<< master
    pol3.elemento.src = "img/pollo.png";
=======
    pol3.elemento.src = "./img/pollo.png";
>>>>>>> FIx
=======
    pol3.elemento.src = "./img/pollo.png";
>>>>>>> Update
    pol3.elemento.style.width = "50px";
    pol3.elemento.style.height = "50px";
    pol3.elemento.style.position = "absolute";
    pol3.elemento.setAttribute("value", pol3.nome);
    pol3.elemento.style.filter = "hue-rotate(500deg)";
    //---------------------------------------------------------------------------------------------//



    /* ########## COORDINATE IMG ##########*/
    //---------------------------------------------------------------------------------------------//

    ///# COORDINATE IMG POLLO 1
    //---------------------------------------------------------------------------------------------//
    pol1.elemento.style.left = posx1;
    pol1.elemento.style.top = posy1;
    pol1.elemento.style.bottom = posy2;
    pol1.elemento.style.right = posx2;
    //---------------------------------------------------------------------------------------------//
    ///# COORDINATE IMG POLLO 2
    //---------------------------------------------------------------------------------------------//
    pol2.elemento.style.left = posx1;
    pol2.elemento.style.top = posy1;
    pol2.elemento.style.bottom = posy2;
    pol2.elemento.style.right = posx2;
    //---------------------------------------------------------------------------------------------//
    ///# COORDINATE IMG POLLO 3
    //---------------------------------------------------------------------------------------------//
    pol3.elemento.style.left = posx1;
    pol3.elemento.style.top = posy1;
    pol3.elemento.style.bottom = posy2;
    pol3.elemento.style.right = posx2;
    //---------------------------------------------------------------------------------------------//

    /* ########## INSERIMENTO IMG DENTRO DIV ##########*/
    //---------------------------------------------------------------------------------------------//
    pollobox1.appendChild(pol1.elemento);
    pollobox2.appendChild(pol2.elemento);
    pollobox3.appendChild(pol3.elemento);
    //---------------------------------------------------------------------------------------------//

    /* ########## INSERIMENTO DIV DENTRO CAMPO ##########*/
    //---------------------------------------------------------------------------------------------//
    recinto.appendChild(pollobox1);
    recinto.appendChild(pollobox2);
    recinto.appendChild(pollobox3);
    //---------------------------------------------------------------------------------------------//

   
  // key_p1 = document.getElementById("player1");

//alert(key_p1.id);
//key_p1.addEventListener("keypress", tasto_D);


//alert(key_p1);

//# GARA 0.2

//---------------------------------------------------------------------------------------------//
function gara(nome_gara, partecipanti, obiettivo, sessione_gara, classifica) {

    //# SPIEGAZIONE

    //---------------------------------------------------------------------------------------------//
    /*
        FINALITA:
        1) COSTRUISCE UNA GARA
        2) DEFINISCE I PARTECIPANTI, OBIETTIVO, CLASSIFICA, TEMPO
        3) RESTITUISCE I PARTECIPANTI ATTRAVERSO IL METODO INTERNO
    */
    //---------------------------------------------------------------------------------------------//


    //# NOME DELLA GARA
    //---------------------------------------------------------------------------------------------//
    this.nome_gara = nome_gara;

    //# METODO PARTECIPANTI
    //---------------------------------------------------------------------------------------------//
    this.partecipanti = partecipanti;

    //# OBIETTIVO DELLA GARA
    //---------------------------------------------------------------------------------------------//
    this.obiettivo = obiettivo;

    //# SESSIONE DELLA GARA
    //---------------------------------------------------------------------------------------------//
    this.sessione_gara = sessione_gara;

    //# METODO CLASSIFICA
    //---------------------------------------------------------------------------------------------//
    this.classifica = classifica;

    //# TEMPO PARTITA
    //---------------------------------------------------------------------------------------------//
    this.tempo_partita = tempo_partita;

    //##350

    /* ########## METODO : PARTECIPANTI  ##########*/
    //---------------------------------------------------------------------------------------------//
    function partecipanti() {

        //# INPUT : SELEZIONE GIOCATORE DA USARE
        //---------------------------------------------------------------------------------------------//
      
        //var selgiocatore1 = prompt("Seleziona Personaggio : Digita '01' Cassandro '02' Mario '03' Pino ");
        
        /*ADD SELECT*/
        var p;

        //var selgiocatore1 = document.getElementById("player01").childNodes[1].value;

        //SEMPLICEMENTE COSI FUNZIONA
        var selgiocatore1 = document.getElementById("player01");
        var selgiocatore2 = document.getElementById("player02");
        
        /*   for (p=0; p <= selgiocatore1.childNodes.length; p++){
            if(selgiocatore1.childNodes[p]){
                alert("hai selezionato questo nodo" + selgiocatore1.value);
            }
        }*/
       
   
        
        //ADD 

        //---------------------------------------------------------------------------------------------//
        /* 
            1)var giocatore2 = prompt("Seleziona Personaggio : Digita '01' Cassandro '02' Mario '03' Pino ");
            2)var qnt_giocatori = uno switch per selezionare quanti giocatori
        */
        //---------------------------------------------------------------------------------------------//



        //# SCELTA : PARTECIPANTI
        //---------------------------------------------------------------------------------------------//
        var partecipanti = new Array(3);

        // PRENDE IL VALORE DELLA SELEZIONE
        switch (selgiocatore1.value) {

            //# CASO 1 :  PLAYER 1 VS BOT
            //---------------------------------------------------------------------------------------------//
            case 'p1':

                //#SE È VUOTO, ME LO PRENDO
                //---------------------------------------------------------------------------------------------//
                if (pol1.player == null) {

                    var ask_rename = prompt("Hai selezionato " + pol1.nome + " Vuoi rinominare il tuo giocatore? 0 = NO  1 = SI");

                    //# RICHIESTA NEW NAME
                    //---------------------------------------------------------------------------------------------//

                    switch (ask_rename) {
                        //SCELTA = NO
                        //---------------------------------------------------------------------------------------------//
                        case '0':

                            //# PERSONAGGIO SELEZIONATO DA TE
                            //---------------------------------------------------------------------------------------------//
                            pol1.player = pol1.nome;

                            //# ASSEGNO EVENTO ONKEYDOWN AL DOCUMENT
                            //---------------------------------------------------------------------------------------------//
                            document.onkeydown = tasto_D; 
                           // pol1.elemento.onkeydown = "tasto_D(right_d);"
                            //# PERSONAGGIO DIVENTA PARTECIPANTE(CON TUO NOME)
                            //---------------------------------------------------------------------------------------------//
                            partecipanti[0] = pol1.player;
                            break;
                            //SCELTA = SI
                            //---------------------------------------------------------------------------------------------//
                        case '1':

                            var rename = prompt(" SCRIVI IL NUOVO NOME :D ")

                            //# NOME ATTUALE = NUOVO NOME
                            //---------------------------------------------------------------------------------------------//
                            pol1.nome = rename;
                            
                            //# ASSEGNO EVENTO ONKEYDOWN
                            document.onkeydown = tasto_D; 
                            //---------------------------------------------------------------------------------------------//
                            pol1.elemento.setAttribute("onkeydown", "tasto_D(right_d)");

                            //# PERSONAGGIO SELEZIONATO DA TE
                            //---------------------------------------------------------------------------------------------//
                            pol1.player = pol1.nome;

                            //# PERSONAGGIO DIVENTA PARTECIPANTE(CON TUO NOME)
                            //---------------------------------------------------------------------------------------------//
                            partecipanti[0] = pol1.player;
                            break;
                    };
                }
                //#DICHIARA DI ESSERE STATO GIÀ SELEZIONATO
                //---------------------------------------------------------------------------------------------//
                else {
                    alert("Il personaggio : " + pol1.default_NOME + " è stato già preso");
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
                //# CASO 2 : PLAYER 2 VS BOT
                //---------------------------------------------------------------------------------------------//
            case 'p2':
                if (pol2.player == null) {
                    var ask_rename = prompt("Hai selezionato " + pol2.nome + " Vuoi rinominare il tuo giocatore? 0 = NO  1 = SI");
                    //# RICHIESTA NEW NAME
                    //---------------------------------------------------------------------------------------------//
                    switch (ask_rename) {
                        //SCELTA = NO
                        //---------------------------------------------------------------------------------------------//
                        case '0':
                            //# PERSONAGGIO SELEZIONATO DA TE
                            //---------------------------------------------------------------------------------------------//
                            pol2.player = pol2.nome;
                            //# ASSEGNO EVENTO ONKEYDOWN
                            //---------------------------------------------------------------------------------------------//
                            pol2.elemento.setAttribute("onkeydown", "tasto_D(right_d)");
                            //# PERSONAGGIO DIVENTA PARTECIPANTE(CON TUO NOME)
                            //---------------------------------------------------------------------------------------------//
                            partecipanti[1] = pol2.player;
                            break;
                            //SCELTA = SI
                            //---------------------------------------------------------------------------------------------//
                        case '1':
                            var rename = prompt("SCRIVI IL NUOVO NOME :D")
                            //# NOME ATTUALE = NUOVO NOME
                            //---------------------------------------------------------------------------------------------//
                            pol2.nome = rename;
                            //# ASSEGNO EVENTO ONKEYDOWN
                            //---------------------------------------------------------------------------------------------//
                            pol2.elemento.setAttribute("onkeydown", "tasto_D(right_d)");
                            //# PERSONAGGIO SELEZIONATO DA TE
                            //---------------------------------------------------------------------------------------------//
                            pol2.player = pol2.nome;
                            //# PERSONAGGIO DIVENTA PARTECIPANTE(CON TUO NOME)
                            //---------------------------------------------------------------------------------------------//
                            partecipanti[1] = pol2.player;
                            break;
                    };

                } else {
                    //#DICHIARA DI ESSERE STATO GIÀ SELEZIONATO
                    alert("Il personaggio : " + pol2.default_NOME + " è stato già preso");
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
                //# CASO 3 : PLAYER 3 VS BOT
            case 'p3':
                //---------------------------------------------------------------------------------------------//
                if (pol3.player == null) {
                    var ask_rename = prompt("Hai selezionato " + pol3.nome + " Vuoi rinominare il tuo giocatore? 0 = NO  1 = SI");
                    //# RICHIESTA NEW NAME
                    //---------------------------------------------------------------------------------------------//
                    switch (ask_rename) {
                        //SCELTA = NO
                        //---------------------------------------------------------------------------------------------//
                        case '0':
                            //# PERSONAGGIO SELEZIONATO DA TE
                            //---------------------------------------------------------------------------------------------//
                            pol3.player = pol3.nome;
                            //# ASSEGNO EVENTO ONKEYDOWN
                            //---------------------------------------------------------------------------------------------//
                            pol3.elemento.setAttribute("onkeypress", "tasto_D(right_d)");
                            //# PERSONAGGIO DIVENTA PARTECIPANTE(CON TUO NOME)
                            //---------------------------------------------------------------------------------------------//
                            partecipanti[2] = pol3.player;
                            break;
                            //SCELTA = SI
                            //---------------------------------------------------------------------------------------------//
                        case '1':
                            var rename = prompt("SCRIVI IL NUOVO NOME :D")
                            //# NOME ATTUALE = NUOVO NOME
                            //---------------------------------------------------------------------------------------------//
                            pol3.nome = rename;
                            //# ASSEGNO EVENTO ONKEYDOWN
                            //---------------------------------------------------------------------------------------------//
                            pol3.elemento.setAttribute("onkeydown", "tasto_D(right_d)");
                            //# PERSONAGGIO SELEZIONATO DA TE
                            //---------------------------------------------------------------------------------------------//
                            pol3.player = pol3.nome;
                            //# PERSONAGGIO DIVENTA PARTECIPANTE(CON TUO NOME)
                            //---------------------------------------------------------------------------------------------//
                            partecipanti[2] = pol3.player;
                            break;
                    };
                } else {
                    //#DICHIARA DI ESSERE STATO GIÀ SELEZIONATO
                    //---------------------------------------------------------------------------------------------//
                    alert("Il personaggio : " + pol3.default_NOME + " è stato già preso");
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
                //# CASO 4 : BOT VS BOT
            default:
                if (pol3.player != null) {
                    pol3.player = pol3.nome;
                    partecipanti[2] = pol3.player;
                } else {
                    pol3.player = "bot";
                    partecipanti[2] = pol3.player;
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

        };


        /* ########## NEXT ADD :  2 PLAYER  ##########*/
        
            /*switch (selgiocatore2.value) {
    
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
                    pol2.player = pol2.nome;
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
                break;  */

                
        //# ELEMENTO HTML PER MOSTRARE I PARTECIPANTI IN PAGINA
        //---------------------------------------------------------------------------------------------//
        var y = document.getElementById("partecipanti");
        //---------------------------------------------------------------------------------------------//
        //# STAMPA QUESTA SCRITTA
        //---------------------------------------------------------------------------------------------//
        y.innerHTML = "<p> PARTECIPANTI : |*" + partecipanti[0] + "*||*" + partecipanti[1] + "*| |* " + partecipanti[2] + "*|";
        //---------------------------------------------------------------------------------------------//

        //# RITORNA I PARTECIPANTI COME DATO EX[PLAYER,BOT,BOT]
        //---------------------------------------------------------------------------------------------//
        return partecipanti.valueOf();
        //---------------------------------------------------------------------------------------------//

    };
    //#PARTECIPANTI = VALORE RESTITUITO DAL METODO #PARTECIPANTI#
    //---------------------------------------------------------------------------------------------//
    this.partecipanti = joy(partecipanti());
    //---------------------------------------------------------------------------------------------//
};

    // pol1.elemento.setAttribute("onkeypress", tasto_D(event)  );
//#683

/* ########## METODO : TEMPO_PARTITA(GARA) ##########*/
//---------------------------------------------------------------------------------------------//
function tempo_partita() {
    //---------------------------------------------------------------------------------------------//
    var velocita = Math.floor(Math.random() * 1000);
    return velocita;
    //---------------------------------------------------------------------------------------------//
};


//#693

/* ########## FUNZIONE : CREA PARTITA ##########*/
//---------------------------------------------------------------------------------------------//
function creaPartita() {

    //#SPIEGAZIONE
    //---------------------------------------------------------------------------------------------//
    /*
        FINALITÀ:
        1) AVERE UNA PARTITA COME SINGOLO DATO
        2) DEFINIRLA
        3) RESTITUIRE LA VARIABILE CHE ORA SARÀ CHIAMATA COME PARTITA CHE CONTERRÀ APPUNTO TUTTI I DETTAGLI DELLA GARA
    */
    //---------------------------------------------------------------------------------------------//

    //# Creo una Array per le partite(POSSONO ESSERE TANTE)
    //---------------------------------------------------------------------------------------------//
    var partita = new Array();
    //---------------------------------------------------------------------------------------------//
    //# Creo una nuova gara
    //---------------------------------------------------------------------------------------------//
    partita[0] = new gara("corsadei1500", "partecipanti();", 1500, false, "classifica();");
    //---------------------------------------------------------------------------------------------//


    //# Restituisco la partita creata
    //---------------------------------------------------------------------------------------------//
    return partita[0];
    //---------------------------------------------------------------------------------------------//
};

//#22
/* ########## METODO : INIZIALIZZA(ANIMALE) ##########*/
//---------------------------------------------------------------------------------------------//
function inizializza(posx1, posy1, posx2, posy2) {

    //---------------------------------------------------------------------------------------------//
    //#POSIZIONE PREDEFINITA DI DEFAULT
    //---------------------------------------------------------------------------------------------//

    //---------------------------------------------------------------------------------------------//
    //# ANIMALE_LEFT = POSX1
    //---------------------------------------------------------------------------------------------//
    this.elemento.style.left = posx1;
    //---------------------------------------------------------------------------------------------//
    //# ANIMALE_TOP = POSY2
    //---------------------------------------------------------------------------------------------//
    this.elemento.style.top = posy1;
    //---------------------------------------------------------------------------------------------//
    //# ANIMALE_BOTTOM = POSY2
    //---------------------------------------------------------------------------------------------//
    this.elemento.style.bottom = posy2;
    //---------------------------------------------------------------------------------------------//
    //# ANIMALE_RIGHT = POSX2
    //---------------------------------------------------------------------------------------------//
    this.elemento.style.right = posx2;
    //---------------------------------------------------------------------------------------------//
};

//#753
/* ########## METODO : POSIZIONE(ANIMALE) ##########*/
function posizione(i) {

    //#SPIEGAZIONE
    //---------------------------------------------------------------------------------------------//
    /*
        FINALITÀ:
        1) IL MOTORE INTERNO DI CIASCUN ANIMALE  
        2) MEMORIZZARE TUTTI I DATI  CON  #REGISTRO, #REG_M, #MEM_POS
        3) RESTITUIRLI   
    */
    //---------------------------------------------------------------------------------------------//

    /* ########## COSTRUTTORE REGISTRO ##########*/
    //---------------------------------------------------------------------------------------------//
    function registro(velocita_BASE, accellera) {

        //#SPIEGAZIONE
        //---------------------------------------------------------------------------------------------//
        /*
            FINALITÀ:
            1) IMMAGAZZINARE DATI SULLA VELOCITÀ BASE DELL'ANIMALE E LA VELOCITÀ RANDOM ASSOCIATA
         */
        //---------------------------------------------------------------------------------------------//

        //#DATI
        //---------------------------------------------------------------------------------------------//
        this.velocita_BASE = velocita_BASE;
        //---------------------------------------------------------------------------------------------//
        this.accellera = accellera;

    };
    //# METTO IN MEMORIA IL REGISTRO DELLO SPOSTAMENTO DELL'ELEMENTO (DURANTE LA GARA CI SARANNO PIÙ SPOSTAMENTI)
    //---------------------------------------------------------------------------------------------//
    reg_m[i] = new registro(this.speed, Math.floor(Math.random() * 50));
    //---------------------------------------------------------------------------------------------//


    /* ########## MOTORE DEL GIOCO ##########*/
    //---------------------------------------------------------------------------------------------//

    //---------------------------------------------------------------------------------------------//
    //* QUESTA PARTE È IL FULCRO DEL MOVIMENTO DEL GIOCO
    //---------------------------------------------------------------------------------------------//


    //#PARTE 0 : ASSUMERE UN VALORE INIZIALE DI PARTENZA (SOLO LA PRIMA VOLTA )
    //---------------------------------------------------------------------------------------------//
    if (mem_pos[i] == null) {

        // N.B
        /*
            1) #QUESTA CONDIZIONE SI ESEGUIRÀ SOLO LA PRIMA VOLTA, PER CIASCUN ELEMENTO.
        */
        mem_pos[i] = posx1;

        //# ESEGUE IL PRIMO SPOSTAMENTO
        if (reg_m[i].accellera >= mem_pos[i]) {
            //# METTE IN MEMORIA LA SOMMA TRA ACCELLERA(VALORE RANDOM) + VELOCITÀ DI BASE DELL'ANIMALE
            mem_pos[i] = reg_m[i].accellera + reg_m[i].velocita_BASE;
            //# ASSOCIO ALLO STILE , LA POSIZIONE CHE HO OTTENUTO CON LA SOMMA
            this.elemento.style.left = /*mem_pos[i]*/ mem_pos[i] + "px"; //px "pixel"
        }
    }
    //---------------------------------------------------------------------------------------------//



    //#PARTE 1 : CONFRONTO IL VALORE REGISTRATO CON LA POSIZIONE ATTUALE (ESEGUIRÀ SEMPRE QUESTA PARTE FINO ALLA FINE)
    //---------------------------------------------------------------------------------------------//
    else if (reg_m[i].accellera <= mem_pos[i]) {
        //#VEDI PARTE 0
        mem_pos[i] = mem_pos[i] + reg_m[i].accellera;
        //#VEDI PARTE 0
        this.elemento.style.left = mem_pos[i] + "px";

    }
    //---------------------------------------------------------------------------------------------//


    //#PARTE 2 : ARRIVATO AD UN VALORE INTORNO A 1500, SI FERMANO I GIOCATORI
    //---------------------------------------------------------------------------------------------//
    if (mem_pos[i] >= 1400 && mem_pos[i] == 1500) {
        clearInterval();
    }
    //---------------------------------------------------------------------------------------------//
    //PARTE 3 : RESTITUISCO LA POSIZIONE SOMMATA  
    //---------------------------------------------------------------------------------------------//
    return mem_pos[i];
    //---------------------------------------------------------------------------------------------//

};

/* ########## IL GIOCO ##########*/
//---------------------------------------------------------------------------------------------//
export function start() {

    //#SPIEGAZIONE
    //---------------------------------------------------------------------------------------------//
    /*
        FUNZIONAMENTO :
        1) RIPRENDO TUTTI I DATI CHE MI SERVONO
        2) DEFINISCO IL TEMPO, L'INTERVALLO 
        3) SFRUTTO UNA FUNZIONE DI PONTE CON DENTRO LE POSIZIONI
        4) FACCIO MUOVERE I MIEI ELEMENTI FINCHÉ NON VIENE RAGGIUNTO IL VALORE DATO COME OBIETTIVO
        5) A FINE GARA STAMPO I DATI DELLA CLASSIFICA
    */
    //---------------------------------------------------------------------------------------------//

    //---------------------------------------------------------------------------------------------//
    //# SESSIONE = PARTITA CORRENTE
    //---------------------------------------------------------------------------------------------//
    var sessione_partita = creaPartita();
    //---------------------------------------------------------------------------------------------//
    //  ADD  NOME_PARTITA(OPZIONALE)
    //---------------------------------------------------------------------------------------------//
    sessione_partita.nomepartita = prompt("Dai un nome alla partita");
    //---------------------------------------------------------------------------------------------//
    //  VARIABILE CHE MEMORIZZERÀ IL NOME DELLA PARTITA
    //---------------------------------------------------------------------------------------------//
    var stanza = document.getElementById("nomepartita");
    //---------------------------------------------------------------------------------------------//
    //  STAMPA IL NOME DELLA PARTITA NELL'ELEMENTO HTML ASSOCIATO
    //---------------------------------------------------------------------------------------------//
    stanza.innerHTML = "ROOM NAME : " + sessione_partita.nomepartita;
    //---------------------------------------------------------------------------------------------//
    //  SESSIONE DELLA GARA È ATTIVA ORA
    //---------------------------------------------------------------------------------------------//
    sessione_partita.sessione_gara = true;
    //---------------------------------------------------------------------------------------------//


    /* ########## TEMPO DI GIOCO ##########*/
    //---------------------------------------------------------------------------------------------//
    var tempoDigioco;
    //---------------------------------------------------------------------------------------------//
    /* ########## TEMPO IN SECONDI ##########*/
    //---------------------------------------------------------------------------------------------//
    var t_partita = sessione_partita.tempo_partita();
    //---------------------------------------------------------------------------------------------//
  
    /* ########## PROCEDURA setInterval ##########*/
    //---------------------------------------------------------------------------------------------//
    tempoDigioco = setInterval(function () {
        ponte(tempoDigioco, sessione_partita);
    }, t_partita);
    //---------------------------------------------------------------------------------------------//

    // GIOCATORE 1 È FUORI DALL'INTERVALLO, PERCHÈ L'INTERVALLO SIAMO NOI

    //ASSOCIO AL DOCUMENTO L'EVENTO ONKEYDOWN CHE PRENDERÀ LA FUNZIONE DEL TASTO ASSOCIATO
    

    //E TRAMITE LA VARIABILE GIOCATORE1 MI PIGLIO IL RISULTATO E TUTTO RIMANE INVARIATO COME PRIMA
    // E FUNZIONA  P.S IL PERSONAGGIO NON SI FERMA PER IL MOMENTO.

    /* GIOCATORE 1 PLAYER VS BOT */
    giocatore1 = tasto_d;


//---------------------------------------------------------------------------------------------//



/* ########## FUNZIONE MOTORE : PONTE ##########*/
//---------------------------------------------------------------------------------------------//
function ponte(tempoDigioco, sessione_partita) {
 

    //# VARIABILE CHE ESAMINA L'ARRAY DEI PARTECIPANTI
    //---------------------------------------------------------------------------------------------//
    var check_player = sessione_partita.partecipanti;
    //---------------------------------------------------------------------------------------------//
<<<<<<< master




=======




>>>>>>> Update
    //# FINCHÈ NON RAGGIUNGONO 1500 CONTINUI A DARE UNA POSIZIONE

    /* ########## MOTORE DI MOVIMENTO ##########*/


    //---------------------------------------------------------------------------------------------//
    if ((giocatore2 != 1500) || (giocatore3 != 1500)) {
        //---------------------------------------------------------------------------------------------//

        //# I GIOCATORI HANNO TUTTI UNA POSIZIONE E UN INDICE

        //---------------------------------------------------------------------------------------------//
        /*
            LA POSIZIONE = VEDI IL METODO POSIZIONE 
            INDICE = SERVE A DIFFERENZIARE LE POSIZIONI, IN MODO CHE QUESTE NON VENGANO CONSIDERATE COME UN UNICO SPOSTAMENTO, BENSÌ 
            OGGETTI DIVERSI CHE SI MUOVONO.
        */
        //---------------------------------------------------------------------------------------------//


        /* ########## COMANDI ##########*/
        //---------------------------------------------------------------------------------------------//


        //## ANIMALE 1 ##
        //---------------------------------------------------------------------------------------------//
        //giocatore1 = pol1.posizione(0);
        //---------------------------------------------------------------------------------------------//
        //## ANIMALE 2 ##
        giocatore2 = joy(pol2.posizione(1));
        //---------------------------------------------------------------------------------------------// 
        //## ANIMALE 3 ##
        //---------------------------------------------------------------------------------------------//
        giocatore3 = joy(pol3.posizione(2));


    }
    /* ########## CONTROLLO OBIETTIVO ##########*/
    //---------------------------------------------------------------------------------------------//
    if ((giocatore1 >= 1500) || (giocatore2 >= 1500) || (giocatore3 >= 1500)) {
        //---------------------------------------------------------------------------------------------//


        //#PONE TERMINE ALLA GARA
        //---------------------------------------------------------------------------------------------//
        clearInterval(tempoDigioco);
        //---------------------------------------------------------------------------------------------//
        //#DICE SEMPLICEMENTE CHE NON È PIÙ ATTIVA LA GARA
        //---------------------------------------------------------------------------------------------//
        sessione_partita.sessione_gara = false;
        //---------------------------------------------------------------------------------------------//
        //#ESEGUO IL METODO CLASSIFICA
        //---------------------------------------------------------------------------------------------//
        joy(classifica(giocatore1, giocatore2, giocatore3));
        alert(joy_comment(programmer));
        //---------------------------------------------------------------------------------------------//

        /* ########## CHECK VINCITORE ##########*/
    };



    /* ########## METODO :  CLASSIFICA(GARA) ##########*/
    //---------------------------------------------------------------------------------------------//
    function classifica(giocatore1, giocatore2, giocatore3) {
        //---------------------------------------------------------------------------------------------//
        //FUNZIONAMENTO

        /*
            OBIETTIVO :  PRENDERE INFORMAZIONI DEI RISULTATI DEI GIOCATORI
            1) CONFRONTARLI
            2) STABILIRE IL VINCITORE
            3) STAMPARE IL RISULTATO COMPLESSIVO DELLA CLASSIFICA

        */


        //#ARRAY DELLA CLASSIFICA
        //---------------------------------------------------------------------------------------------//
        var classifica_gara = new Array(3);
        //#ELEMENTO HTML DELLA CLASSIFICA
        //---------------------------------------------------------------------------------------------//
        var x = document.getElementById("classifica");

        //#CONFRONTO GIOCATORE 1
        //---------------------------------------------------------------------------------------------//
        if ((giocatore1 > giocatore2) && (giocatore1 > giocatore3)) {
            classifica_gara[0] = pol1.player + "| posizione : " + String(giocatore1) + "px";
        } else if ((giocatore2 > giocatore1) && (giocatore2 > giocatore3)) {
            classifica_gara[0] = pol2.player + "| posizione : " + String(giocatore2) + "px";
        } else if ((giocatore3 > giocatore1) && (giocatore3 > giocatore2)) {
            classifica_gara[0] = pol3.player + "| posizione : " + String(giocatore3) + "px";
        };

        //#CONFRONTO GIOCATORE 2
        //---------------------------------------------------------------------------------------------//
        // A DIFFERENZA DEL PRIMO E IL SECONDO , COLORO CHE STANNO IN MEZZO(HANNO PIù VARIANTI)
        // IN FUTURO QUESTO POTREBBE ESSERE IL MODO PER VALUTARE MEGLIO LE VARIANTI POSSIBILI
        if ((giocatore2 < giocatore1) && (giocatore2 > giocatore3)) {
            classifica_gara[1] = pol2.player + "| posizione : " + String(giocatore2) + "px";
        } else if ((giocatore2 < giocatore3) && (giocatore2 > giocatore1)) {
            classifica_gara[1] = pol2.player + "| posizione : " + String(giocatore1) + "px";
        } else if ((giocatore1 < giocatore2) && (giocatore1 > giocatore3)) {
            classifica_gara[1] = pol1.player + "| posizione : " + String(giocatore3) + "px";
        } else if ((giocatore1 < giocatore3) && (giocatore1 > giocatore2)) {
            classifica_gara[1] = pol1.player + "| posizione : " + String(giocatore1) + "px";
        } else if ((giocatore3 < giocatore2) && (giocatore3 > giocatore1)) {
            classifica_gara[1] = pol3.player + "| posizione : " + String(giocatore3) + "px";
        } else if ((giocatore3 < giocatore1) && (giocatore3 > giocatore2)) {
            classifica_gara[1] = pol3.player + "| posizione : " + String(giocatore1) + "px";
        };
        //---------------------------------------------------------------------------------------------//

        //#CONFRONTO GIOCATORE 3
        if ((giocatore3 < giocatore1) && (giocatore3 < giocatore2)) {
            classifica_gara[2] = pol3.player + "| posizione : " + String(giocatore3) + "px";
        } else if ((giocatore2 < giocatore1) && (giocatore2 < giocatore3)) {
            classifica_gara[2] = pol2.player + "| posizione : " + String(giocatore2) + "px";
        } else if ((giocatore1 < giocatore3) && (giocatore1 < giocatore2)) {
            classifica_gara[2] = pol1.player + "| posizione : " + String(giocatore1) + "px";
        };

        //---------------------------------------------------------------------------------------------//
        if (giocatore1 >= 1500) {
            sessione_partita.vincitore = check_player[0];
            if (check_player[0] != "bot") {
                alert("COMPLIMENTI HAI VINTO TU!!!");
            }

        } else if (giocatore2 >= 1500) {
            sessione_partita.vincitore = check_player[1];
            if (check_player[1] != "bot") {
                alert("COMPLIMENTI HAI VINTO TU!!!");

            }
        } else if (giocatore3 >= 1500) {
            sessione_partita.vincitore = check_player[2];
            if (check_player[2] != "bot") {
                alert("COMPLIMENTI HAI VINTO TU!!!");
            }

        }
        //---------------------------------------------------------------------------------------------//
        //#RITORNA LA CLASSIFICA SULLA PAGINA HTML COSI COME SCRITTA
        //---------------------------------------------------------------------------------------------//
        return x.innerHTML = "<h2>Classifica</h2><br><p id='posto1'>PRIMO POSTO : " + classifica_gara[0] + "</p>" + "<br><p id='posto2'>SECONDO POSTO : " + classifica_gara[1] + "</p>" + "<br><p id='posto3'>TERZO POSTO : " + classifica_gara[2] + "</p>" + "<br><p>Il VINCITORE E' : " + classifica_gara[0] + "!!!!!</p>";
        //---------------------------------------------------------------------------------------------//

    };
    //---------------------------------------------------------------------------------------------//

};

};

/* CON L'IMMAGINE NON RIUSCIVO AD ASSOCCIARE MENTRE ATTRAVERSO IL DIV SONO
RIUSCITO IN QUALCHE MODO AD AVERE L'EVENTO
P.S CONSIDERERÒ L'IDEA DI USARE I DIV PER GLI EVENT ON KEY */


// PRENDE IL PRIMO DIV CON LA CLASSE POLLO
var key_p1 = document.getElementsByClassName("pollo")[0];



//---------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------//
 function tasto_D(e) {
 
        //alert("succedequalcosa");
    //ASSOCIO IL TASTO "D" DELLA TASTIERA ALL'EVENTO KEYDOWN

    //TEST A VIDEO DEL VALORE UNICODE DEL TASTO "D"
    // document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;

//----------------------------------------IMPORTANTE-----------------------------------------------------//

    //QUESTO E.KEYCODE PERMETTE DI RICONOSCERE IL TASTO "D" ASSOCCIATO"
    if(e.keyCode == 68 && giocatore1 != 1500){
     
        giocatore1 = pol1.posizione(0);
      
       
     
    }


    //RITORNA IL GIOCATORE Nulla di particolarmente invariato
    return giocatore1;

};
//---------------------------------------------------------------------------------------------//


/* ########## CHIAMATE ##########*/
//---------------------------------------------------------------------------------------------//
/* ## ELEMENTARE : CREAZIONE PRINCIPALE ##  */
//---------------------------------------------------------------------------------------------//
//creazione();
//---------------------------------------------------------------------------------------------//
/* ## RICOMINCIA : NUOVA PARTITA ## */
//---------------------------------------------------------------------------------------------//
export function ricarica() {
    location.reload();
};
//---------------------------------------------------------------------------------------------//
/* ## POST PARTENZA : POSIZIONE GIOCATORI ## */
//---------------------------------------------------------------------------------------------//
joy(pol1.inizializza(0, 0, 0, 0));
joy(pol2.inizializza(0, 100, 0, 0));
joy(pol3.inizializza(0, 200, 0, 0));
//---------------------------------------------------------------------------------------------//
///NOTA 0.4  L'INIZIALIZZAZIONE PARTIRÀ DOPO LA SELEZIONE DEI PERSONAGGI 
//---------------------------------------------------------------------------------------------//
//ADD
/*
    {
        if select this characters from id player1 
        then  this.inizializza(0,0,0,0)
        inside game_player[i]    <----  in this case  i = 0 , so player1 will be  exmample  pol1: or the object selected
    }
*/
//---------------------------------------------------------------------------------------------//

//ADD DOM PAGINA

//IL MOTIVO PER CUI SONO STATI INSERITI È PERCHÉ MOMENTANEAMENTE IL FILE JS È UN MODULO