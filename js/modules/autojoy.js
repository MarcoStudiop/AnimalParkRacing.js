                                    /*##### AUTOJOY 0.1 #####*/
//---------------------------------------------------------------------------------------------//


//##USO
//---------------------------------------------------------------------------------------------//
/*
//---------------------------------------------------------------------------------------------//
    <- JOY 0.1 ->  MARCO SAVIANO 2018

    AUTO-JOY È UNO SCRIPT MOLTO SEMPLICE E CREATO AL SOLO SCOPO DI RENDERE LA TUA FASE DI SVILUPPO PIÙ INTERATTIVA.
    DISPONE DI POCHE FUNZIONI DI PARTENZA E HA MOLTO ANCORA DA AMPLIARE. LO SCOPO DI JOY È DI ASSOCIARE DEI PUNTI
    AI DUE PARTECIPANTI DEL GIOCO. PUNTI POSITIVI A CHI VA AVANTI E, PUNTI NEGATIVI A CHI RESTA INDIETRO. 

    È UNA SFIDA TRA PROGRAMMATORE E PROGRAMMA. AIUTATI SEMPLICEMENTE A MIGLIORARE. MIGLIORA IL TUO SVILUPPO ATTRAVERSO
    JOY.  MIGLIORATI E SI COSTANTE. JOY PREMIA LA COSTANZA E L'IMPEGNO.

    JOY È UN SEMPLICE SCRIPT MOTIVAZIONALE CHE PUOI ANCHE CREARE TU TRANQUILLAMENTE. L'IDEA È LIBERA QUINDI BUON DIVERTIMENTO
    
    ###FUNZIONI###

    function  | joy( PARAM your_function ) | -- SE POSTIVO AGGIUNGE + 1 AL PROGRAMMATORE , NEGATIVO -1
    function  | joy_comment() |  -- GENERA UN COMMENTO IN BASE AL VALORE DI PROGRAMMER
    function | joy_error( PARAM element ) |  -- IN BASE ALL'ELEMENTO DATO COME PARAMETRO - RESTITUISCE VERO SE NON HA NESSUN ERRORE, FALSO SE HA UN VALORE NON DEFINITO

    ###VAR###

    var |life|  <-- ARRAY DELLE VITA DEL PROGRAMMER
    var |program| <-- IL CONTATORE DEL PROGRAMMA
    var |programmer| <-- IL CONTATORE DEL PROGRAMMATORE

    var |comment| <-- COMMENTO

*/
//---------------------------------------------------------------------------------------------//

/* ##### VARIABILI ##### */



//#LIFE
//---------------------------------------------------------------------------------------------//
export var life = new Array("<3","<3","<3");
//---------------------------------------------------------------------------------------------//
//#POINT
//---------------------------------------------------------------------------------------------//
export var programmer = 0; 
export var program = 0;
//---------------------------------------------------------------------------------------------//
//##JOY_COMMENT
//---------------------------------------------------------------------------------------------//
export var commento;
//---------------------------------------------------------------------------------------------//

/* ##### FUNZIONI ##### */



//#JOY()   <--- MAIN
//---------------------------------------------------------------------------------------------//
   export function joy(yourfunction){

       // this.yourfunction = yourfunction;

        if(yourfunction){
            //WIN PROGRAMMER
            programmer++;
            console.log(yourfunction + " programmer point : " + programmer); // mi mostrerà il contenuto
            console.log( " -- FUNZIONE OK! -- " + " - Livello del tuo programma -  :  " + joy_comment(programmer));
        }
        else if (!yourfunction){
            //WIN PROGRAM
            program++;
            programmer--;
            life.pop();
            console.log("program point : " + program + " your life now? " + life + "and programmer point : " + programmer);
        }
    return yourfunction;
    };

//#JOY_ERROR()  <--- CONTROLLA SE LA FUNZIONE È DEFINITA O NO
//---------------------------------------------------------------------------------------------//
export function joy_error(element){
    
        this.element = element;
        
        if(!this.element)
        {
            console.log("Il valore del tuo elemento è : " + this.element);
            console.log("ATTENZIONE! HAI DELLE VARIABILI NON DEFINITE ");
            return  false ;
        }
        else{
            return true;
        }
      
    }
//#JOY_COMMENT() <-- FUNZIONE CHE ASSEGNA UN COMMENTO ALLA POSIZIONE ATTUALE DEL PROGRAMMATORE
//---------------------------------------------------------------------------------------------//
export function joy_comment(programmer){

        //#ASSOCIA IL COMMENTO AL VALORE
        commento = programmer;

        //#CHECK COMMENTO
        switch(true){
   
            case commento > 0 && commento <= 5 : commento = "Newbie"; return commento; break;
            case commento > 6 && commento <= 10: commento = "G for Great"; return commento; break;
            case commento > 11 && commento <= 30 : commento = "GW GOOD WORK";return commento; break;
            case commento > 31 && commento <= 50: commento = "I'm falling in love for your work";return commento; break;
            case commento > 51 && commento <= 89: commento = "Your code is so big";return commento; break;
            case commento > 90 && commento <= 99: commento = "Be a problem solver";return commento; break;
            case commento > 100 && commento <= 110: commento = "You are in another world man, i believe in you";
            case commento > 111 && commento <= 120: commento = "DEATH STAR MOMENT";return commento; break;
            case commento > 121 && commento <= 150: commento = "THE FORCE WILL BE WITH YOU";return commento; break;
            case commento >= 9000: commento = "ITS OVER 9000";return commento; break;

        }

        return commento;
    }
//---------------------------------------------------------------------------------------------//
//TEST

/*function test(){
    var a = 5,b = 8;
    var somma;

     somma = a+b;
    
    return somma;
}*/



/* ##### CHIAMATE ##### */

//#1 TEST

//-----------------------//
/*
joy(test());
joy(joy_error(test()));
*/
//-----------------------//




