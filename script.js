var database = [
    {
        username: "Moses",
        password: "topset",
        age: "34",
        hobby: "drinking",
    }
];

var newsFeed = [
    {
        username: "sally",
        timeline: "i am so tired",
    },
    {
        username: " toronto",
        timeline: "i dont like shit",
    },
];

var userNamePrompt = prompt("what is your name");
var passwordPrompt = prompt("what is your password");
var agePrompt = prompt("how old are you");
var hobbyPrompt = prompt("what is your hobby");

function signIn(user, pass, ages, hobbies) {
    if(user === database[0].username && 
        pass === database[0].password && 
        ages === database[0].age && 
        hobbies === database[0].hobby) 
        {
            console.log(newsFeed);
        } else {
            alert("i dont know you");
        }
}

signIn(userNamePrompt, passwordPrompt, agePrompt, hobbyPrompt);