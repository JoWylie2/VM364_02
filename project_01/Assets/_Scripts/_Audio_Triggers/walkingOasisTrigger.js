#pragma strict

 var target : Transform;
static var walkingOasisActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {walkingOasisActivate = true;
 	}	
}
