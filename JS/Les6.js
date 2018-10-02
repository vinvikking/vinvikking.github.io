const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];


let Name = {
    Name : "Vincent",
    Lastname : "Roeland",
    Age : 20,
    PreviousDiploma: "MBO - ICT",
    Family : ["Cavia","Vis","Laurent","Yannick"],
    FavoriteVehicle : {
      Name : "Auto",
      Amountwheels : 4,
  },

  fav : function(){
      return "Mijn favorieten vervoersmiddel is een " + this.FavoriteVehicle.Name + " en die heeft " + this.FavoriteVehicle.Amountwheels + " wielen";
  },

  Loop : function(){
      for(i = 0; i < this.Family.length; i++){
          console.log(this.Family[i]);
      }
  },


  Logfamily : function(){
      Name.Family.forEach(function(element){
            console.log(element);
      })
    }

};

Name.Logfamily();

Name.Loop();



console.log(Name.fav());

function print(Family){
    for(i = 0; i < Family.length; i++)
    console.log(Name.Family[i]);
}






