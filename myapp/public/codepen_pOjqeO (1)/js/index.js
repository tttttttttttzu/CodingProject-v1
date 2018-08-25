document.getElementById("meow").onclick = click

var times = -1
var audio = new Audio('nmh_scream1.mov')
var t = 0;
var r = "";


function rate(){

r = times/t;

  document.getElementById('rate').innerHTML="最高速:"+Math.floor(r*100)/100;



}



function bigger(){
  if(times > 50){

     }
}


function showTime()
{
    t += 1;
  document.getElementById('time').innerHTML= "使用的時間:"+t ;

    setTimeout("showTime()",1000);
}




function click(){
  times ++
  rate();
  document.getElementById("times").innerHTML ="手速:"+times

  if(times%2 === 0){
    document.getElementById("手手").style.display = "block";
  }else{
    document.getElementById("手手").style.display = "none";
  }

    if(times%2 === 0){
    document.getElementById("手手2").style.display = "none";
  }else{
    document.getElementById("手手2").style.display = "block";
  }


  console.log(times)
  if(times === 83){
    document.getElementById("手手").style.display = "none";
  }
  if(times === 83){
    document.getElementById("手手2").style.display = "none";
    audio.play();
  }
  if(times === 83){
    document.getElementById("meow2").style.display = "block";
    audio.play();
  }
}



click()
showTime();
