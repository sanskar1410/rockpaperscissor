let userscore =0;
let systemscore = 0;

const choices = document.querySelectorAll(".choice");

const getsystemchoice = ()=>{
    const options = ["rock" , "paper","scissors"];
    const index = Math.floor(Math.random() *3);
    return options[index];
};
const msg = document.querySelector("#msg");
const yourscore = document.querySelector("#user-score");
const systscore = document.querySelector("#syst-score");

const drawgame = () =>{
    msg.innerText = "This round was Draw , Play again ";
    msg.style.backgroundColor = "blue";
};

const showwinner = (userwin,userchoice,systemchoice) =>{
    if(userwin){
        userscore++;
        yourscore.innerText = userscore
        msg.innerText = `You Win!!!, your ${userchoice} beats ${systemchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        systemscore++;
        systscore.innerText = systemscore;
        msg.innerText = `You lost, ${systemchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) =>{
    const systemchoice = getsystemchoice();
    if(userchoice === systemchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //system - paper scissors
            userwin = systemchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            // system- rock scissors
            userwin = systemchoice === "scissors" ? false : true;
        }
        else {
            // system - paper rock
            userwin = systemchoice ==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,systemchoice);
    }
}; 
choices.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})