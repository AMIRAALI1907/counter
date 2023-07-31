var counter=0;
var increase=document.getElementById("increase");
var reset=document.getElementById("reset");
var decrease=document.getElementById("decrease");

increase.onclick=function(){
    
counter+=1;
document.getElementById("number").innerHTML=counter;
}
reset.onclick=function(){
  
    counter=0;
    
    document.getElementById("number").innerHTML=counter;
    }

    decrease.onclick=function(){
        counter--;
        document.getElementById("number").innerHTML=counter;
        }
        

