window.addEventListener('load', init);

 // opdracht 1 
function init(){
     const submitButton = document.getElementById('submit-btn');
     var i = 0;
     submitButton.addEventListener('click', ClickeventHandles)
     submitButton.addEventListener('click', function(){run(i++)});
}




function ClickeventHandles(event){
    event.preventDefault();

    
   // run();
    
}

function run(i){


    const j = document.getElementById("result");
    const list = document.createElement("p");
    list.innerText = i;

    if(i > 10){
        runstyle();
        console.log(i);
    } 

    j.appendChild(list);
    
}

function runstyle(){
    document.getElementById('submit-btn').style.width = "5070px";
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



    

