
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
 * If you're building an Overlay for OBS, you may also want to use info from
 * the Audio Trip Branding guide at
 * <https://docs.google.com/document/u/1/d/e/2PACX-1vToN_yrZhGHgy7I_tBoDIAzLHHYlwodwjaXI3VnUXR0a8UEEH0JmjffGx4t8nXxw962gvWrXeXDOcGJ/pub>
 */

export type StatsServerPayload = IStatsServerIdle | IStatsServerSongInfo;
export interface IStatsServerIdle {
  "gameVersion": string; "1.0.3046";
  "inSong": false;
}

export enum PlayerStatus {
  Playing = "Playing",
  Failed = "Failed",
  Finished = "Finished",
}

export enum TripType {
  QuickTrip = 0,
  FullTrip = 1,
  Custom = 2,
}
export interface IStatsServerSongInfo {
  "gameVersion": string;               // "1.0.3046",
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
}
