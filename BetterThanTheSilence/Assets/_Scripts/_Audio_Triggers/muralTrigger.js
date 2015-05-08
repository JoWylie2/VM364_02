#pragma strict

public var target : Transform;
static var muralActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {muralActivate = true;
 	}	
}
