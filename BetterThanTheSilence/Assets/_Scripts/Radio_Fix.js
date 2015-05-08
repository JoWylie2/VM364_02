#pragma strict

var radioOn : boolean = false; 

function Start () {
	light.color = Color.red;
	light.intensity = 2;
}

function OnMouseDown(){
	if (radioOn == false) {
		light.color = Color.green;
	     audio.Play();
	     radioOn = true;
	     light.intensity = 1;
		}
}