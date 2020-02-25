function showFood(price, crave, place){ //Displays the page featuring a particular food place
    localStorage.setItem("answer1", price);
    localStorage.setItem("answer2", crave);
    localStorage.setItem("answer3", place);
    window.location.href = "food.html";
}