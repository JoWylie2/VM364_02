#pragma strict

var animationPlayed :boolean = false;
static var killDJGUI : boolean = false;
public var target : Transform;
static var robotDestroy : boolean = false;

function Start () {

}

function Update () {
	if (robotPlaceAnim.goodbyeActivate == true){
	if (animationPlayed == false){
	if (killDJGUI == true){
	animation.Play();
	animationPlayed = true;
	robotDestroy = true;
		}}}
}

function OnTriggerEnter (other : Collider){
 	if(other.tag == "Player") {
  killDJGUI = true;}
  }
  
 function OnTriggerExit (other : Collider) {
 if(other.tag == "Player") {
  killDJGUI = false;}
  }
