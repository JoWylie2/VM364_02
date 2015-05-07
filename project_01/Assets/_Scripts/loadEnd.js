 #pragma strict

public var target : Transform;


function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {Application.LoadLevel("endGUI");}
 }