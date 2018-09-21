/*  PolloParkRacing 0.4 >>> Animal Racing 0.4 */

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
        not completely competitive. Will get time to create a funny free game. I hopeobject kind
        of project will inspire you.  Enjoy!

*/








/* MODE STRICT */

"use strict";



/* VARIABILI */
//-------------------------------------------------

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
var p; // ARRAY PER DIFFERENZIARE I GIOCATORI DAI BOT

//---------------------------------------------------------------------------------------------//

/* ########## COMANDI ##########*/
//---------------------------------------------------------------------------------------------//
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

//# ELEMENTI HTML
//---------------------------------------------------------------------------------------------//


//# CAMPO DI GIOCO
//---------------------------------------------------------------------------------------------//
var recinto = document.getElementById("recinto");
//---------------------------------------------------------------------------------------------//

//# ELEMENTI HTML DIV  ANIMALE1,ANIMALE2,ANIMALE3
//---------------------------------------------------------------------------------------------//
var animalebox1 = document.createElement("div");
var animalebox2 = document.createElement("div");
var animalebox3 = document.createElement("div");
//---------------------------------------------------------------------------------------------//



/* ########## COSTRUTTORE ANIMALE : POLLO  ##########*/
//---------------------------------------------------------------------------------------------//
function Animale(default_NOME, nome, peso, altezza, speed, player) {

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

    //# IDENTITÀ
    this.player = player;
    //---------------------------------------------------------------------------------------------//    

};






//SELEZIONE
//-------------------------------------------------

function Selezione() {
    //# ELEMENTI HTML SELECT ANIMALE1,ANIMALE2,ANIMALE3
    var Barra_selezione_player1;
    var Barra_selezione_player2;
    var Barra_selezione_player3;

    /* VARIABILI DI SELEZIONE */
    Barra_selezione_player1 = document.getElementById('player01');
    Barra_selezione_player2 = document.getElementById('player02');
    Barra_selezione_player3 = document.getElementById('player03');

    /* ARRAY DI SELEZIONE */
    p = new Array(
        sel_pl1(Barra_selezione_player1), // RESTITUISCE ELEMENTO SELEZIONATO
        sel_pl2(Barra_selezione_player2), // RESTITUISCE ELEMENTO SELEZIONATO
        sel_pl3(Barra_selezione_player3), // RESTITUISCE ELEMENTO SELEZIONATO
    )


    /* FUNZIONI DI SELEZIONE GIOCATORI */
    var indice = 0;

    // ARRAY DEI PARTECIPANTI
    var players = new Array();

    for (indice in p) {
        //DISTINGUE I GIOCATORI DAI BOT
        var isBot = (p[indice].player == 'BOT') ? game_BOT[indice] : game_PLAYER[indice];
        //METTI IL TIPO DI GIOCATORE INSERITO NELL'ARRAY PARTECIPANTI
        players[indice] = (p[indice].player != 'BOT') ? p[indice].nome : p[indice].player;
    }






    //TEST PARTECIPANTI SELEZIONATI

    var Label_Partecipanti = document.getElementById("partecipanti");
    Label_Partecipanti.innerHTML = " Giocatori : " + players[0] + " || " + players[1] + " || " + players[2] + " || ";
    return players.valueOf();

}

//CREAZIONE
//-------------------------------------------------


function Creazione() {

    //NOME_STANZA
    var nome_stanza = window.document.getElementById("nome_stanza").value;
    alert(nome_stanza);
    //ISTANZA
    alert("SELEZIONA I GIOCATORI")
    var giocatori_partecipanti = Selezione();
    alert("ECCO I PARTECIPANTI : " + giocatori_partecipanti);


    //STARTA LA GARA
    Start();

}
//GARA 0.4
function Gara(Nome_Gara, giocatori_partecipanti, obiettivo, sessione_gara, classifica, tempo_partita) {
    this.Nome_Gara = Nome_Gara;
    this.partecipanti = giocatori_partecipanti;
    this.obiettivo = obiettivo;
    this.sessione_gara = sessione_gara;
    this.classifica = classifica;
    this.tempo_partita = tempo_partita;


    /* ########## METODO : TEMPO_PARTITA(GARA) ##########*/
    //---------------------------------------------------------------------------------------------//
    function tempo_partita() {
        //---------------------------------------------------------------------------------------------//
        var velocita = Math.floor(Math.random() * 1000);
        return velocita;
        //---------------------------------------------------------------------------------------------//
    };



}


