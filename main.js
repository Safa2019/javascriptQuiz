
let btn= document.querySelector("[name = submit]");
let quastions = document.getElementById("divForQuastion");
let scoreDiv = document.querySelector(".score");
let total_seconds = 60*2; 
let c_min =parseInt(total_seconds/60);
let c_sec = parseInt(total_seconds%60);
let quastionsArray = [];
let sumScore = 0; 
let myTimeOut= setTimeout("checkTime()", 1000);

function calcScore (){
    for(let i=0; i< quastionsArray.length; i++){
        if(quastionsArray[i]){
            sumScore+=5
        }
    }
    return sumScore;
}
function checkAns(){
    for(let i=0; i<= quastionsArray.length; i++){
        
        let divOfMessage = `resultOfAns${i+1}`;
        if(document.getElementById(divOfMessage) !== null){
            if(quastionsArray[i]){
                document.getElementById(divOfMessage).style.cssText=" margin: 15px; background: rgb(98 223 69 / 68%); padding: 10px; border-radius: 5px; width: fit-content;";
                document.getElementById(divOfMessage).append("Your Answer Is Correct");
            }else{
                document.getElementById(divOfMessage).style.cssText=" margin: 15px; background: #ff2a04ad; padding: 10px; border-radius: 5px; width: fit-content;";
                document.getElementById(divOfMessage).append("Your Answer Is Not Correct"); 
            }
        
        } 
    }
}
btn.onclick = function () {
    
    btn.style.display="none";
    let ansQ1 = document.getElementById("q1choice1").checked;
    let ansQ2 = document.getElementById("q2choice3").checked;
    let ansQ3 = document.getElementById("q3choice2").checked;
    let ansQ4 = document.getElementById("q4choice2").checked;
    let ansQ5 = document.getElementById("q5choice2").checked;
    quastionsArray=[ansQ1,ansQ2,ansQ3,ansQ4,ansQ5];
    let score = calcScore ();
    let scoreParg = document.createElement("p");
    let scorePText = document.createTextNode(`Your Score is: ${score}/25`);
    scoreParg.append(scorePText);
    scoreDiv.appendChild(scoreParg);
    checkAns();
  
};

function checkTime(){
    document.getElementById("time-left").innerHTML = 
    'Time left: '  + c_min + ':' + c_sec + ' ';
    if(total_seconds <= 0 ){
        setTimeout(btn.onclick ,1);
    }else{
        total_seconds = total_seconds -1 ; 
        c_min = parseInt(total_seconds/60);
        c_sec = parseInt(total_seconds%60);
        setTimeout("checkTime()", 1000);
            
        }
}



