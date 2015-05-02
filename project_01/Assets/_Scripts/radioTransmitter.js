#pragma strict

 var arrive: AudioSource;
 var arriveSpoken: boolean = false;
 
 var transmitter: AudioSource;
 var transmitterSpoken: boolean = false;
 
 var billboard: AudioSource;
 var billboardSpoken: boolean = false;
 
 var walkingArt: AudioSource;
 var walkingArtSpoken: boolean = false;
 
 var stopRobots: AudioSource;
 var stopRobotsSpoken: boolean = false;
 
 var divergence: AudioSource;
 var divergenceSpoken: boolean = false;
 
 var myHouseFromHere: AudioSource;
 var myHouseSpoken: boolean = false; 
 
 var walkingOasis: AudioSource;
 var walkingOasisSpoken: boolean = false;
 
 var oasis: AudioSource;
 var oasisSpoken: boolean = false;
 
 var dinerPass: AudioSource;
 var dinerPassSpoken: boolean = false;
 
 var plataeu: AudioSource;
 var platSpoken: boolean = false;
 
 var antenna: AudioSource;
 static var antennaSpoken: boolean = false; 
 
var doorUnlock: AudioSource;
var doorUnlockSpoken: boolean = false; 
 
 
 var meetDJ: AudioSource;
 var meetDJSpoken: boolean = false; 
 
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



	if (billboardTrigger.billboardActivate == true){
			if (billboardSpoken == false){
					billboard.Play();
					billboardTrigger.billboardActivate = false;
					billboardSpoken = true;
				}
			}
			
	if (walkingArtTrigger.walkingArtActivate == true){
			if (walkingArtSpoken == false){
					walkingArt.Play();
					walkingArtTrigger.walkingArtActivate = false;
					walkingArtSpoken = true;
				}
			}

	if (transmitterTrigger.transmitterActivate == true){
		if (transmitterSpoken == false){
				transmitter.Play();
				transmitterTrigger.transmitterActivate = false;
				transmitterSpoken = true;
			}
		}
		
	if (stopRobotsTrigger.stopRobotsActivate == true){
		if (stopRobotsSpoken == false){
				stopRobots.Play();
				stopRobotsTrigger.stopRobotsActivate = false;
				stopRobotsSpoken = true;
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

	if (dinerPassTrigger.dinerPassActivate == true){
			if (antennaSpoken == false){
			if (dinerPassSpoken == false){
				dinerPass.Play();
				dinerPassTrigger.dinerPassActivate = false;
				dinerPassSpoken = true;
			}
		}
		}
	
	if (platTrigger.platActivate == true){
		if (platSpoken == false){
			plataeu.Play();
			platTrigger.platActivate = false;
			platSpoken = true;
		}
	}
	
	if (antennaTrigger.antennaActivate == true){
			if (antennaSpoken == false){
					antenna.Play();
					antennaTrigger.antennaActivate = false;
					antennaSpoken = true;
				}
			}
			
	if (doorUnlockTrigger.doorUnlockActivate == true){
		if (doorUnlockSpoken == false){
			doorUnlock.Play();
			doorUnlockTrigger.doorUnlockActivate = false;
			doorUnlockSpoken = true;
		}
}

	if (meetDJTrigger.meetDJActivate == true){
		if (meetDJSpoken == false){
			meetDJ.Play();
			meetDJTrigger.meetDJActivate = false;
			meetDJSpoken = true;
		}
	}
	
	if (musicStop.musicStop == true){
		meetDJ.Stop();
		}

}

