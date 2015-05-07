#pragma strict

var walkSpeed: float = 7; // regular speed
var crchSpeed: float = 3; // crouching speed
var runSpeed: float = 20; // run speed
var beatSpeed: float = 40;

 
 private var chMotor: CharacterMotor;
 private var tr: Transform;
 private var dist: float; // distance to ground
 
 function Start(){
     chMotor = GetComponent(CharacterMotor);
     tr = transform;
     var ch:CharacterController = GetComponent(CharacterController);
     dist = ch.height/2; //
 }
 

 function Update(){
     var vScale = 1.0;
     var speed = walkSpeed;
     if (chMotor.grounded && Input.GetKey("left shift") || Input.GetKey("right shift")){
     if (DJHelpText.robotDestroy == false){
         speed = runSpeed;
     }}
     
     if (chMotor.grounded && Input.GetKey(KeyCode.KeypadEnter)){
         speed = beatSpeed;
     }

     
     if (Input.GetKey("c")){
       if (DJHelpText.robotDestroy == false){
         vScale = 0.5;
         speed = crchSpeed;} // slow down when crouching
     }
     
     
     if (Dynamic_Speed_slow1.slowDown == true){
     	speed = crchSpeed;
     }
     

     
     chMotor.movement.maxForwardSpeed = speed; // set max speed
     var ultScale = tr.localScale.y; // crouch/stand up smoothly 
     tr.localScale.y = Mathf.Lerp(tr.localScale.y, vScale, 5*Time.deltaTime);
     tr.position.y += dist * (tr.localScale.y-ultScale); // fix vertical position
 }