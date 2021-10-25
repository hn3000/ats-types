
/*
 * Stats Server built into Audio Trip, configurable using text file
 * called `StatsServer.cfg`, in the game's data folder (the one above "Songs")
 *
 * ```
 * ip: <ip address> // The IP to listen on
 * port: 1234 // The port to listen on
 * rate: 0.1 // How long between refreshes (in seconds)
 * ```
 * 
 * Note: currently the file must not have a newline after the third line.
 * 
 * A very simple configuration is also possible:
 * 
 * ```
 * ip: 0.0.0.0
 * ```
 * 
 * And this minimum is required on Quest, because the server won't run without
 * a file and it won't be reachable from outside if not configured to an 
 * external ip of the Quest or 0.0.0.0 (which means **use all external IPs**).
 * 
 * If you're building an Overlay for OBS, you may also want to use info from
 * the Audio Trip Branding guide at
 * <https://docs.google.com/document/u/1/d/e/2PACX-1vToN_yrZhGHgy7I_tBoDIAzLHHYlwodwjaXI3VnUXR0a8UEEH0JmjffGx4t8nXxw962gvWrXeXDOcGJ/pub>
 */

export type StatsServerPayload = IStatsServerIdle | IStatsServerSongInfo;
export interface IStatsServerIdle {
  "gameVersion": string; // e.g. "1.0.3066";
  "inSong": false;
}

export enum PlayerStatus {
  Playing = "Playing",
  Failed = "Failed",
  Finished = "Finished",
}

export enum TripType {
  QuickTrip = "QuickTrip",
  FullTrip = "FullTrip",
  Custom = "Custom",
}
export interface IStatsServerSongInfo {
  "gameVersion": string;               // "1.0.3068",
  "inSong": true,
  "playerStatus": PlayerStatus;        // 0=Playing, 1=Failed, 2=Finished
  "score": number;                     // e.g. 500000;
  "multiplier": number;                // e.g. 2; // The current combo multiplier
  "playerHealth": number;              // e.g. 0.5; // Value from 0-1, -1 if No-Fail mode is on.
  "tripType": TripType;                // e.g. 0 // 0=Quick-Trip, 1=Full-Trip, 2=Custom
  "songLength": number;                // e.g. 500.5; // Song length in seconds
  "curSongTime": number;               // e.g. 34.2; // Current song play time (counts up)
  "songTitle": string;                 // e.g. "Bangarang",
  "songArtist": string;                // e.g. "Skrillex",
  "choreoName": string;                // e.g. "CARDIO",
  "choreographer": string;             // e.g. "Kinemotik Studios" // User name of choreographer

  /* these IDs can be used to find the corresponding choreo file or create playlists: */
  "songID": string;        // same as in .ats file, short numeric IDs are used for early OST songs
  "choreoID": string;      // same as in .ats file
}
