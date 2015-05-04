#pragma strict

static var antennaActivate : boolean = false;
<<<<<<< HEAD
private var pickUp : Animator;

function Start (){
    pickUp = GetComponent(Animator);
}

function OnMouseDown () {
	pickUp.enabled = !pickUp.enabled;
	antennaActivate = true;
	yield WaitForSeconds(1);
=======


function Update (){
	if (antennaActivate == true){
	animation.Play();}
	else {animation.Stop();}
	
	}

function OnMouseDown () {
	antennaActivate = true;
	yield WaitForSeconds(0.5);
>>>>>>> fc1df3dcb34fb23bdfa2c8c1573060a9328645d3
	Destroy (this.gameObject);
}