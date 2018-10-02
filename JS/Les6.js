
// Les 5 Huiswerk

// Opdracht 1 
// https://zenscript.wordpress.com/2013/11/23/how-to-pick-a-random-entry-out-of-an-array-javascript/

const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 

function lapRound(){
     var randomNumber = lapRounds[Math.floor(Math.random() * lapRounds.length)]
     return randomNumber;
    
    }


console.log(lapRound());


// Opdracht 2


const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];
 
 
 function double(){
    for (i = 0; i < allMyRecords.length; i++){
          newArray = [allMyRecords[i]];
          return newArray;
    }
 }

 function triple(){
 for (i = 0; i < allMyRecords.length; i++) {
    for (var j = 0, len2=allMyRecords[i].length; j < len2; j++) {
        console.log( allMyRecords[i][j] ); 
        }
    }
 }
 
 triple();


 // Opdracht 3 

 // 3.	[Pittig]. Gegeven is de volgende for-loop op basis van de array uit vraag 1.

function filter(){

    var x = lapRounds.filter(function(lapRounds) {
    return lapRounds > 4;   } 

    )};

 
filter();
// Gebruik de .filter functie uit javascript om precies hetzelfde resultaat te behalen als de for-loop. Geef aan waarom de .filter functie fijner/beter werkt.


