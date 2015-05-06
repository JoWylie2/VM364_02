#pragma strict

static var musicStop : boolean = false;


function OnMouseDown () {
	musicStop = true;
	animation.Play();
}