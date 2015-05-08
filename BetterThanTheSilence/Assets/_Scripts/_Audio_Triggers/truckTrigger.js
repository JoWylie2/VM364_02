#pragma strict

public var target : Transform;
static var truckActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {truckActivate = true;
 	}	
}
