#pragma strict

 static var musicQuiet : boolean = false;
 
 var arrive: AudioSource;
 var arriveSpoken: boolean = false;
 var arriveLength : float;
 
 var transmitter: AudioSource;
 var transmitterSpoken: boolean = false;
 var transmitterLength : float;
 
 var billboard: AudioSource;
 var billboardSpoken: boolean = false;
var billboardLength : float;

 var walkingArt: AudioSource;
 var walkingArtSpoken: boolean = false;
 var walkingArtLength : float;
 
 var stopRobots: AudioSource;
 var stopRobotsSpoken: boolean = false;
 var stopRobotsLength : float;

 var divergence: AudioSource;
 var divergenceSpoken: boolean = false;
 var divergenceLength : float;
  
 var myHouseFromHere: AudioSource;
 var myHouseSpoken: boolean = false; 
 var myHouseFromHereLength : float;
 
 var walkingOasis: AudioSource;
 var walkingOasisSpoken: boolean = false;
 var walkingOasisLength : float;
 
 var oasis: AudioSource;
 var oasisSpoken: boolean = false;
 var oasisLength : float;
 
 var dinerPass: AudioSource;
 var dinerPassSpoken: boolean = false;
 var dinerPassLength : float;
 
 var plataeu: AudioSource;
 var platSpoken: boolean = false;
 var plataeuLength : float;
 
 var antenna: AudioSource;
static var antennaSpoken: boolean = false;
 var antennaLength : float ;
  
var doorUnlock: AudioSource;
var doorUnlockSpoken: boolean = false; 
var doorUnlockLength : float;
 
 var meetDJ: AudioSource;
 var meetDJSpoken: boolean = false; 
 var meetDJLength : float;
  
 var extraRadioBack: AudioSource;
 var extraRadioBackSpoken: boolean = false; 
 var extraRadioBackLength : float;
 
 
var extraRadioLines: AudioSource;
var extraRadioLinesSpoken: boolean = false; 
 var extraRadioLinesLength : float;
 
var truck : AudioSource;
var truckSpoken: boolean = false;
var truckLength : float;
 
var mural : AudioSource;
var muralSpoken: boolean = false;
var muralLength : float;


var robotHead : AudioSource;
var robotHeadSpoken: boolean = false;
var robotHeadLength : float;
 
var lost : AudioSource;
var lostSpoken : boolean = false;
var lostLength : float;
 

var goodbye: AudioSource;
var goodbyeSpoken : boolean = false;
var goodbyeLength : float;
 

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
		goodbye = aSources[20];

}

