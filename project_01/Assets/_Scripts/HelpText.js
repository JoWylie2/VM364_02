#pragma strict

  static var toggleGUI : boolean;
  public var target : Transform;
  
function Start() {
 toggleGUI = false;
 }
 
function OnTriggerEnter (other : Collider) {
  toggleGUI = true;
  }
  
function OnTriggerExit (other : Collider) {
  toggleGUI = false;
  }
  
  function OnGUI () {
  if (toggleGUI == true){
  	GUI.Label (Rect (Screen.width/2 - Screen.width/8, Screen.height/2 + Screen.height/4, 420, 30), "Hold 'F' and left click to interact with objects");
      }
  }