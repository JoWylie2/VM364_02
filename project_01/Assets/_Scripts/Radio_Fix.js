#pragma strict

var radioOn : boolean = false;

function Start () {
	light.intensity =0;
}

function OnMouseDown(){
	if (radioOn == false) {
	light.intensity =2;
     	audio.Play();
     	radioOn = true;
	}
}