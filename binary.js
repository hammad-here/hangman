  var help;
        var word;
        var wSpace="";
        var un="_"; 
        var underscore;
        var btn;

        var ltr;
        var tf=true;
        var bf;
        var af;
        var time=0;
        var win = false;
        function game() {
        help = document.getElementById("guess"); 
        
        help.setAttribute("placeholder","guess any letter of word");
        help.setAttribute("maxlength","1");
        underscore = document.getElementById("underscores");
        btn=document.getElementById("btn");
        btn.setAttribute("onclick","megaGame()");
        btn.innerHTML="try";
        word = help.value;
        help.value = "";
        for(let k=0;k<word.length;k++){ if(word[k]!==" "){ wSpace+=word[k] ;}}
        wSpace.toLowerCase();
        for(let m=1;m<word.length;m++){un+="_"}
        underscore.innerHTML=(un);
        console.log(word);
        document.getElementById("giveUp").innerHTML = "give up";
        }
        
        function megaGame(){ 
        help = document.getElementById("guess"); ;
        ltr = help.value;
        help.value="";
        tf=true;
        for(let j=0; j<wSpace.length;j++){
        if(wSpace[j]==ltr){ 
         bf = un.slice(0,j);
         af = un.slice(j+1);
         un= bf+ ltr +af;
             tf=false; 
            } 
        }
        if(tf){
           time+=1;
           document.getElementById("tries").innerText=time;
           alert(`${ltr} is not in the word, try again`);
          }
        underscore.innerHTML = un;
        if(un==word){document.getElementById("congrats").innerHTML="you guesses it correctly 🥳"; win=true}
        
        if(time>4){fail();}
        }
        
        function fail(){
            if(!win){
            document.getElementById("congrats").innerHTML=`you failed 😞, the word is ${word}`}
            } 
