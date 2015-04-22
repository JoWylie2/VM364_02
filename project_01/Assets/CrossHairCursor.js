#pragma strict
 
var cursorTexture : Texture2D;
var hotSpot : Vector2 = Vector2.zero;
 
function Start () {
   Cursor.SetCursor(cursorTexture, hotSpot, CursorMode.ForceSoftware);

}
