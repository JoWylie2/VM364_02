#pragma strict

public var target : Transform;
static var myHouseActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {myHouseActivate = true;
 	}	
}
