#pragma strict

public var target : Transform;
static var stopRobotsActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {stopRobotsActivate = true;
 	}	
}
