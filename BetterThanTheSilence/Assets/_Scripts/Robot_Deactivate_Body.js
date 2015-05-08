#pragma strict

public var brokenRobot : GameObject;

function Start () {
	DJHelpText.robotDestroy = false;

}

function Update () {
	if (DJHelpText.robotDestroy == true){
		Instantiate (brokenRobot);
		Destroy (this.gameObject);
	} 
}