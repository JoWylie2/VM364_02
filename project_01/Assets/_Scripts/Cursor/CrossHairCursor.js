#pragma strict
 
var cursorTexture : Texture2D;
var buttTexture : Texture2D;
var hotSpot : Vector2 = Vector2.zero;
 
function Start () {
   	Cursor.SetCursor(cursorTexture, hotSpot, CursorMode.ForceSoftware);
   		
}

function Update () {
	if (Input.GetKeyDown ("f"))
		Cursor.SetCursor(buttTexture, hotSpot, CursorMode.ForceSoftware);
	
	if (Input.GetKeyUp ("f"))
		Cursor.SetCursor(cursorTexture, hotSpot, CursorMode.ForceSoftware);

}
