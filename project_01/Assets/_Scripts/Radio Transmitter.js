#pragma strict

 var arrive: AudioSource;
 var arriveSpoken: boolean = false;
 
 var transmitter: AudioSource;
 var transmitterSpoken: boolean = false;
 
 var billboard: AudioSource;
 var billboardSpoken: boolean = false;
 
 var walkingArt: AudioSource;
 
 var stopRobots: AudioSource;
 var stopRobotsSpoken: boolean = false;// not matched this up yet!!

 
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
 var antennaSpoken: boolean = false; 
 
 var doorUnlock: AudioSource;
 var meetDJ: AudioSource;
 
 var extraRadioBack: AudioSource;
 var extraRadioBackSpoken: boolean = false; 
 
var extraRadioLines: AudioSource;
var extraRadioLinesSpoken: boolean = false; 

function Start () {
	var aSources : AudioSource[] = gameObject.GetComponents.<AudioSource>();
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
		extraRadioBack = aSources[14];
		extraRadioLines = aSources[15];

}

function Update () {

	if (arriveTrigger.arriveActivate == true){
			if (arriveSpoken == false){
					arrive.Play();
					arriveTrigger.arriveActivate = false;
					arriveSpoken = true;
				}
			}

if (extraRadioBackTrigger.extraRadioBackActivate == true){
			if (extraRadioBackSpoken == false){
					extraRadioBack.Play();
					extraRadioBackTrigger.extraRadioBackActivate = false;
					extraRadioBackSpoken = true;
				}
			}
			
	if (extraRadioLinesTrigger.extraRadioLinesActivate == true){
			if (extraRadioLinesSpoken == false){
					extraRadioLines.Play();
					extraRadioLinesTrigger.extraRadioLinesActivate = false;
					extraRadioLinesSpoken = true;
				}
			}


	if (antennaTrigger.antennaActivate == true){
			if (antennaSpoken == false){
					antenna.Play();
					antennaTrigger.antennaActivate = false;
					antennaSpoken = true;
				}
			}
			
	if (billboardTrigger.billboardActivate == true){
			if (billboardSpoken == false){
					billboard.Play();
					billboardTrigger.billboardActivate = false;
					billboardSpoken = true;
				}
			}

	if (transmitterTrigger.transmitterActivate == true){
		if (transmitterSpoken == false){
				transmitter.Play();
				transmitterTrigger.transmitterActivate = false;
				transmitterSpoken = true;
			}
		}

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

