#pragma strict

public var target : Transform;
static var myHouseActivate : boolean = false;
<<<<<<< HEAD
static var lostActivate : boolean = false;
=======
>>>>>>> fc1df3dcb34fb23bdfa2c8c1573060a9328645d3

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {myHouseActivate = true;
<<<<<<< HEAD
 	yield WaitForSeconds (130);
			lostActivate = true;
 	}
 }
=======
 	}	
}
>>>>>>> fc1df3dcb34fb23bdfa2c8c1573060a9328645d3
