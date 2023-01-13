function greeting(){
    alert("Hey there!");
    let username = prompt("What is your name");
    console.log("username" + username);
}
function drinkWater(){
    let userResponse = prompt("Did you hydrate?");
    console.log("user answer" + userResponse);
    if (userResponse == "") {
        userResponse = prompt("Come on, answer?");
        if (userResponse == "yes"){
            alert("Awesome");
        }   else{
            alert("Drink some water!");
        } 
    } else if (userResponse == "yes") {
        alert("Awesome");
    } else if (userResponse == "no") {
        alert("Hydrate!");
    }
}

document.write("Hello " + username + "!");

document.write("Hydration is key");
document.write("Thanks for visiting");
