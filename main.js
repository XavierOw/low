x = 0;
y = 0;

draw_apple = "";
apple="";
to_number=0;
speak_data="";
screen_width=0;
screen_height=0;
function prelaod()
{
  apple=loadImage("apple.png");
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
to_number=Number(content);
if(Number.isInteger(to_number))
{
document.getElementById("status").innerHTML="An apple has appeared";
draw_apple="set";
}
else
{
  document.getElementById("status").innerHTML="a number has not been recognised"
}

}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}


function setup()
{
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  canvas=createCanvas(screen_width,screen_height);
  canvas.position(0,150)
}
function draw() 
{

    if(draw_apple == "set")
    {
      for(var i=1;i<=to_number;i++)
      {
      x= Math.floor(Math.random() *900);
      y= Math.floor(Math.random() *600); 
        image(apple,x,y,50,50)
      }
        document.getElementById("status").innerHTML = "An apple appeared"+to_number;
      speak_data=to_number+"An apple appeared";
      speak();
        draw_apple="";
    
}

}
