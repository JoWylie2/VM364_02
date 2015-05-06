#pragma strict

function Update () {
	if (doorUnlockAnim.doorAnim == true){
		AnimPlay();
	} 
}

function AnimPlay(){
	animation.Play();
	doorUnlockAnim.doorAnim = false;
	}