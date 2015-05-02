#pragma strict

public var brokenRobot : GameObject;

function Start () {
	Robot_Deactive_Button.robotDestroy = false;

}

function Update () {
	if (Robot_Deactive_Button.robotDestroy == true){
		Instantiate (brokenRobot);
		Destroy (this.gameObject);
		
	} 
}