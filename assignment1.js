var readLineSync = require("readline-sync");
//ex 1
// console.log("My name is meet ved");
// ex 2
// var userName=readLineSync.question("may i have your name?? \n");
//ex 3 and ex 4
// console.log("welcome "+ userName);
// ex 5

// var userAge=readLineSync.question("Am i older than 19? type yes or no \n");
// var score=0;
// do{

//   var userAge=readLineSync.question("Am i older than 19? type yes or no \n");

//   var i=1;
// if(userAge==="yes")
// {
//   console.log("right answer!!!!");
//   score=score+1;
//   console.log("your score = "+score);
//  var i=3;
// }
// else if(userAge==="no"){
//   console.log("wrong answer!!!");
//   score=score-0;
//   console.log("your score = "+score);
// var i=3;
// }
// else{
//   console.log("type yes or no only");
//   i++;
// }

// }while(i<=2)
// ex 6
// var question2 = "Am i from city ahmedabad ?\n ";
// var answer2 = "yes";
// var userAns2=readLineSync.question(question2);
// if(userAns2===answer2)
// {
//   console.log("right answer!!!!");
//   score=score+1;
//   console.log("your score = "+score);

// }
// else 
// {
//   console.log("wrong answer!!!");
//   score=score-0;
//   console.log("your score = "+score);
// }
//ex 7
// function add(parameterOne, parameterTwo) {
//   var c;
//   // console.log(parameterOne);
//   c=parameterOne+parameterTwo;
//   console.log("sum of "+parameterOne +" and "+parameterTwo+" is " );
//   print(c);
// }
// function print(x){
// console.log(x+"\n");
// }
// add(5,95);
// add(1,4);
//ex 8
// var score = 0;
// function play(question, answer) {
// var useranswer=readLineSync.question(question);
// if(useranswer===answer){
// console.log("congratulations!!! right answer\n");
// score=score+1;
// console.log("Your Score = "+score);
// console.log("-----------------------------------");
// }
// else{
//   console.log("oops!!! wrong answer\n");
// score=score-0;
// console.log("Your Score = "+score);

// console.log("-----------------------------------");
// }
// }
// var question2 = "Am i from city ahmedabad ?\n ";
// var answer2 = "yes";
// play(question2,answer2);
// var question3 = "Do i love Cricket ??\n ";
// var answer3 = "yes";
// play(question3,answer3);
//ex 9 print name 5 times
// for (var i=0; i<=4;i++) {
//   console.log("meet ved");
// }
// homework: star pattern
// for(var i=1; i<=5; i++){
//      console.log("* ".repeat(i));
//   }
//ex 10-grocery items using array
// var items=["maggie","La-pinoz pizza","pasta","noodles","Cheese"];
// // console.log(items[1]);
// //ex 11 print all list
// for(var i=0;i<=items.length;i++)
// {
//   console.log(items[i]);
// }
//ex 12 superman vs iron-man objects
// var superman={
//   name:"superman",
//   power:100,
//   intelligence:50,
//   costumeColor:"blue",

// }
// var ironMan={
//   name:"iron-Man",
//   power:10000,
//   intelligence:1000,
//   costumeColor:"red",

// }
// superman.intelligence;
// if(console.log(ironMan.intelligence>superman.intelligence))
// {
//   console.log("iron-man is more intelligent");
// }
// else{
//    console.log("superman is more intelligent");

// }
//ex 13,14 and 15 how well do you know me
var score = 0;

function welcome() {
    var userName = readLineSync.question("Tell me your name......\n");
    console.log("welcome " + userName);
    console.log("now be ready for a game which gives me idea about how well do you know your friend meet ved..... ");
    console.log("I will ask you 5 questions...\nNow Let's start the game....")
    console.log("----------------");
}



function play(question, answer) {
    var userAnswer = readLineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
        console.log("congratulations, right answer!!!");
        score = score + 1;

    } else {
        console.log("oopss, wrong answer!!!");

    }

    console.log("current score: ", score);
    console.log("-----------------");
}




function game() {
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer);
    }
}

var questions = [{
        question: "Where do i live?\n",
        answer: "ahmedabad",
    },
    {
        question: "which snacks do i like most?\n",
        answer: "maggie",
    }, {
        question: "who is my idle?\n",
        answer: "ms dhoni",
    }, {
        question: "can you tell me my college name?\n",
        answer: "adani",
    }, {
        question: "can you tell me my engineering branch?\n",
        answer: "ict",
    },
];

var highScores = [{
        name: "virat",
        score: 5,
    },

    {
        name: "rohit",
        score: 4,
    },
    {
        name: "pant",
        score: 4,
    },
]



function showScores() {
    console.log("YAY!YOUR FINAL SCORE: ", score);

    console.log("Check out the high scores, if you should be there ping me and I'll update it");

    highScores.map(score => console.log(score.name, " : ", score.score))
        // for(var i=0;i<+highScores.length;i++)
        // {
        //   console.log(highScores[i]);
        // }
}

function thankYou() {
    console.log("thank you for taking your time to participate in quiz!!!\n-----------------");
}

welcome();

game();
showScores();
thankYou();