#pragma strict

private var doorOpen : Animator;

function Start (){
    doorOpen = GetComponent(Animator);
}

function OnMouseDown () {
	if (doorUnlockTrigger.doorUnlockActivate == true){
	doorOpen.enabled = !doorOpen.enabled;
	}
}
		