var database = [
    {
        username: "Moses",
        password: "topset",
        age: "34",
        hobby: "drinking",
    },
    {
        username: "tonto",
        password: "1234",
        age: "21",
        hobby: "drinking",
    },
    {
        username: "Ada",
        password: "3322",
        age: "55",
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


function isUserValid(user, pass) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === user && 
            database[i].password === pass) {
                return true; 
                }
                }
                return false;
            }


function signIn(user, pass) {
    console.log(isUserValid(user, pass));
    
//    for(var i=0; i < database.length; i++) {
  //      if(database[i].username === user && 
    //        database[i].password === pass) {
      //          console.log(newsFeed); 
        //        } else {
          //          alert("sorry, wrong password")
            //    }
           // }
    }

    
    
    
    //if(user === database[0].username && 
      //  pass === database[0].password) 
       // {
        //    console.log(newsFeed);
        //} else {
          //  alert("i dont know you");
       // }
//}

signIn(userNamePrompt, passwordPrompt);