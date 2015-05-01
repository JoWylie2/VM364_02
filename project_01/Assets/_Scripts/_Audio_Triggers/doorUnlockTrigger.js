#pragma strict

public var target : Transform;
static var doorUnlockActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {doorUnlockActivate = true;
 	}	
}