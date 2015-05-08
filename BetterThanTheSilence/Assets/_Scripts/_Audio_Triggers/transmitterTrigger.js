#pragma strict

static var transmitterActivate : boolean = false;

function OnMouseDown () {
	Destroy (this.gameObject);
	transmitterActivate = true;
	
}