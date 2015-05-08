#pragma strict

static var musicStop : boolean = false;


function Start () {
}

function Update (){

	if (Input.GetKey ("k")){
		if (DJHelpText.killDJGUI == true){
		animation.Play();
		musicStop = true;
		DJHelpText.killDJGUI = false;
		}}
}