#pragma strict

static var robotHeadActivate : boolean = false;

function OnMouseDown () {
	robotHeadActivate = true;
	Destroy (this.gameObject);
}