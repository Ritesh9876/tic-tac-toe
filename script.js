var myModule=(function(){
    var count=0;
   function printIt(et){
       count++;
       if(et.textContent===""){
       
if(count%2 !==0){
    et.textContent="X";
    document.querySelector(".winner p").textContent="O's Player play your move";
}else{
    et.textContent="O";
    document.querySelector(".winner p").textContent="X's Player play your move";
}
       
       checkWinner();
       }
   }
   function checkWinner(){
       A=document.querySelector("#row-1 #one ").textContent;
      
       B=document.querySelector("#row-1 #two ").textContent;
        C=document.querySelector("#row-1 #three ").textContent;
        D=document.querySelector("#row-2 #one").textContent;
        E=document.querySelector("#row-2 #two").textContent;
        F=document.querySelector("#row-2 #three").textContent;
        G=document.querySelector("#row-3 #one").textContent;
        H=document.querySelector("#row-3 #two").textContent;
        I=document.querySelector("#row-3 #three").textContent;
        
        if((C===F&&F===I&&C!=="")||(G===H&&H===I&&I!=="")){
            winnerDec(`${I}'s Player is Winner`);
        }   
        
        if((A===E&&E===I&&A!=="")||(B===E&&E===H&&B!=="")||(G===E&&E===C&&C!=="")||(D===E&&E===F&&F!=="")){winnerDec(`${E}'s Player is Winner`);}

        if((A===D&&D===G&&A!=="")||(A===B&&B===C&&A!=="")){winnerDec(`${A}'s Player is Winner`);}

        if(!(C===F&&F===I&&C!=="")&&!(G===H&&H===I&&I!=="")&&!(A===E&&E===I&&A!=="")&&!(B===E&&E===H&&B!=="")&&!(G===E&&E===C&&C!=="")&&!(D===E&&E===F&&F!=="")&&!(A===D&&D===G&&A!=="")&&!(A===B&&B===C&&A!=="")&&A!==""&&B!==""&&C!==""&&D!==""&&E!==""&&F!==""&&G!==""&&H!==""&&I!==""){
            winnerDec("Match tie");
        }
   }
   function winnerDec(XorO){
winner=document.querySelector(".winner");
    const para=document.querySelector(".winner p");
    para.textContent=XorO;
  const body=document.querySelector("body");
  const table=document.querySelector("table");
    body.insertBefore(winner,table);
 document.querySelector("table").style.pointerEvents="none";
   }

   function restart(){
    const td=document.querySelectorAll("#tic-body td");
    for(var i=0;i<td.length;i++){
        td[i].textContent="";
    }
    document.querySelector("table").style.pointerEvents="auto";
 document.querySelector(".winner p").textContent="X's Player play your move";
  

 
}
   return {printIt,restart}
}());



// adds X to box
 const box=document.querySelector("#tic-body");
 box.addEventListener("click",function(e){
     myModule.printIt(e.target);
  
 });
const restart=document.querySelector("#restart");
restart.addEventListener("click",myModule.restart);