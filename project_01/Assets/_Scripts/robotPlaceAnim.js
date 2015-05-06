#pragma strict

var robotPlaced : boolean = false;
static var goodbye : boolean = false;


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
	goodbye = true;}
