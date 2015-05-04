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

var truck : AudioSource;
var truckSpoken: boolean = false;

var mural : AudioSource;
var muralSpoken: boolean = false;

var robotHead : AudioSource;
var robotHeadSpoken: boolean = false;

var lost : AudioSource;
var lostSpoken : boolean = false;

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
		truck = aSources[16];
		mural = aSources[17];
		robotHead = aSources[18];
		lost = aSources[19];

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
			if (extraRadioLinesSpoken == false){
					extraRadioBack.Play();
					extraRadioBackTrigger.extraRadioBackActivate = false;
					extraRadioBackSpoken = true;
				}}
			}
			
	if (extraRadioLinesTrigger.extraRadioLinesActivate == true){
			if (extraRadioLinesSpoken == false){
			if (extraRadioBackSpoken ==false){
					extraRadioLines.Play();
					extraRadioLinesTrigger.extraRadioLinesActivate = false;
					extraRadioLinesSpoken = true;
				}}
			}

	if (billboardTrigger.billboardActivate == true){
			if (billboardSpoken == false){
					billboard.Play();
					billboardTrigger.billboardActivate = false;
					billboardSpoken = true;
				}
			}
			
	if (walkingArtTrigger.walkingArtActivate == true){
			if (stopRobotsSpoken == false){
				walkingArtTrigger.walkingArtActivate = false;}
			if (walkingArtSpoken == false){
					walkingArt.Play();
					walkingArtTrigger.walkingArtActivate = false;
					walkingArtSpoken = true;
				}
			}

	if (transmitterTrigger.transmitterActivate == true){
		if (transmitterSpoken == false){
		if (extraRadioLinesSpoken == true || extraRadioBackSpoken == true){
				transmitter.Play();
				transmitterTrigger.transmitterActivate = false;
				transmitterSpoken = true;
			}
		}
		}
		
	if (stopRobotsTrigger.stopRobotsActivate == true){
		if (stopRobotsSpoken == false){
				stopRobots.Play();
				stopRobotsTrigger.stopRobotsActivate = false;
				stopRobotsSpoken = true;
			}
		}
	if (stopRobotsTrigger.divergenceActivate == true){
		if (divergenceSpoken == false){
				divergence.Play();
				stopRobotsTrigger.divergenceActivate = false;
				divergenceSpoken = true;
			}
		}


	if (myHouseTrigger.myHouseActivate == true){
		if (myHouseSpoken == false){
				myHouseFromHere.Play();
				myHouseTrigger.myHouseActivate = false;
				myHouseSpoken = true;
			}
		}
		
	if (myHouseTrigger.lostActivate == true){
		if (lostSpoken == false){
			lost.Play();
			myHouseTrigger.lostActivate = false;
			lostSpoken = true;
		}
	}

	if (walkingOasisTrigger.walkingOasisActivate == true){
		if (walkingOasisSpoken == false){
		if (stopRobotsSpoken == true){
			walkingOasis.Play();
			walkingOasisTrigger.walkingOasisActivate = false;
			walkingOasisSpoken = true;
		}}
	}
	
	if (oasisTrigger.oasisActivate == true){
		if (oasisSpoken == false){
			oasis.Play();
			oasisTrigger.oasisActivate = false;
			oasisSpoken = true;
			lostSpoken = true;
		}
	}
	
	if (robotHeadTrigger.robotHeadActivate == true){
		if (robotHeadSpoken == false){
			robotHead.Play();
			robotHeadTrigger.robotHeadActivate = false;
			robotHeadSpoken = true;
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
	
	if (truckTrigger.truckActivate == true){
		if (truckSpoken == false){
			truck.Play();
			truckTrigger.truckActivate = false;
			truckSpoken = true;
		}
	}
	
	if (muralTrigger.muralActivate == true){
		if (muralSpoken == false){
			mural.Play();
			muralTrigger.muralActivate = false;
			muralSpoken = true;
		}
	}
		
	if (musicStop.musicStop == true){
		Destroy (this.gameObject);}
}






