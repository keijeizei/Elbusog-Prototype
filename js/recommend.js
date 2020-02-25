var database = {"Tita Cora's": [1, 4, 1,
                "<br>Tita Cora's is a small store located near dorms and apartments inside Raymundo Gate that offers a variety of student-friendly meals. It has a warm atmosphere due to its family-like setting with a single long table to seat its customers.", "img/circleThumb/titacora.png", "img/mainPic/titacora.jpg"],
                "Parduch": [1, 4, 2, 
                "<br>Parduch is your typical karinderya with a large variety of food being served each day. If you're on a tight budget and happen to be near Raymundo, Parduch has your back as they also allow half servings of your favorite meals.", "img/circleThumb/parduch.png", "img/mainPic/parduch.jpg"],
                "Family Canteen (YMCA)": [1, 4, 3, 
                "<br>The Family Canteen is located inside the university near the Women's and Men's Residence Hall. They sell meals at a very low price making it highly affordable. If a student wants to save some money, the canteen also has a 'student meal' offer where half of the regular portion is served.", "img/circleThumb/ymca.png", "img/mainPic/ymca.jpg"],
                
                "Big D's": [2, 3, 1, 
                "<br>Big D's offers japanese food and rice meals at a decent price with tables inside and by the street. If you want to try some of their unique types of ramen or other delicious dishes on the menu, you can visit them at Ruby Street.", "img/circleThumb/bigd.png", "img/mainPic/bigd.jpg"],
                "Aico's Canteen": [2, 1, 2, 
                "<br>Aico's, mostly referred to as Tonton's, serves one of Elbi's best sisig and is situated at the Grove. If you're not in the mood for sisig, Aico's does deliver other meals that are simply delicious and cheap.", "img/circleThumb/aico.png", "img/mainPic/aico.jpg"],
                "College Coop Canteen": [2, 4, 3, 
                "<br>The COOP Canteen is managed by the Tita Tes Fud Counter (and other cafeterias inside the campus) which is a catering that is popular here in elbi. In terms of location, COOP is literally inside the campus behind the Old Humanities building. It is a nice place to stop over and eat at when it's hot outside.", "img/circleThumb/coop.png", "img/mainPic/coop.jpg"],
                
                "Seoul Kitchen": [3, 4, 1, 
                "<br>Seoul Kitchen is a korean restaurant serving appetizers, meals, coffee, and desserts. It's one of the 'top-tier' restaurants in elbi so if you can afford it or if you're feeling luxurious, you can visit them at F.O. Santos St. and enjoy the delicious food they offer.", "img/circleThumb/seoul.png", "img/mainPic/seoul.jpg"],
                "Bonito's": [3, 4, 2,
                "<br>Bonito's is not your usual restaurant in UPLB. It is located at Grove St. near the entrance going to Demarces. The place is perfect for dates as the space gives an intimate atmosphere. If you're looking for a fancy night-out, then Bonito's is the place to be!", "img/circleThumb/bonito.png", "img/mainPic/bonito.jpg"],
                "Vraja": [3, 2, 3,
                "<br>Vraja is a vegan restaurant located in UPLB Freedom Park. The food found in here might be a bit pricey but is compensated by its exquisite taste and serene ambience.", "img/circleThumb/vraja.png", "img/mainPic/vraja.jpg"]
};
var thirdChoice = {};
var secondChoice = {};
var firstChoice = {};

var secondKey = "";
var thirdKey = "";
//var firstArray = [];

//var firstRandom = 0;

//const data = document.getElementById("retrieveData");
const name = document.getElementById("foodShopName");
const pricerange = document.getElementById("pricerange");
const foodrange = document.getElementById("foodrange");
const placerange = document.getElementById("placerange");
const foodDescription = document.getElementById("fooddescription");

const mainPic = document.getElementById("mainPic");
const secondCircleThumb = document.getElementById("secondCircleThumb");
const thirdCircleThumb = document.getElementById("thirdCircleThumb");

var price = localStorage.getItem("answer1"); // 1: <60, 2: 60-100, 3: >100, 4: no pref
var crave = localStorage.getItem("answer2"); // 1: meat, 2: veggies, 3: noodles, 4: no pref
var place = localStorage.getItem("answer3"); // 1; raymundo, 2: grove, 3: campus, 4: no pref


//data.innerHTML = price.concat(crave, place);

//test for budget, right food place goes to thirdChoice
for(var key in database) {
    var value = database[key];

    if(price != 4) { //the user has a preference
        if(value[0] == price) {
            thirdChoice[key] = value;
        }
    }
    else {
        thirdChoice[key] = value;
    }
}

