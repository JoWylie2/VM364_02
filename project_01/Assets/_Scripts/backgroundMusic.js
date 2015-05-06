#pragma strict

var backgroundHappy: AudioSource;
static var backgroundHappyPlaying : boolean = false;

var backgroundChanging : AudioSource;
static var backgroundChangingPlaying : boolean = false;

var backgroundSad : AudioSource;
static var backgroundSadPlaying : boolean = false;

function Start () {
	var aSources : AudioSource[] = gameObject.GetComponents.<AudioSource>();
		backgroundHappy = aSources[0];
		backgroundChanging = aSources[1];
		backgroundSad = aSources[2];
}


function Update (){

	if (musicStop.musicStop == true){
		Destroy (this.gameObject);}

	if (backgroundHappyPlaying == true){
		backgroundHappy.Play();
		backgroundHappyPlaying = false;}
		
	if (radioTransmitter.musicQuiet == true){
		backgroundHappy.volume = 0.3;
		backgroundChanging.volume = 0.3;
		backgroundSad.volume = 0.3;
		}
	if (radioTransmitter.musicQuiet == false){
		backgroundHappy.volume = 1;
		backgroundChanging.volume = 1;
		backgroundSad.volume = 1;
		}
}
		

		