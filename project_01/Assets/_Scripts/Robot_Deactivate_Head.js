#pragma strict


function Start () {
}

function Update () {
	if (Robot_Deactive_Button.robotDestroy == true){
		Destroy (this.gameObject);
		
	} 
}