function Update () {

		if (musicStop.musicStop == true){
		Destroy (this.gameObject);}

	if (arriveTrigger.arriveActivate == true){
			if (arriveSpoken == false){
				WaitingForArrive ();
				arrive.Play();
				arriveTrigger.arriveActivate = false;
				arriveSpoken = true;
				backgroundMusic.backgroundHappyPlaying = true;
			}
			}

if (extraRadioBackTrigger.extraRadioBackActivate == true){
			if (extraRadioBackSpoken == false){
			if (extraRadioLinesSpoken == false){
			WaitingForextraRadioBack();
					extraRadioBack.Play();
					extraRadioBackTrigger.extraRadioBackActivate = false;
					extraRadioBackSpoken = true;
				}}
			}
			
	if (extraRadioLinesTrigger.extraRadioLinesActivate == true){
			if (extraRadioLinesSpoken == false){
			if (extraRadioBackSpoken ==false){
			WaitingForextraRadioLines();
					extraRadioLines.Play();
					extraRadioLinesTrigger.extraRadioLinesActivate = false;
					extraRadioLinesSpoken = true;
				}}
			}

	if (billboardTrigger.billboardActivate == true){
			if (billboardSpoken == false){
			WaitingForbillboard();
					billboard.Play();
					billboardTrigger.billboardActivate = false;
					billboardSpoken = true;
				}
			}
			
	if (walkingArtTrigger.walkingArtActivate == true){
			if (stopRobotsSpoken == false){
				walkingArtTrigger.walkingArtActivate = false;}
			if (walkingArtSpoken == false){
				WaitingForwalkingArt();
					walkingArt.Play();
					walkingArtTrigger.walkingArtActivate = false;
					walkingArtSpoken = true;
				}
			}

	if (transmitterTrigger.transmitterActivate == true){
		if (transmitterSpoken == false){
		if (extraRadioLinesSpoken == true || extraRadioBackSpoken == true){
				WaitingForTransmitter();
				transmitter.Play();
				transmitterTrigger.transmitterActivate = false;
				transmitterSpoken = true;
			}
		}
		}
		
	if (stopRobotsTrigger.stopRobotsActivate == true){
		if (stopRobotsSpoken == false){
			WaitingForstopRobots();
				stopRobots.Play();
				stopRobotsTrigger.stopRobotsActivate = false;
				stopRobotsSpoken = true;
			}
		}
	if (stopRobotsTrigger.divergenceActivate == true){
		if (divergenceSpoken == false){
			WaitingFordivergence();
				divergence.Play();
				stopRobotsTrigger.divergenceActivate = false;
				divergenceSpoken = true;
			}
		}


	if (myHouseTrigger.myHouseActivate == true){
		if (myHouseSpoken == false){
		WaitingFormyHouseFromHere();
				myHouseFromHere.Play();
				myHouseTrigger.myHouseActivate = false;
				myHouseSpoken = true;
				backgroundMusic.backgroundHappyPlaying = false;
				backgroundMusic.backgroundChangingPlaying = true;
			}
		}
		
	if (myHouseTrigger.lostActivate == true){
		if (lostSpoken == false){
			WaitingForlost();
			lost.Play();
			myHouseTrigger.lostActivate = false;
			lostSpoken = true;
		}
	}

	if (walkingOasisTrigger.walkingOasisActivate == true){
		if (walkingOasisSpoken == false){
		if (stopRobotsSpoken == true){
		WaitingForwalkingOasis();
			walkingOasis.Play();
			walkingOasisTrigger.walkingOasisActivate = false;
			walkingOasisSpoken = true;
		}}
	}
	
	if (oasisTrigger.oasisActivate == true){
		if (oasisSpoken == false){
			WaitingForoasis();
			oasis.Play();
			oasisTrigger.oasisActivate = false;
			oasisSpoken = true;
			lostSpoken = true;
			backgroundMusic.backgroundHappyPlaying = false;
			backgroundMusic.backgroundChangingPlaying = false;
			backgroundMusic.backgroundSadPlaying = true;
		}
	}
	
	if (robotHeadTrigger.robotHeadActivate == true){
		if (robotHeadSpoken == false){
		WaitingForrobotHead();
			robotHead.Play();
			robotHeadTrigger.robotHeadActivate = false;
			robotHeadSpoken = true;
		}
	}

	if (dinerPassTrigger.dinerPassActivate == true){
			if (antennaSpoken == false){
			if (dinerPassSpoken == false){
			WaitingFordinerPass();
				dinerPass.Play();
				dinerPassTrigger.dinerPassActivate = false;
				dinerPassSpoken = true;
			}
		}
		}
	
	if (platTrigger.platActivate == true){
		if (platSpoken == false){
		WaitingForplataeu();
			plataeu.Play();
			platTrigger.platActivate = false;
			platSpoken = true;
		}
	}
	
	if (antennaTrigger.antennaActivate == true){
			if (antennaSpoken == false){
			WaitingForantenna();
					antenna.Play();
					antennaTrigger.antennaActivate = false;
					antennaSpoken = true;
				}
			}
			
	if (doorUnlockTrigger.doorUnlockActivate == true){
		if (doorUnlockSpoken == false){
		WaitingFordoorUnlock();
			doorUnlock.Play();
			doorUnlockTrigger.doorUnlockActivate = false;
			doorUnlockSpoken = true;
		}
	}

	if (meetDJTrigger.meetDJActivate == true){
		if (meetDJSpoken == false){
		WaitingFormeetDJ();
			meetDJ.Play();
			meetDJTrigger.meetDJActivate = false;
			meetDJSpoken = true;
		}
	}
	
	if (truckTrigger.truckActivate == true){
		if (truckSpoken == false){
		WaitingFortruck();
			truck.Play();
			truckTrigger.truckActivate = false;
			truckSpoken = true;
		}
	}
	
	if (muralTrigger.muralActivate == true){
		if (muralSpoken == false){
		WaitingFormural();
			mural.Play();
			muralTrigger.muralActivate = false;
			muralSpoken = true;
			}
			}
}
			
