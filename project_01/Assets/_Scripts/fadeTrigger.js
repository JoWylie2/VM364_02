#pragma strict

public var target : Transform;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {fadeToBlack.fadeToBlack = true;
 	}	
}