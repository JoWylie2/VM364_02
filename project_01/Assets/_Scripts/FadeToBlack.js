#pragma strict

var movTexture : MovieTexture;

function Update () {
	if (fadeTrigger.fadeActivate == true){
	GetComponent.<Renderer>().material.mainTexture = movTexture;
	movTexture.Play();
}}
