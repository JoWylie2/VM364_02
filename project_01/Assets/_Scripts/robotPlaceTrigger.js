#pragma strict

static var robotPlace : boolean = false;

function OnMouseDown () {
	robotPlace = true;
	Destroy (this.gameObject);}