#pragma strict

public var target : Transform;
static var platActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {platActivate = true;
 	}	
}
