#pragma strict

static var antennaActivate : boolean = false;


function Update (){
	if (antennaActivate == true){
	animation.Play();}
	else {animation.Stop();}
	
	}

function OnMouseDown () {
	antennaActivate = true;
	yield WaitForSeconds(0.5);
	Destroy (this.gameObject);
}