#pragma strict

	public var target : Transform;
	
function Start (){
	light.intensity =0;
	}
	
function Update () {
   transform.LookAt(target);
   }	
   
function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {light.intensity =2; 
 	}	
}
 
 function OnTriggerExit(other : Collider){
	 if(other.tag == "Player") {light.intensity =0;
	 }
}


//
//function OnCollisionEnter(collision : Collision) {
//   light.intensity =2;
//}