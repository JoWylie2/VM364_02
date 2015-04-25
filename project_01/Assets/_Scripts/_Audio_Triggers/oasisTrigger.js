#pragma strict

public var target : Transform;
static var oasisActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {oasisActivate = true;
 	}	
}
