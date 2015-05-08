#pragma strict

public var target : Transform;
static var stopRobotsActivate : boolean = false;
static var divergenceActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {stopRobotsActivate = true;
 	yield WaitForSeconds (30);
 	divergenceActivate = true;
 	}	
}