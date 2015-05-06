#pragma strict

public var target : Transform;
static var meetDJActivate : boolean = false;
static var robotPlaceAllow : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {meetDJActivate = true;
 	RobotAllow();
 	}	
}

function RobotAllow(){
	yield WaitForSeconds (34);
	robotPlaceAllow = true;}