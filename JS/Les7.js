


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



// Opdracht 1

const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 

let Hardlooptijden = {
    lapRounds :[55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
    }


console.log(Hardlooptijden.lapRounds)

Object.keys(Hardlooptijden).forEach(function(key) {
    console.log('Key : ' + key + ', Value : ' + Hardlooptijden[key])
  })

  // Opdracht 2 
  // Gegeven Array in document werkt niet, aangepast

  const teachers = {

    user1 : {name : "Loek", profession : "Teacher", Brand : "Linux", hoursPerWeek : 36, salary : 2000, 
        salaryPerHour : function(){
                var x = this.salary
                var y = this.hoursPerWeek
                var result = x / y;

               return this.name + " verdiend ongeveer €" + result + " euro per uur"
        }
    },

    user2 : {name : "Daan", profession : "Teacher", Brand : "Arduino", hoursPerWeek : 32, salary : 2000,
         salaryPerHour : function(){
                var x = this.salary
                var y = this.hoursPerWeek
                var result = x / y;

              return this.name + " verdiend ongeveer €" + result + " euro per uur"
        }
    },

    user3 : {name : "Rimmert", profession : "Teacher", Brand : "Apple", hoursPerWeek : 36, salary: 2500,
        salaryPerHour : function(){
                var x = this.salary
                var y = this.hoursPerWeek
                var result = x / y;

            return this.name + " verdiend ongeveer €" + result + " euro per uur"
        }
    }
  }
    

  var allUsers = [];

  for(var key in teachers) {
    allUsers.push(teachers[key]);
}

for(i = 0; i < allUsers.length; i++){
    console.log("I have a " + allUsers[i].profession + " named " + allUsers[i].name + " and he likes to work on a " + allUsers[i].Brand + " computer" );
}

// Opdracht 3 

for(i = 0; i < allUsers.length; i++){
    console.log(allUsers[i].salaryPerHour());
  }
