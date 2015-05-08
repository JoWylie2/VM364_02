#pragma strict

static var doorAnim : boolean = false;

function OnMouseDown () {
	if (doorUnlockTrigger.doorOpenAllowed == true){
	doorAnim = true;
	OpenDoor();
	}
}

function OpenDoor(){
	yield WaitForSeconds (2);
	animation.Play();}
