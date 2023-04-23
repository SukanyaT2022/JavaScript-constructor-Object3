/*
Create an object called as Pet with properties as PetName, PetType, Age
Create 5 different Pet objects and store them in an array.
In HTML create a list with the values-dog, cat, bird, fish

When user selects a pet type and clicks on the button,
 display all the pets which belong to that pet type

 if no pet found in that type print No Pet Found

*/


function pet(PetName2, PetType2, Age2){
    this.PetName = PetName2;//this.petName is property--Petname2 is variable
    this.PetType = PetType2;
    this.Age = Age2;
}

var petOne = new pet("lulu", "Dog","2");
var petTwo= new pet("candy", "Cat","1");
var petThree= new pet("taco", "Fish","1");
var petFour= new pet("tamtam", "Frog","1");
var petFive= new pet("baba", "Turtle","4");

var allPets = [petOne,petTwo,petThree, petFour, petFive]

function check(){
    var searchPet = document.getElementById("listPet").value
   
var flag = 0
    for (i = 0; i < allPets.length; i++){
      
        if (allPets[i].PetType==searchPet){
       document.write(allPets[i].PetName +" "+ allPets[i].PetType + " " + allPets[i].Age)
       flag = 2 //flsg any number means found and flag 0 means not found
break
        }
    }
    if (flag == 0){
        alert("not found")
    }
    
}