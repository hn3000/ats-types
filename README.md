
# Typescript Types to describe Audio Trip custom choreography files

All information in here is either from https://bit.ly/3kkHEbW,
taken from discussions in the Audio Trip Discord
or gleaned from inspection of saved choreographies.

(Not published on npm, for now.)

## Use

Install the library into your project with npm or yarn
```
npm add https://github.com/hn3000/ats-types
```
```
yarn add https://github.com/hn3000/ats-types
```

Import the types into your .ts or .tsx file
```
import * as ATS from '@hn3000/ats-types';
```

And use the types to handle parsed Audio Trip Song files
```
function somethingSomething(song: ATS.AudioTripSong) {
  const id = song.metadata.songID;
  ...
}
```

I use this utility function to parse the .ats which mostly is valid JSON,
with the exception of some cases where NaN is used instead of a valid number.
```
import { AudioTripSong } from '@hn3000/ats-types';

export const BPM_NAN_BPM = -667; // neighbor of the beast -- marker for later
export function fixNaN(json: string) {
  return json.replace(/NaN/, `${BPM_NAN_BPM}`);
}

export function parseSongFile(chars: string, fn: string): AudioTripSong {
  try {
    return JSON.parse(fixNaN(chars));
  } catch (x) {
    console.log(`could not parse song file ${fn}, got ${x}`);
  }

}
```
