﻿#pragma strict

public var target : Transform;
static var dinerPassActivate : boolean = false;

function Start () {

}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {dinerPassActivate = true;
 	}	
}