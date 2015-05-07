#pragma strict

var robotPlaced : boolean = false;
static var goodbyeActivate : boolean = false;


function Update () {
	if (robotPlaceTrigger.robotPlace == true){
	if (meetDJTrigger.robotPlaceAllow == true){
	if (robotPlaced == false){
	animation.Play();
	robotPlaced = true;
	Goodbye();
	}}}
}

function Goodbye(){
	yield WaitForSeconds (1);
	goodbyeActivate = true;}
