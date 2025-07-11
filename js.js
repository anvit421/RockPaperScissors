let n = window.prompt("Enter the number of rounds you wanna play:");
let choice  = window.prompt(`"rock"/"paper"/"scissors"`);
let humanscore = 0;
let compscore = 0;


for(i=1;i<=n;i++){

        console.log(`ROUND ${i}`);
         let compchoice = Math.floor(Math.random()*3)+1;
         
         if(compchoice === 1){
            compchoice = "rock";
         }
         if(compchoice === 2){
            compchoice = "paper";
         }
         if(compchoice === 3){
            compchoice = "scissor";
         }
         console.log(`HumanChoice:${choice}`);
         console.log(`CompChoice:${compchoice}`);
         if(choice === compchoice){
            console.log(`Its a draw!`);
         }
         else if((choice === "rock" && compchoice === "scissor") ||
            (choice === "scissor" && compchoice === "paper") ||
            (choice === "paper" && compchoice === "rock")){

            console.log(`You win!`);
            humanscore++;
        }
        else{
            console.log(`Computer wins!`);
            compscore++;
            
        }
        console.log(`HumanScore:${humanscore}`);   
        console.log(`CompScore:${compscore}`);  
             
        choice = window.prompt(`"rock"/"paper"/"scissors"`);
        }

if(humanscore>compscore){
    console.log(`You win this game!`);
    console.log(`This game is console only.Interactive gameplay to be added soon.`)
}
else{
    console.log(`You lost this game :(`);
    console.log(`This game is console only.Interactive gameplay to be added soon.`)
}




    