//test for crave food, right food place goes to secondChoice
for(var key in thirdChoice) {
    var value = thirdChoice[key];

    if(crave != 4) { //the user has a preference
        if(value[1] == crave) {
            secondChoice[key] = value;
        }
    }
    else { //no preference so just move everthing to secondChoice
        secondChoice[key] = value;
    }
    
}

//craving sometimes will not be available, so in case there is none, just copy thirdChoice to secondChoice
if(Object.keys(secondChoice) == 0) {
    for(var key in thirdChoice) {
        var value = thirdChoice[key];
        secondChoice[key] = value;
    }
}

//test for nearest location, right food place goes to firstChoice
for(var key in secondChoice) {
    var value = secondChoice[key];

    if(place != 4) {
        if(value[2] == place) {
            firstChoice[key] = value;
        }
    }
    else {
        firstChoice[key] = value;
    }  
}

//location sometimes will not be available (in case of crave), so in case there is none, just copy secondChoice to firstChoice
if(Object.keys(firstChoice) == 0) {
    for(var key in secondChoice) {
        var value = secondChoice[key];
        firstChoice[key] = value;
    }
}

//for(var key in firstChoice) {
//    firstArray.push(key);
//}

//When randomizer is available, data size is too small
//firstRandom = Math.floor(Math.random() * firstArray.length);
//firstChoice[firstArray[firstRandom]];

//prints the first key in firstChoice
for(var key in firstChoice) {
    var value = firstChoice[key];

    name.innerHTML = key;
    foodDescription.innerHTML = value[3];
    if(value[0] == 1) {
        pricerange.innerHTML = "<strong>Price Range</strong> : P60 and below";
    }
    else if(value[0] == 2) {
        pricerange.innerHTML = "<strong>Price Range</strong> : P60 to P100";
    }
    else if(value[0] == 3) {
        pricerange.innerHTML = "<strong>Price Range</strong> : P100 and above";
    }

    if(value[1] == 1) {
        foodrange.innerHTML = "<strong>Specialty</strong> :  Meat";
    }
    else if(value[1] == 2) {
        foodrange.innerHTML = "<strong>Specialty</strong> :  Vegetables";
    }
    else if(value[1] == 3) {
        foodrange.innerHTML = "<strong>Specialty</strong> :  Noodles";
    }
    else if(value[1] == 4) {
        foodrange.innerHTML = "<strong>Specialty</strong> :  Variety";
    }

    if(value[2] == 1) {
        placerange.innerHTML = "<strong>Location</strong> :  Raymundo Area";
    }
    else if(value[2] == 2) {
        placerange.innerHTML = "<strong>Location</strong> :  Grove";
    }
    else if(value[2] == 3) {
        placerange.innerHTML = "<strong>Location</strong> :  Inside UPLB Campus";
    }

    mainPic.src = value[5];

    delete thirdChoice[key]; //removes the main recommendation from thirdChoice
    break;
}

//prints the first key in thirdChoice
for(var key in thirdChoice) {
    var value = thirdChoice[key];

    secondName.innerHTML = key;

    if(value[0] == 1) {
        secondPrice.innerHTML = "Price Range : P60 and below";
    }
    else if(value[0] == 2) {
        secondPrice.innerHTML = "Price Range : P60 to P100";
    }
    else if(value[0] == 3) {
        secondPrice.innerHTML = "Price Range : P100 and above";
    }
    secondKey = key;
    secondCircleThumb.src = value[4];
    break;
}

//prints the last key in thirdChoice
for(var key in thirdChoice) {
    var value = thirdChoice[key];
    if(key != secondKey) {
        thirdName.innerHTML = key;

        if(value[0] == 1) {
            thirdPrice.innerHTML = "Price Range : P60 and below";
        }
        else if(value[0] == 2) {
            thirdPrice.innerHTML = "Price Range : P60 to P100";
        }
        else if(value[0] == 3) {
            thirdPrice.innerHTML = "Price Range : P100 and above";
        }
        thirdKey = key;
        thirdCircleThumb.src = value[4];
    }
}


function recommendAnother(choice) {
    switch(choice) {
        case 2:
            var valueOfKey = thirdChoice[secondKey];
            localStorage.setItem("answer1", valueOfKey[0]);
            localStorage.setItem("answer2", valueOfKey[1]);
            localStorage.setItem("answer3", valueOfKey[2]);
            window.location.href = "food.html";
            break;
        case 3:
            var valueOfKey = thirdChoice[thirdKey];
            localStorage.setItem("answer1", valueOfKey[0]);
            localStorage.setItem("answer2", valueOfKey[1]);
            localStorage.setItem("answer3", valueOfKey[2]);
            window.location.href = "food.html";
            break;
        case 4:
            window.location.href = "teamschoice.html";
            break;
    }
}