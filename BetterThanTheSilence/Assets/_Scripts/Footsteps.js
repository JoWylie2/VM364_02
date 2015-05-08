//#pragma strict
//
//var walkSand: AudioSource;
//var walkRoad: AudioSource;
//
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
//     if (chMotor.grounded && Input.GetKeyDown(KeyCode.W)){
//     	if (playing == false){
//		if (whereWalk.road == false){
//		    playing = true;
//		    walkSand.Play();
//		    }
//		    if (whereWalk.road == true){
//		    walkRoad.Play();
//		    playing = true;
//		    }
//		}
//	}
//   
//	if (Input.GetKeyUp ("w")){
//		walkSand.Stop();
//		walkSand.Stop();
//		playing = false;
//		}
//}






//function Start () {
//
//}
//
//function Update () {
//	if (Input.GetKey("w")){
//	         		if (walklocation.road == false){
//	         			sprintSand.Play();
//	         		}
//	//         		if (walklocation.road == true){
//	//	     			sprintRoad.Play();
//	//	     		}
//}
//
//
//     if (Input.GetKey("w")){
//     	if (walking == true){
//	     	if (walklocation.road == false){
//	     		walkSand.Play();
//	     	}
////	     	if (walklocation.road == true){
////	     		walkRoad.Play();
////	     	}
//	     }
//	 }