function creaPartita(i) {
    var partita = new Array();
    partita[i] = new Gara("Corsa_1500px", "Selezione();", 1500, false, "classifica();");
    return partita[i];
}


//START 0.4

function Start() {

    var sessione_partita = creaPartita(i);
    sessione_partita.nomepartita = prompt("Dai un nome alla partita");
    var stanza = document.getElementById("nomepartita");
    stanza.innerHTML = "ROOM NAME : " + sessione_partita.nomepartita;
    sessione_partita.sessione_gara = true;

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


    // MODALITÀ MANUALE 
    giocatore1 = tasto_D1;
    giocatore2 = tasto_D2;
    giocatore3 = tasto_D3;

    //---------------------------------------------------------------------------------------------//



    /* ########## FUNZIONE MOTORE : PONTE ##########*/
    //---------------------------------------------------------------------------------------------//
    function ponte(tempoDigioco, sessione_partita) {


        //# VARIABILE CHE ESAMINA L'ARRAY DEI PARTECIPANTI
        //---------------------------------------------------------------------------------------------//
        var check_player = sessione_partita.partecipanti;
        //---------------------------------------------------------------------------------------------//




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
  
            if (p[0].player == "BOT") {
                giocatore1 = p[0].posizione(0);
            }
            //---------------------------------------------------------------------------------------------//
            //## ANIMALE 2 ##

            if (p[1].player == "BOT") {
                giocatore2 = p[1].posizione(1);
            }
        
            //---------------------------------------------------------------------------------------------// 
            //## ANIMALE 3 ##
            //---------------------------------------------------------------------------------------------//
            if (p[2].player == "BOT") {
                giocatore3 = p[2].posizione(2);
            }
        
        



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
                classifica(giocatore1, giocatore2, giocatore3);

                //---------------------------------------------------------------------------------------------//

                /* ########## CHECK VINCITORE ##########*/
            };


        }





        function classifica(giocatore1, giocatore2, giocatore3) {

            var classifica_gara = new Array(3);
            var x = document.getElementById("classifica");

            //#CONFRONTO GIOCATORE 1
            //---------------------------------------------------------------------------------------------//
            if ((giocatore1 > giocatore2) && (giocatore1 > giocatore3)) {
                classifica_gara[0] = p[0].player + "| posizione : " + String(giocatore1) + "px";
            } else if ((giocatore2 > giocatore1) && (giocatore2 > giocatore3)) {
                classifica_gara[0] = p[1].player + "| posizione : " + String(giocatore2) + "px";
            } else if ((giocatore3 > giocatore1) && (giocatore3 > giocatore2)) {
                classifica_gara[0] = p[2].player + "| posizione : " + String(giocatore3) + "px";
            };

            //#CONFRONTO GIOCATORE 2
            //---------------------------------------------------------------------------------------------//
            if ((giocatore2 < giocatore1) && (giocatore2 > giocatore3)) {
                classifica_gara[1] = p[1].player + "| posizione : " + String(giocatore2) + "px";
            } else if ((giocatore2 < giocatore3) && (giocatore2 > giocatore1)) {
                classifica_gara[1] = p[1].player + "| posizione : " + String(giocatore2) + "px";
            } else if ((giocatore1 < giocatore2) && (giocatore1 > giocatore3)) {
                classifica_gara[1] = p[0].player + "| posizione : " + String(giocatore1) + "px";
            } else if ((giocatore1 < giocatore3) && (giocatore1 > giocatore2)) {
                classifica_gara[1] = p[0].player + "| posizione : " + String(giocatore1) + "px";
            } else if ((giocatore3 < giocatore2) && (giocatore3 > giocatore1)) {
                classifica_gara[1] = p[2].player + "| posizione : " + String(giocatore3) + "px";
            } else if ((giocatore3 < giocatore1) && (giocatore3 > giocatore2)) {
                classifica_gara[1] = p[2].player + "| posizione : " + String(giocatore3) + "px";
            };

            //#CONFRONTO GIOCATORE 3
            //---------------------------------------------------------------------------------------------//
            if ((giocatore3 < giocatore1) && (giocatore3 < giocatore2)) {
                classifica_gara[2] = p[2].player + "| posizione : " + String(giocatore3) + "px";
            } else if ((giocatore2 < giocatore1) && (giocatore2 < giocatore3)) {
                classifica_gara[2] = p[1].player + "| posizione : " + String(giocatore2) + "px";
            } else if ((giocatore1 < giocatore3) && (giocatore1 < giocatore2)) {
                classifica_gara[2] = p[0].player + "| posizione : " + String(giocatore1) + "px";
            };

            //#CHECK PLAYER
            if (giocatore1 >= 1500) {
                sessione_partita.vincitore = check_player[0];
                if (check_player[0] != "BOT") {
                    alert("COMPLIMENTI HAI VINTO TU!!!");
                }
                else{
                    console.log("HA VINTO IL BOT1 ")
                }

            } else if (giocatore2 >= 1500) {
                sessione_partita.vincitore = check_player[1];
                if (check_player[1] != "BOT") {
                    alert("COMPLIMENTI HAI VINTO TU!!!");
                 }
                 else{
                    console.log("HA VINTO IL BOT2 ")
                }
            } else if (giocatore3 >= 1500) {
                sessione_partita.vincitore = check_player[2];
                if (check_player[2] != "BOT") {
                    alert("COMPLIMENTI HAI VINTO TU!!!");
                }
                else{
                    console.log("HA VINTO IL BOT3 ")
                }

            }
            //---------------------------------------------------------------------------------------------//
            //#RITORNA LA CLASSIFICA SULLA PAGINA HTML COSI COME SCRITTA
            //---------------------------------------------------------------------------------------------//
            return x.innerHTML = "<h2>Classifica</h2><br><p id='posto1'>PRIMO POSTO : " + classifica_gara[0] + "</p>" + "<br><p id='posto2'>SECONDO POSTO : " + classifica_gara[1] + "</p>" + "<br><p id='posto3'>TERZO POSTO : " + classifica_gara[2] + "</p>" + "<br><p>Il VINCITORE E' : " + classifica_gara[0] + "!!!!!</p>";
            //---------------------------------------------------------------------------------------------//

        };

    }
}



