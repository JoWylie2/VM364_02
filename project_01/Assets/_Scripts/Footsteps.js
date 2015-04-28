//#pragma strict
//
//var walkSlowSand: AudioSource;
////var walkSlowRoad: AudioSource;
//var walkSand: AudioSource;
////var walkRoad: AudioSource;
//var sprintSand: AudioSource;
////var sprintRoad: AudioSource;
//static var walking: float = 2;
//private var chMotor: CharacterMotor;
//var playing: boolean = false;
//
//
//
//function Start (){
//     chMotor = GetComponent(CharacterMotor);
//     var ch:CharacterController = GetComponent(CharacterController);
//}
//
//function Update (){
//     if (chMotor.grounded && Input.GetKey(KeyCode.W)){
//     	if (playing == false){
////		    if (whereWalk.road == false){
//		    if (walking == 2){
//		    playing = true;
//		    walkSand.Play();
//		    }
//
////			if (Input.GetKeyDown("c")){
////			    	walkSand.Stop();
////		         	walkSlowSand.Play();
////		    }
////		    if (Input.GetKeyUp("c")){
////					walkSlowSand.Stop();
////					walkSand.Play();
////		     		walking = 2;
////		    }
//		}
//
//
////		    else {walkSand.Stop();}
////		}
////				 
//////		     if (whereWalk.road == true){
//////		     		walkRoad.Play();
//////		     }
//////		     
////		 }
//		
//
//	     if (chMotor.grounded && Input.GetKey(KeyCode.C)){
//	    		if (whereWalk.road == false){
//	    			playing = true;
//	    			walkSand.Stop();
//         			walkSlowSand.Play();
//         		}}
//	}
////         		
//////	   		if (whereWalk.road == true){
//////	     			walkSlowRoad.Play();
//////	     		}
////		}
////		
////		if (walking == 3){
////				if (whereWalk.road == false){
////         			sprintSand.Play();
////         		}
//////         		if (whereWalk.road == true){
//////	     			sprintRoad.Play();
//////	     		}
////		}
//   
//	if (Input.GetKeyUp ("w")){
//		walkSand.Stop();
//		walkSlowSand.Stop();
//		playing = false;
//		
//	}
//
//}
//
//
//
//
//
//
////function Start () {
////
////}
////
////function Update () {
////	if (Input.GetKey("w")){
////	         		if (walklocation.road == false){
////	         			sprintSand.Play();
////	         		}
////	//         		if (walklocation.road == true){
////	//	     			sprintRoad.Play();
////	//	     		}
////}
////
////
////     if (Input.GetKey("w")){
////     	if (walking == true){
////	     	if (walklocation.road == false){
////	     		walkSand.Play();
////	     	}
//////	     	if (walklocation.road == true){
//////	     		walkRoad.Play();
//////	     	}
////	     }
////	 }