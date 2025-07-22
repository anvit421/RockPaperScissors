class gameplay{

constructor(){
    this.humanscore = 0;
    this.compscore = 0;
    this.rock = "✊";
    this.paper = "✋";
    this.scissor = "✌️";
    this.humanchoice = undefined;
    this.initialr = 0;
    document.getElementById("alertCloseButton").onclick = () => this.noofrounds();
}

   noofrounds(){
        this.n = Number(document.getElementById("noofrounds").value);
        this.initialr = 0; // reset round counter at game start
        document.getElementById("customAlert").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("rno").innerHTML = "Roundno:0";
        document.getElementById("overlay2").style.display = "none";
        document.getElementById("endcard").style.display = "none";
        this.mainlogic(); // Start the actual game
    }


   

         //rno.textContent = `Roundno:${l}`;
   mainlogic(){
         let gameplay = document.querySelector("#gameplay");
         document.getElementById("rock").addEventListener("click",() =>{this.logichuman1();
                                                                        this.logiccomp();
                                                                        this.gamelogic();
                                                                        this.noofroundsandexit();}); 
         document.getElementById("paper").addEventListener("click",() =>{this.logichuman2();
                                                                         this.logiccomp();
                                                                         this.gamelogic();
                                                                         this.noofroundsandexit();}); 
         document.getElementById("scissors").addEventListener("click",() =>{this.logichuman3();
                                                                            this.logiccomp();
                                                                            this.gamelogic()
                                                                            this.noofroundsandexit();}); 
         document.getElementById("closebtn").addEventListener("click",() =>{this.closebtn();});
         document.getElementById("tryagainbtn").addEventListener("click",() =>{this.tryagain();})
      }
      logichuman1(){
            this.humanchoice = this.rock;
            document.getElementById("playerimg").innerHTML = this.humanchoice;
      }
      logichuman2(){
            this.humanchoice = this.paper;
            document.getElementById("playerimg").innerHTML = this.humanchoice;
      }
      logichuman3(){
            this.humanchoice = this.scissor;
            document.getElementById("playerimg").innerHTML = this.humanchoice;
      }
      logiccomp(){
            this.compchoice = Math.floor(Math.random()*3)+1;

            if(this.compchoice === 1){
             this.compchoice = this.rock;
            }
            else if(this.compchoice === 2){
              this.compchoice = this.paper;
            }
            else if(this.compchoice === 3){
              this.compchoice = this.scissor;
            }
            document.getElementById("compimg").innerHTML = this.compchoice;
      }
      gamelogic(){
         if(this.humanchoice === this.compchoice){
            document.getElementById("whowon").innerHTML = `Its a draw.`;
      }
         else if((this.humanchoice === this.rock && this.compchoice === this.scissor) ||
            (this.humanchoice === this.scissor && this.compchoice === this.paper) ||
            (this.humanchoice === this.paper && this.compchoice === this.rock)){
            document.getElementById("whowon").innerHTML = `You win!`;
            this.humanscore++;
            document.getElementById("humanscore").innerHTML = `Score:${this.humanscore}`;
        }
        else{
            document.getElementById("whowon").innerHTML = `Computer wins!`;
            this.compscore++;
            document.getElementById("compscore").innerHTML = `Score:${this.compscore}`;
            
        }
      }
      noofroundsandexit(){
          if(this.initialr < this.n){
              this.initialr++;
              document.getElementById("rno").innerHTML = `Roundno:${this.initialr}`;
              document.getElementById("overlay2").style.display = "none";
              document.getElementById("endcard").style.display = "none";
          } else if(this.initialr === this.n){
            //   this.initialr++;
            //   document.getElementById("rno").innerHTML = `Roundno:${this.n}`;
              document.getElementById("overlay2").style.display = "block";
              document.getElementById("endcard").style.display = "block";
              if(this.humanscore > this.compscore){
                  document.getElementById("gamewinner").innerHTML = `You win!!`;
                  document.getElementById("humanscorefinal").innerHTML = `Your score:${this.humanscore}`;
                  document.getElementById("compscorefinal").innerHTML = `Comp score:${this.compscore}`;

              }
              else if(this.humanscore === this.compscore){
                  document.getElementById("gamewinner").innerHTML = `Its a draw!`;
                  document.getElementById("humanscorefinal").innerHTML = `Your score:${this.humanscore}`;
                  document.getElementById("compscorefinal").innerHTML = `Comp score:${this.compscore}`;
              }
              else if(this.humanscore < this.compscore){
                document.getElementById("gamewinner").innerHTML = `You lose.`;
                document.getElementById("humanscorefinal").innerHTML = `Your score:${this.humanscore}`;
                document.getElementById("compscorefinal").innerHTML = `Comp score:${this.compscore}`;
              }
          }
      }
      closebtn(){
          document.getElementById("overlay2").style.display = "none";
          document.getElementById("endcard").style.display = "none";
          document.getElementById("rno").innerHTML = "Limitlessmode";
      }
      tryagain(){
        this.resetgame();
      }
      resetgame(){
         this.humanscore = 0;
         this.compscore = 0;
         this.initialr = 0;
         this.humanchoice = undefined;
         this.compchoice = undefined;
         // do not reset this.n here, let user set it in noofrounds
         document.getElementById("humanscorefinal").innerHTML = `Your score:${this.humanscore}`;
         document.getElementById("compscorefinal").innerHTML = `Comp score:${this.compscore}`;
         document.getElementById("humanscore").innerHTML = "Score:0";
         document.getElementById("compscore").innerHTML = "Score:0";
         document.getElementById("rno").innerHTML = "Roundno:0";
         document.getElementById("whowon").innerHTML = "";
         document.getElementById("playerimg").innerHTML = "❔";
         document.getElementById("compimg").innerHTML = "❔";
         document.getElementById("overlay2").style.display = "none";
         document.getElementById("endcard").style.display = "none";
         document.getElementById("customAlert").style.display = "block";
         document.getElementById("overlay").style.display = "flex";
      }

}
const game = new gameplay();
          
        





/*if(humanscore>compscore){
    console.log(`You win this game!`);
    console.log(`This game is console only.Interactive gameplay to be added soon.`)
}
else{
    console.log(`You lost this game :(`);
    console.log(`This game is console only.Interactive gameplay to be added soon.`)
}*/






    