// PRENDE IL PRIMO DIV CON LA CLASSE POLLO
var KEY_D = document.getElementsByClassName("pollo")[0];
var KEY_D2 = document.getElementsByClassName("pollo")[1];


//---------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------//
function tasto_D1(e) {if (e.keyCode == 68 && giocatore1 != 1500) {giocatore1 = p[0].posizione(0);}
    return giocatore1;};
function tasto_D2(e) {if (e.keyCode == 68 && giocatore1 != 1500) {giocatore2 = p[1].posizione(1);}
    return giocatore2;};
/*function tasto_D3(e) {if (e.keyCode == 68 && giocatore1 != 1500) {giocatore3 = p[2].posizione(2);}
    return giocatore3;};
*/

    //ADD SECONDO GIOCATORE
function tasto_D3(e) {if (e.keyCode == 39 && giocatore1 != 1500) {giocatore3 = p[2].posizione(2);}
    return giocatore3;};
//---------------------------------------------------------------------------------------------//


/* ########## CHIAMATE ##########*/
//---------------------------------------------------------------------------------------------//
/* ## ELEMENTARE : CREAZIONE PRINCIPALE ##  */
//---------------------------------------------------------------------------------------------//
//creazione();
//---------------------------------------------------------------------------------------------//
/* ## RICOMINCIA : NUOVA PARTITA ## */
//---------------------------------------------------------------------------------------------//
function ricarica() {
    location.reload();
};
//---------------------------------------------------------------------------------------------//
/* ## POST PARTENZA : POSIZIONE GIOCATORI ## */
//---------------------------------------------------------------------------------------------//

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







//SCELTA_MOD_GIOCO
//-------------------------------------------------




//-------------------------------------------------

//-------------------------------------------------

//-------------------------------------------------

//-------------------------------------------------

//-------------------------------------------------

//-------------------------------------------------









/* SECTION FUNZIONE ANIMALE : INIZIALIZZA */
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














/* SECTION FUNZIONE ANIMALE : POSIZIONE */
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











/* SECTION  FUNZIONI SELECT  */


