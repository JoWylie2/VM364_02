#pragma strict

var animationPlayed : boolean = false;

function Update () {

if (helpText.toggleGUI == true){
	if (animationPlayed == false){
	animation.Play();
	animationPlayed = true;}}
	
if (arriveTrigger.arriveActivate == true){
	Destroy (this.gameObject);}



}