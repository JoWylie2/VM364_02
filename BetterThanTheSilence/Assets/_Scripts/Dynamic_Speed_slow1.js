#pragma strict

public var target : Transform;
static var slowDown : boolean = false;

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {slowDown = true; 
 	}
 }
 	
function OnTriggerExit (other : Collider){
 	if(other.tag == "Player") {slowDown = false; 
 	}
 	
}