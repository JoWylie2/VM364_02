#pragma strict

function Start (){

}

function Update () {
	if (Input.GetKeyDown ("f"))
		Screen.lockCursor = true;
}
