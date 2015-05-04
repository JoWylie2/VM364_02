#pragma strict

public var target : Transform;
static var fadeActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {fadeActivate = true;
 	}	
}