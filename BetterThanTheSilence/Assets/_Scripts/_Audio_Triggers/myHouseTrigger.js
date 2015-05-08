#pragma strict

public var target : Transform;
static var myHouseActivate : boolean = false;
static var lostActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {myHouseActivate = true;
 	yield WaitForSeconds (130);
			lostActivate = true;
 	}
 }
