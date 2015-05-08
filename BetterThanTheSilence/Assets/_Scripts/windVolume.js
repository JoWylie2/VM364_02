#pragma strict

 var windSounds : AudioSource;

function Start () {
	var aSources : AudioSource[] = gameObject.GetComponents.<AudioSource>();
		windSounds = aSources[0];
}

function Update () {
     if (killDJ.musicStop == true){
     windSounds.volume = 1;}
     else{windSounds.volume = 0.3;}
     	
}