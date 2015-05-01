#pragma strict

static var antennaActivate : boolean = false;
private var pickUp : Animator;

function Start (){
    pickUp = GetComponent(Animator);
}

function OnMouseDown () {
	pickUp.enabled = !pickUp.enabled;
	antennaActivate = true;
	yield WaitForSeconds(1);
	Destroy (this.gameObject);
}