#pragma strict

public var target : Transform;
static var walkingArtActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {walkingArtActivate = true;
 	}	
}
