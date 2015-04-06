#pragma strict

import UnityEngine.UI;

var textbox : Text;
var slider : Slider;

function sliderdisplay (x : float) {
	textbox.text = x.ToString();

}