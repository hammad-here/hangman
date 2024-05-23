let OPT;//opyion chosen
let opt;//correct option
let Try=0;//number of question answered
let correct=0;//number of questions answered correvtly 
let count=1//timer
let timer;//setTimeOut name
//each question generating
 function rounds(){
    var bin="";//binary value of ans
//creating random binary number 
    for(let i=0;i<8;i++){
        bin+=(Math.floor(Math.random()*2));
    }
    document.getElementById("ques").innerHTML=bin;
    //converting binary to denary
    var indexWorth=1//worth of position
    var ans=0;//denary value of ans
    for(let j=7;j>=0;j--){
        if(bin[j]==1){
            ans+=indexWorth
        }
        indexWorth*=2;
    }
//putting nearest answers to the options
    document.getElementById("opt1").innerHTML=ans+Math.floor(Math.random()*10-10);document.getElementById("opt2").innerHTML=ans+Math.floor(Math.random()*10-10);document.getElementById("opt3").innerHTML=ans+Math.floor(Math.random()*10-10);document.getElementById("opt4").innerHTML=ans+Math.floor(Math.random()*10-10);
//putting right answer to the random opt
    opt=Math.floor(Math.random()*4+1) ;
    console.log(ans);
    console.log(opt);
    opt==1?document.getElementById("opt1").innerHTML=ans:opt==2?document.getElementById("opt2").innerHTML=ans:opt==3?document.getElementById("opt3").innerHTML=ans:document.getElementById("opt4").innerHTML=ans
}
 function game(){
//clock working
timer=setInterval(()=>{
document.getElementById("timer").innerHTML=count;count++},1000)
//making option visible and play button vanished
document.getElementById('opt1').setAttribute('class','opt left');document.getElementById('opt2').setAttribute('class','opt right');document.getElementById('opt3').setAttribute('class','opt left');document.getElementById('opt4').setAttribute('class','opt right');document.getElementById("timer").innerHTML=0;
var play = document.getElementById('play');play.setAttribute('class','Opt');
play.setAttribute('id','');play.innerHTML="";
rounds();

}
 function out(){  
//changing the option color to red for instant
document.getElementById("opt1").setAttribute("class","optLoss left");document.getElementById("opt2").setAttribute("class","optLoss right");document.getElementById("opt3").setAttribute("class","optLoss left");document.getElementById("opt4").setAttribute("class","optLoss right");        
opt==1?document.getElementById("opt1").setAttribute("class","optWin left"):opt==2?document.getElementById("opt2").setAttribute("class","optWin right"):opt==3?document.getElementById("opt3").setAttribute("class","optWin left"):document.getElementById("opt4").setAttribute("class","optWin right");
//changing the color back
setTimeout(()=>{
    document.getElementById("opt1").setAttribute("class","opt left");document.getElementById("opt2").setAttribute("class","opt right");document.getElementById("opt3").setAttribute("class","opt left");document.getElementById("opt4").setAttribute("class","opt right");
if(OPT==opt){
correct+=1;
}
Try+=1;
if(Try==10){alert(`${correct} are correct solution out of 10 in ${count} seconds`);clearInterval(timer);count=0;Try=0}
else{
rounds()
}
},500)

}