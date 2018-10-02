IsEvenOdd(10);
// Opdracht 1
function IsEvenOdd (Number){
  
  var i = 2;
    if (Number % i == 0) {
      console.log("Your Number " + Number + " is even ");
    } else {
      console.log("Your Number " + Number + " is Odd ");
    }
}

// Opdracht 2 

stringDelete("Programming is not so cool");

function stringDelete(program){

var test = program.includes("not");

if(test == true){
  var program = "Programming is so cool";
  console.log(program);
  } else {
    console.log(program);
  }
}

// Opdracht 3

//3.	Vergelijk de waarden ‘1400’ met de string ‘Ik woon in Naboo’. Programmeer deze opdracht en geef aan (met commentaar in je code) waarom dit niet een slimme vraag is. 



opdracht3(1400, "Ik woon in Naboo")
// Het zijn 2 verschillende Data Types, interger (bevat hele getallen), string (bevat getallen / letters)
function opdracht3(int1, string1){
  
  if(int1 == string1){
    console.log(true);
  } else {
    console.log(false);
  }
 // Een mogelijke oplossing zou kunnen zijn, het converteren van de interger naar een string. Hierbij bevat de variable wel de numer 1400, maar ziet hier geen waarde meer in.
}

// Les 2 Opdracht 1

// 1.	Maak een if-else statement die checkt of iemand een onvoldoende/voldoende/goed/uitmuntend voor het vak programming basics heeft behaald.  (onvoldoende:  kleiner dan 6; voldoende: tussen 6 en 7; goed: tussen 7 en 9; uitmuntend: groter dan 9).




Cijfer(4);


function Cijfer(num){

    if(num <= 5.9){
        console.log("Cijfer is een onvoldoende");
    } else if (num >= 6 | num <= 7){
        console.log("Dit is een voldoende");
    } else if (num >= 7 | num <= 9){
        console.log("Dit is een goed");
    } else if (num >= 9) {
        console.log("Dit is uitmundend!");
    } else if (num > 10 ){
        console.log("Input error");
    }
}

if (!Cijfer.length == 4){    

    console.log("test");
}
// Opdracht 2

var cijfer = 6;

    
    switch (cijfer) {
        case 1 : {

            console.log("Onvoldoende");
            break;
        } 
        case 2 : {

            console.log("Onvoldoende");
            break;
        }
        case 3 : {

            console.log("Onvoldoende");
            break;
        }
        case 4 : {

            console.log("Onvoldoende");
            break;
        }
        case 5 : {

            console.log("Onvoldoende");
            break;
        }
        case 6 : {

            console.log("Voldoende");
            break;
        }
        case 7 : {

            console.log("Goed");
            break;
        }
        case 8 : {

            console.log("Goed");
            break;
        }
        case 9 : {

            console.log("Uitmundend");
            break;
        }
        case 10 : {

            console.log("Uitmuntend");
            break;
        }       
        default:
            break;
    }

    // Opdracht 3 
    readBook();

    function readBook(){
        purchasedBook = true;
        job = "teacher";
        inTrain = false;

        if(job == "teacher" && purchasedBook == true){

            console.log("finally i can enjoy my book mate");
        } else if (job == "teacher" && inTrain == true){
            console.log("I can read my book")
        } else {
            console.log("It's to busy inside the train so, i can read my book!");
        }
       
    }
    