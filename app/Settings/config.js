module.exports = {


/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Steam-Chat-Logger*/
	
	    
/*

Want active support and new updates with new features all for free?

Leave an star on github repo its free ( we push updates based on the engagement )
Repo link: https://github.com/OSL-Works/Steam-Chat-Logger

  Discord Support Server: https://discord.gg/D8WCtDD     (Open an ticket)

*/
	

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  
 * Donations:
  Crypto: https://refloow.com/cdonate
  Steam: https://steamcommunity.com/tradeoffer/new/?partner=392773011&token=CncehZti

 */




    // Account Information //

	loginAccName: '',
	password: '',
	// Leave empty if account dont have 2fa auth. // If you leave shared_secret empty configure steamguardauto false to manualy enter codes.
	shared_secret: '',
        SteamGuardAuto: true,     // Enable or disable | [true / false] automaticly generating 2fa codes for loging into account.

          // Settings //
          
        UpdateNotif_enable: true,               // [true/false] Enable or disable | Dev logs update notifications
        ReceivedMessagesDisplay: true,          // [true/false] Enable or disable | Disable received messages console display

        LogsForEachUser: true,                  // [true/false] Enable or disable | Disabling logging for each user
        LogsForEachDay: true,                   // [true/false] Enable or disable | Disabling logging for each day
}