function sel_pl1(el) {

    switch (el.value) {

        case 'p1':
            var Animale_Pollo1 = new Animale("Cassandro", "Cassandro", 160, 122, 50, "player");
            generate_Animale1_HTML(Animale_Pollo1);
            Animale_Pollo1.inizializza(0, 0, 0, 0);
            giocatore1 = Animale_Pollo1;
            // SE SCELTO IL P1 POSSO MUOVERLO CON LA CHIAVE
            document.addEventListener("keydown",tasto_D1,false);
            break;
        case 'p2':
            var Animale_Pollo2 = new Animale("Mario", "Mario", 123, 50, 70, "player");
            generate_Animale2_HTML(Animale_Pollo1);
            Animale_Pollo2.inizializza(0, 100, 0, 0);
            giocatore1 = Animale_Pollo2;
            document.onkeydown = tasto_D2;
            break;
        case 'p3':
            var Animale_Pollo3 = new Animale("Pino", "Pino", 60, 60, 60, "player");
            generate_Animale3_HTML(Animale_Pollo3);
            Animale_Pollo3.inizializza(0, 200, 0, 0);
            giocatore1 = Animale_Pollo3;
        
            break;

        case 'p0':
            //SARÀ POI SELEZIONE RANDOM DELL'ANIMALE
            var Animale_BOT1 = new Animale("Cassandro", "Cassandro", 160, 122, 50, "BOT");
            generate_BOT1_HTML(Animale_BOT1);
            Animale_BOT1.inizializza(0, 0, 0, 0);
            giocatore1 = Animale_BOT1;
            break;

    }

    return giocatore1;
}


function sel_pl2(el) {

    switch (el.value) {

        case 'p1':
            var Animale_Pollo1 = new Animale("Cassandro", "Cassandro", 160, 122, 50, "player");
            generate_Animale1_HTML(Animale_Pollo1);
            Animale_Pollo1.inizializza(0, 0, 0, 0);
            giocatore2 = Animale_Pollo1;
            document.onkeydown = tasto_D1;
            break;
        case 'p2':
            var Animale_Pollo2 = new Animale("Mario", "Mario", 123, 50, 70, "player");
            generate_Animale2_HTML(Animale_Pollo2);
            Animale_Pollo2.inizializza(0, 100, 0, 0);
            giocatore2 = Animale_Pollo2;
            document.onkeydown = tasto_D2;
            break;
        case 'p3':
            var Animale_Pollo3 = new Animale("Pino", "Pino", 60, 60, 60, "player");
            generate_Animale1_HTML(Animale_Pollo3);
            Animale_Pollo3.inizializza(0, 200, 0, 0);
            giocatore2 = Animale_Pollo3;
            document.onkeydown = tasto_D3;
            break;

        case 'p0':
            //SARÀ POI SELEZIONE RANDOM DELL'ANIMALE
            var Animale_BOT2 = new Animale("Mario", "Mario", 123, 50, 70, "BOT");
            generate_BOT2_HTML(Animale_BOT2);
            Animale_BOT2.inizializza(0, 100, 0, 0);
            giocatore2 = Animale_BOT2;
            break;

    }
    return giocatore2;

}

function sel_pl3(el) {

    switch (el.value) {

        case 'p1':
            var Animale_Pollo1 = new Animale("Cassandro", "Cassandro", 160, 122, 50, "player");
            generate_Animale1_HTML(Animale_Pollo1);
            Animale_Pollo1.inizializza(0, 0, 0, 0);
            giocatore3 = Animale_Pollo1;
            document.onkeydown = tasto_D1;
            break;
        case 'p2':
            var Animale_Pollo2 = new Animale("Mario", "Mario", 123, 50, 70, "player");
            generate_Animale2_HTML(Animale_Pollo2);
            Animale_Pollo2.inizializza(0, 100, 0, 0);
            giocatore3 = Animale_Pollo2;
            document.onkeydown = tasto_D2;
            break;
        case 'p3':
            var Animale_Pollo3 = new Animale("Pino", "Pino", 60, 60, 60, "player");
            generate_Animale3_HTML(Animale_Pollo3);
            Animale_Pollo3.inizializza(0, 200, 0, 0);
            giocatore3 = Animale_Pollo3;
            document.addEventListener("keydown",tasto_D3,false);
            break;

        case 'p0':
            //SARÀ POI SELEZIONE RANDOM DELL'ANIMALE
            var Animale_BOT3 = new Animale("Pino", "Pino", 160, 122, 50, "BOT");
            generate_BOT3_HTML(Animale_BOT3);
            Animale_BOT3.inizializza(0, 200, 0, 0);
            giocatore3 = Animale_BOT3;
            break;

    }
    return giocatore3;
}

