#pragma strict

function OnMouseDown () {
	if (doorUnlockTrigger.doorOpenAllowed == true){
	animation.Play();
	}
}