function WaitingForArrive (){
	musicQuiet = true;
	yield WaitForSeconds (arriveLength);
	musicQuiet = false;
	}

function WaitingForTransmitter (){
	musicQuiet = true;
	yield WaitForSeconds (transmitterLength);
		musicQuiet = false;

	}	

function WaitingForbillboard (){
musicQuiet = true;
	yield WaitForSeconds (billboardLength);
		musicQuiet = false;

	}	
 
 function WaitingForwalkingArt (){
musicQuiet = true;
	yield WaitForSeconds (walkingArtLength);
		musicQuiet = false;

	}

function WaitingForstopRobots (){
musicQuiet = true;
	yield WaitForSeconds (stopRobotsLength);
		musicQuiet = false;

	}

function WaitingFordivergence (){
	musicQuiet = true;
	yield WaitForSeconds (divergenceLength);
		musicQuiet = false;

	}

 function WaitingFormyHouseFromHere (){
	musicQuiet = true;
	yield WaitForSeconds (myHouseFromHereLength);
		musicQuiet = false;

	}

  function WaitingForwalkingOasis (){
	musicQuiet = true;
	yield WaitForSeconds (walkingOasisLength);
		musicQuiet = false;

	}

function WaitingForoasis (){
	musicQuiet = true;
	yield WaitForSeconds (oasisLength);
		musicQuiet = false;

	}

 function WaitingFordinerPass (){
	musicQuiet = true;
	yield WaitForSeconds (10);
	musicQuiet = false;
	
	}
 
 function WaitingForplataeu (){
	musicQuiet = true;
	yield WaitForSeconds (plataeuLength);
		musicQuiet = false;

	}

function WaitingForantenna (){
	musicQuiet = true;
	yield WaitForSeconds (antennaLength);
		musicQuiet = false;

	}
 
 function WaitingFordoorUnlock (){
	musicQuiet = true;
	yield WaitForSeconds (doorUnlockLength);
		musicQuiet = false;

	}

 function WaitingFormeetDJ (){
	musicQuiet = true;
	yield WaitForSeconds (meetDJLength);
		backgroundMusic.backgroundHappyPlaying = false;
		backgroundMusic.backgroundChangingPlaying = false;
		backgroundMusic.backgroundSadPlaying = false;
		musicQuiet = false;

	}
 
 function WaitingForextraRadioBack (){
	musicQuiet = true;
	yield WaitForSeconds (extraRadioBackLength);
		musicQuiet = false;

	}

 function WaitingForextraRadioLines (){
	musicQuiet = true;
	yield WaitForSeconds (extraRadioLinesLength);
		musicQuiet = false;

	}

  function WaitingFortruck (){
	musicQuiet = true;
	yield WaitForSeconds (truckLength);
		musicQuiet = false;

	}

  function WaitingFormural (){
	musicQuiet = true;
	yield WaitForSeconds (muralLength);
		musicQuiet = false;

	}

   function WaitingForrobotHead (){
	musicQuiet = true;
	yield WaitForSeconds (robotHeadLength);
		musicQuiet = false;

	}

   function WaitingForlost (){
	musicQuiet = true;
	yield WaitForSeconds (lostLength);
		musicQuiet = false;

	}

    function WaitingForgoodbye (){
	musicQuiet = true;
	yield WaitForSeconds (goodbyeLength);
		musicQuiet = false;

	}







