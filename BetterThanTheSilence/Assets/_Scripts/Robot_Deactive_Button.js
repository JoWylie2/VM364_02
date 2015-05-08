#pragma strict

static var robotDestroy : boolean = false;

function Start () {
}

function OnMouseDown(){
	robotDestroy = true;
}