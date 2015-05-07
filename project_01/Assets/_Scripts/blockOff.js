#pragma strict

static var blockOff : boolean = false;

function Update () {

if (blockOff == true) {
	Destroy (this.gameObject);
}

}