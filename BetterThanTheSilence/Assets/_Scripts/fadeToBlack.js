#pragma strict

static var fadeToBlack: boolean = false;
var l:Light;
var fadeStart : float;
var fadeEnd : float;
var fadeTime : float;
var currentAmbientColor : Color;
var newColor : Color;


function Update(){
if (fadeToBlack == true){
	FadeLight();
	FadeAmbient();
	}}

function FadeLight (){
     var t = 0.0;
     
     while (t < fadeTime) {
         t += Time.deltaTime;
         
         l.intensity = Mathf.Lerp(fadeStart, fadeEnd, t / fadeTime);
         RenderSettings.ambientLight = Color.Lerp(currentAmbientColor, newColor, t/ fadeTime);
         yield;
         
     }
 }
 
 function FadeAmbient (){
 	yield WaitForSeconds (3);
 	RenderSettings.ambientLight = Color.black;}