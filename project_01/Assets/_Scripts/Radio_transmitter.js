#pragma strict

var arrive: AudioSource;
 var transmitter: AudioSource;
 var billboard: AudioSource;
 var walkingArt: AudioSource;
 var stopRobots: AudioSource;
 var divergence: AudioSource;
 
 var myHouseFromHere: AudioSource;
 var myHouseSpoken: boolean = false;
 
 var walkingOasis: AudioSource;
 var walkingOasisSpoken: boolean = false;
 
 var oasis: AudioSource;
 var oasisSpoken: boolean = false;
 
 var dinerPass: AudioSource;
 
 var plataeu: AudioSource;
 var platSpoken: boolean = false;
 
 var antenna: AudioSource;
 var doorUnlock: AudioSource;
 var meetDJ: AudioSource;
 var audio15: AudioSource;

function Start () {
	var aSources = GetComponents(AudioSource);
		arrive = aSources[0];
		transmitter = aSources[1];
		billboard = aSources[2];
		walkingArt = aSources[3];
		stopRobots = aSources[4];
		divergence = aSources[5];
		myHouseFromHere = aSources[6];
		walkingOasis = aSources[7];
		oasis = aSources[8];
		dinerPass = aSources[9];
		plataeu = aSources[10];
		antenna = aSources[11];
		doorUnlock = aSources[12];
		meetDJ = aSources[13];
		audio15 = aSources[14];
}

function Update () {
	if (myHouseTrigger.myHouseActivate == true){
		if (myHouseSpoken == false){
				myHouseFromHere.Play();
				myHouseTrigger.myHouseActivate = false;
				myHouseSpoken = true;
			}
		}

	if (walkingOasisTrigger.walkingOasisActivate == true){
		if (walkingOasisSpoken == false){
			walkingOasis.Play();
			walkingOasisTrigger.walkingOasisActivate = false;
			walkingOasisSpoken = true;
		}
	}
	
	if (oasisTrigger.oasisActivate == true){
		if (oasisSpoken == false){
			oasis.Play();
			oasisTrigger.oasisActivate = false;
			oasisSpoken = true;
		}
	}
	
	if (platTrigger.platActivate == true){
		if (platSpoken == false){
			plataeu.Play();
			platTrigger.platActivate = false;
			platSpoken = true;
		}
	}
}

