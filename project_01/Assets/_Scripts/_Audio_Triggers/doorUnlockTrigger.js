#pragma strict

public var target : Transform;
static var doorUnlockActivate : boolean = false;
static var doorOpenAllowed : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {
 	if (radioTransmitter.antennaSpoken == true){
 	doorUnlockActivate = true;
 	doorOpenAllowed = true;
 	}	
}
}