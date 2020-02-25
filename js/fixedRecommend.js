function recommendAnother(choice) {
    switch(choice) {
        case 2:
            localStorage.setItem("answer1", 2);
            localStorage.setItem("answer2", 4);
            localStorage.setItem("answer3", 3);
            window.location.href = "food.html";
            break;
        case 3:
            localStorage.setItem("answer1", 2);
            localStorage.setItem("answer2", 3);
            localStorage.setItem("answer3", 1);
            window.location.href = "food.html";
            break;
    }
}