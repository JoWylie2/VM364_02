﻿#pragma strict

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

	if (robotPlaceAnim.robotPlaced == true){
		Destroy (this.gameObject);}

	if (backgroundHappyPlaying == true){
		backgroundHappy.Play();
		backgroundHappyPlaying = false;}
		
	if (backgroundChangingPlaying == true){
		backgroundChanging.Play();
		backgroundChangingPlaying = false;
		backgroundHappy.Stop();
		backgroundSad.Stop();
		}
		
	if (backgroundSadPlaying == true){
		backgroundSad.Play();
		backgroundSadPlaying = false;
		backgroundHappy.Stop();
		backgroundChanging.Stop();
		}
		
	if (radioTransmitter.musicQuiet == true){
		backgroundHappy.volume = 0.1;
		backgroundChanging.volume = 0.1;
		backgroundSad.volume = 0.1;
		}
	if (radioTransmitter.musicQuiet == false){
		backgroundHappy.volume = 0.8;
		backgroundChanging.volume = 0.8;
		backgroundSad.volume = 0.8;
		}
}
		

		