#pragma strict

static var antennaActivate : boolean = false;
private var pickUp : Animator;

function Start (){
    pickUp = GetComponent(Animator);
}

function OnMouseDown () {
	pickUp.enabled = !pickUp.enabled;
	antennaActivate = true;
	yield WaitForSeconds(0.5);
	Destroy (this.gameObject);
}

function Update (){
	if (antennaActivate == true){
	animation.Play();}
	else {animation.Stop();}
	
	}
