let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"]
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice= ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            //scissors ,paper
         userwin = compchoice === "paper" ? false:true;

        }else if(userchoice === "paper")
            {
                //scissor,rock
                userwin = compchoice ==="scissor"?false:true;

            }
            else{
                //rock,paper
                userwin = compchoice ==="rock"?false:true;
            }
            showWinner(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});