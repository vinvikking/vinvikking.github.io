window.addEventListener('load', init);

 // opdracht 1 
function init(){
     const submitButton = document.getElementById('submit-btn');
     var i = 0;
     
     submitButton.addEventListener('click', function(){run(i++)});
}



function run(i){


    const j = document.getElementById("result");
    const list = document.createElement("p");
    list.innerText = i;

    if(i > 10 | i > 20){
        document.getElementById('submit-btn').style.width = "30px";
        document.getElementById('submit-btn').style.height = "10px";
    } else if (i > 20){
        document.getElementById('submit-btn').style.width = "10px";
        document.getElementById('submit-btn').style.height = "5px";
    } 

    j.appendChild(list);
    
}


// Opdracht 2

const button = document.getElementById("add");
button.addEventListener("click", add)



function add(event){
    event.preventDefault();

    const inputText = document.getElementById('name').value;

    const text = document.getElementById('producten');
    const li = document.createElement('td');

    li.innerText = inputText;
    
    const inputPrice = document.getElementById('price').value;
    console.log(inputPrice)
    const tekst = document.getElementById('prijs');
    const p = document.createElement('td');

    p.innerText = inputPrice;

    if(inputPrice !== '' && inputText !== ''){
        
        text.appendChild(li);
        tekst.appendChild(p);
        
    }
    else{
        alert("vul de velden in");
    }

}




 

// addeventlistener

    ///function ClickeventHandles(event){   
         //   event.preventDefault(); 

           // const inputText = document.getElementById('textinput').value;
          //console.log(inputText);
        
       
  //  }




































   // function test(inputText){

       // const placeinDom = document.getElementById('result');
      
     //   const li = document.createElement('li')
     //   li.innerText = inputText;
  
     //  placeinDom.appendChild(li);

   // }



    