/* SECTION  FUNZIONI GENERATE OBJECT HTML  */
function generate_Animale1_HTML(object) {

    object.elemento.src = "./img/pollo.png";
    object.elemento.style.width = "50px";
    object.elemento.style.height = "50px";
    object.elemento.style.position = "absolute";
    object.elemento.setAttribute("value", object.nome);
    object.elemento.id = "player1";

    object.elemento.style.left = posx1;
    object.elemento.style.top = posy1;
    object.elemento.style.bottom = posy2;
    object.elemento.style.right = posx2;

    //APPEND TO  DIV
    animalebox1.className="animale";
    animalebox1.appendChild(object.elemento);
    //APPEND TO  CAMPO
    recinto.appendChild(animalebox1);

}

function generate_Animale2_HTML(object) {

    object.elemento.src = "./img/pollo.png";
    object.elemento.style.width = "50px";
    object.elemento.style.height = "50px";
    object.elemento.style.position = "absolute";
    object.elemento.setAttribute("value", object.nome);
    object.elemento.style.filter = "hue-rotate(200deg)";
    object.elemento.id = "player2";

    object.elemento.style.left = posx1;
    object.elemento.style.top = posy1;
    object.elemento.style.bottom = posy2;
    object.elemento.style.right = posx2;

    //APPEND TO  DIV
    animalebox2.className="animale";
    animalebox2.appendChild(object.elemento);
    //APPEND TO  CAMPO
    recinto.appendChild(animalebox2);

}

function generate_Animale3_HTML(object) {

    object.elemento.src = "./img/pollo.png";
    object.elemento.style.width = "50px";
    object.elemento.style.height = "50px";
    object.elemento.style.position = "absolute";
    object.elemento.setAttribute("value", object.nome);
    object.elemento.style.filter = "hue-rotate(500deg)";
    object.elemento.id = "player3";

    object.elemento.style.left = posx1;
    object.elemento.style.top = posy1;
    object.elemento.style.bottom = posy2;
    object.elemento.style.right = posx2;

    //APPEND TO  DIV
    animalebox3.className="animale";
    animalebox3.appendChild(object.elemento);
    //APPEND TO  CAMPO
    recinto.appendChild(animalebox3);
}


function generate_BOT1_HTML(object) {

    object.elemento.src = "./img/pollo.png";
    object.elemento.style.width = "50px";
    object.elemento.style.height = "50px";
    object.elemento.style.position = "absolute";
    object.elemento.setAttribute("value", object.nome);
    object.elemento.id = "BOT1";

    object.elemento.style.left = posx1;
    object.elemento.style.top = posy1;
    object.elemento.style.bottom = posy2;
    object.elemento.style.right = posx2;

    //APPEND TO  DIV
    animalebox1.className="animale";
    animalebox1.appendChild(object.elemento);
    //APPEND TO  CAMPO
    recinto.appendChild(animalebox1);
}

function generate_BOT2_HTML(object) {

    object.elemento.src = "./img/pollo.png";
    object.elemento.style.width = "50px";
    object.elemento.style.height = "50px";
    object.elemento.style.position = "absolute";
    object.elemento.setAttribute("value", object.nome);
    object.elemento.style.filter = "hue-rotate(200deg)";
    object.elemento.id = "BOT2";

    object.elemento.style.left = posx1;
    object.elemento.style.top = posy1;
    object.elemento.style.bottom = posy2;
    object.elemento.style.right = posx2;

    //APPEND TO  DIV
    animalebox2.className="animale";
    animalebox2.appendChild(object.elemento);
    //APPEND TO  CAMPO
    recinto.appendChild(animalebox2);

}

function generate_BOT3_HTML(object) {

    object.elemento.src = "./img/pollo.png";
    object.elemento.style.width = "50px";
    object.elemento.style.height = "50px";
    object.elemento.style.position = "absolute";
    object.elemento.setAttribute("value", object.nome);
    object.elemento.style.filter = "hue-rotate(500deg)";
    object.elemento.id = "BOT3";

    object.elemento.style.left = posx1;
    object.elemento.style.top = posy1;
    object.elemento.style.bottom = posy2;
    object.elemento.style.right = posx2;
    //APPEND TO  DIV
    animalebox3.className="animale";
    animalebox3.appendChild(object.elemento);
    //APPEND TO  CAMPO
    recinto.appendChild(animalebox3);

}