
export interface AudioTripPlaylist {
  localTitle: {
    m_FileID: 0;
    m_PathID: 0;
  };
  title: string;
  items: IPlaylistEntry[];

  totalDuration: number; // length in seconds
  choreoType: 1;  // always 1?
  isBuiltIn: boolean; // (usually false, but true makes Audio Trip clone the list when stuff is added)
}
export interface IPlaylistEntry  {
  songID: string;
  song: {
    m_FileID: 0;
    m_PathID: 0;
  };
  choreoID: string;
  choreoIndex: 0;
  mode: 0|1|2; // quick / full / custom trip
  length: number;

  [key: string]: number | string | object; // other props can be added
}
