#pragma strict

public var target : Transform;
static var meetDJActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {meetDJActivate = true;
 	}	
}
