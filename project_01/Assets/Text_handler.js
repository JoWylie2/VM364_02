#pragma strict

import UnityEngine.UI;

var greeting : Text;

var namefield : InputField;

function NameInsert () {
greeting.text = "Hello " + namefield.text;

}