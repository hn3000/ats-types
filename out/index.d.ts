export declare type TSceneName = "Addicted To A Memory" | "Anemone" | "Bangarang" | "Dance Monkey" | "Drift" | "Golden Pineapple" | "Jurassic Snack Pack" | "Just Dance" | "Krishna" | "Mandala" | "Red" | "Satisfaction" | "Show Me" | "Sofi Needs a Ladder" | "X-TYPE" | "Universal" | "WorldGen";
export declare type TPlatform = "OC" | "ST";
export interface ITempoSection {
    startTimeInSeconds: number;
    beatsPerMeasure: number;
    beatsPerMinute: number;
    doesStartNewMeasure: true;
}
export declare type TSongEventType = "First Beat" | "Short Start" | "Short Stop" | "Song End" | "Animations" | "Gen-Fast" | "Gen-Intense" | "Gen-Slow" | "Gen-Static" | "Lit-Close" | "Lit-Far" | "Lit-Spots" | "React To Beat" | "Scene Lighting" | "Staging" | "Vignettes" | "Animations" | "Bangarang" | "Beat" | "Beats" | "BeatsAll" | "Boobumboobum" | "BowWowWow" | "Buzz" | "Censor" | "Ding" | "Ifee" | "IfeePrelude" | "Intense Beats" | "Lasers" | "Machines" | "Misc" | "OhYay" | "ParticleBeam" | "Pew" | "Placement - LetsGo" | "Placement_fast" | "Placement_slow" | "Play" | "Pow" | "Scaling" | "SceneLighting" | "Shouts" | "Siren" | "Sky" | "Snares" | "badum" | "bass" | "bells" | "bloop" | "bump" | "da da" | "dance" | "deedee" | "dingading" | "dingading2" | "dingading3" | "doonoo" | "drums" | "dun" | "dunnah" | "errerr" | "funky bass" | "funky clap" | "grr" | "hey" | "high inside beat" | "horn" | "hypnotic" | "jugajuga" | "just" | "kazoo" | "letsgo" | "low inside beat" | "low" | "lyric" | "macromove" | "maracas L" | "maracas R" | "micromove" | "ohoh" | "ooo" | "piano" | "placement - far" | "placement - flowers" | "placement - near closed" | "placement - near open" | "placement - near" | "placement - vast" | "placement -dunnah" | "pressure" | "punch" | "punctuated word" | "snare" | "strum" | "twinkles" | "war drums" | "weeoo" | "wooh" | "woowoo";
export interface ISongEvent {
    startTimeInSeconds: number;
    endTimeInSeconds: number;
    /** Type of payload, see discussion at payload below */
    payloadType: number;
    /**
     * a string-encoded payload, the type is given by payload type:
     *
     * 0: none - payload should be set to empty string ""
     * 1: color like "RGBA(0.225, 0.000, 0.400, 1.000)" (used for "high inside beat" and "low inside beat" with sceneName = "Show Me")
     * 2: floating point value (encoded as string)
     * 3: integer value (encoded as string)
     *
     * JSON encoded event-track-specifc values:
     * 4: string (e.g. scene names in Staging track)
     * 5: "{\"idMask\":134217728,\"color\":{\"r\":0.0,\"g\":1.458823561668396,\"b\":1.4980392456054688,\"a\":1.0}}" (in Lit-Close, Lit-Far, Lit-Spots)
     * 6:
     * 8: "{\"group\":\"assemble 1\",\"obj\":\"assembling gate\",\"idMask\":1,\"zOffset\":NaN}" (in Gen-Fast)
     *    "{\"group\":\"gotcha\",\"obj\":\"gate_beat\",\"idMask\":0,\"zOffset\":NaN}" (in Gen-Intense)
     * 9:
     * 11: "{\"clipName\":\"assembleccw\",\"beatSpan\":2.0,\"wrapMode\":8,\"idMask\":4}" (in Animations)
     * 12: "{\"start\":{\"r\":0.0,\"g\":1.4588240385055543,\"b\":1.4980000257492066,\"a\":1.0},\"end\":{\"r\":0.0,\"g\":0.9647058844566345,\"b\":1.0,\"a\":1.0},\"duration\":0.0,\"idMask\":0}" (in Lit-Close, Lit-Far)
     */
    payload: string;
}
export interface ISongEventTrack {
    /** The name/ID of the track. Possible values were collected from cloned built-in choreos. */
    eventID: TSongEventType;
    /** List of events in this track. */
    events: ISongEvent[];
}
/**
 * Represents time in the system of beats defined by the tempo sections given
 * in the song's metadata. A beat time is given as a Mixed Number
 * ( https://en.wikipedia.org/wiki/Fraction#Mixed_numbers )
 * where the fractional part is simplified (reduced) as much as possible.
 */
export interface IBeatTime {
    /** An integer value indicating the beat number, in whole beats */
    beat: number;
    /** The numerator for any fractional component of the beat time. i.e. an event that occurs three-quarters into a beat would have a numerator of 3 and a denominator of 4 */
    numerator: number;
    /** The denominator for any fractional component of the beat time. i.e. an event that occurs on a half beat would have a numerator of 1 and a denominator of 2. Fractions are reduced as much as possible, i.e. numerator = 2 and denominator = 4 would not be used. */
    denominator: number;
}
export interface IChoreoEvent {
    /**
     * 0: Barrier
     * 1: Left-hand Gem
     * 2: Right-hand Gem
     * 3: Ribbon (left)
     * 4: Ribbon (right)
     * 5: Drum (left)
     * 6: Drum (right)
     * 7: DirGem (left)
     * 8: DirGem (right)
     */
    type: number;
    /**  Indicates whether a trail should connect this object to the next object of the same hand (only applicable to regular gems). */
    hasGuide: boolean;
    /** when in the track does this event occur? */
    time: IBeatTime;
    /** The beat division at which this event was recorded (i.e. 1 = whole beat, 2 = half beat, 4 = quarter beat, etc), important mainly for Ribbons. */
    beatDivision: number;
    /**
     * Position of Gem in the 2D plane at `time`
     * Coordinates are in meters for a reference dancer of approx. 1.55m height
     * - x = 0 is center, negative is left, positive is right
     * - y = 0 is floor level, positive numbers are above floor
     * - z is usually 0
     *
     * For Ribbons, only the entry point is positioned using the position,
     * everything after is relatively positioned using the `subPositions`
     * array.
     *
     * For barriers (type=0), coordinates are used differently:
     * - x ignored for barriers
     * - y distance of the positioning reference point (not the bottom of the barrier) from x=0,y=0
     * - z rotation in degrees around x=0,y=0, applied after the y offset
     *
     */
    position: {
        x: number;
        y: number;
        z: number;
    };
    /**
     *  Array of additional positions associated with this event. For Drums and
     * DirGems only a single sub-position is used, and the X and Y components are
     * used to specify the degrees about the X and Y axes the Drum/DirGem should
     * be rotated. For ribbons, each sub-position in the array represents an
     * X,Y offset, in “body space” relative to the “head”/start point of the
     * ribbon. NOTE: This means the first element in this array for a ribbon will
     * always be X=0, Y=0, Z=0 as it coincides with the very start of the ribbon.
     * The Z component is not used and instead the distance between each
     * sub-position is determined by the beatDivision specified above.
     * Ribbons are splines, and each sub-position is a control point. Therefore,
     * for smooth ribbons, it is recommended that a beatDivision of 1 or 2 be
     * used and no more.
     */
    subPositions: {
        x: number;
        y: number;
        z: number;
    }[];
    /**
     * An integer that serves as an identifier that is broadcast in the event that
     * this gameplay element is successfully executed. For example, in the Credits
     *  scene, a given credit object explodes if, and only if, the drum with its
     * corresponding broadcastEventID is smashed successfully.
     */
    broadcastEventID: number;
}
export interface IChoreography {
    header: {
        id: string;
        /** Descriptive Name, e.g. Beginner, Regular, Expert -- can be anything */
        name: string;
        /** How far ahead of the player should choreography elements be spawned? */
        spawnAheadTime: IBeatTime;
        /** Speed of Gems in m/s. Usual values are: Beginner - 15, Regular - 20, Expert - 30 */
        gemSpeed: number;
    };
    data: {
        events: IChoreoEvent[];
    };
}
export interface AudioTripSong {
    metadata: {
        custom: boolean;
        authorID: {
            platformID: TPlatform;
            displayName: string;
            accountID: string;
        };
        /** Name of the .ogg file for the song or empty for built-in songs (see songID). */
        songFilename: string;
        /**
         * Hash for the song, leave empty when songFilename given (Audio Trip will calculate the hash)
         * Specific values for built-in songs:
         * - "00" - Flying Noodles
         * - "0"  -
         * - "1"  - Anemone, Naden
         * - "2"  - Bangarang, Skrillex
         * - "3"  - Addicted To A Memory, Zedd
         * - "4"  - Jurassic Snack Pack, PrototypeRaptor
         * - "5"  - Mandala, Blastoyz
         * - "6"  -
         * - "7"  - Sofi Needs A Ladder, deadmau5
         * - "8"  - Just Dance, Lady Gaga
         * - "9"  - Drift, Rafaël Frost
         * - "10" - Show Me, Tiësto, DallasK
         * - "11" - Golden Pineapple, Tolan,
         * - "12" - X-TYPE, I KILL PXLS
         * - "13"
         * - "14"
         * - "15" - Can't Take It (pt2), Hot Rod Elegants
         * - "16" - Freedom, The Originals
         * - "17" - Keep My Cool, Benj Heard
         *
         * - "b983058f6236549d08f6d371044826da29bca4bd8d8b0f52073731112659109e" - Dance Monkey, Tones And I
         * - "1a6e5b76b8bc68e311965123ae9f7adb670c1069b47884fc68d85b5adb823ea1" - Krishna, Dropgun
         */
        songID: string;
        title: string;
        artist: string;
        koreography: {
            m_FileID: 0;
            m_PathID: 0;
        };
        descriptor: string;
        sceneName: TSceneName;
        avgBPM: number;
        /**
         * This is a list of one or more “tempo sections” which define the
         * beats per minute and beats per measure of a region of the song.*/
        tempoSections: ITempoSection[];
        /**
         * An array of event tracks, each containing one or more events. This is
         * mostly only used internally to Audio Trip, but is used for many things,
         * such as triggering environmental effects. In some song scenes, the
         * environmental objects listen for events on specifically named tracks,
         * such as “BeatsAll” which is a list of all the beats the song should
         * emphasize visually. */
        songEventTracks: ISongEventTrack[];
        /**
         * The number of seconds into the .ogg file the song should actually begin
         * playing. This is also the earliest point you can author any choreography.
         * It is recommended that you place at least a couple of seconds between
         * where the song begins playing and the first choreography so that the
         * player has some time to get ready. */
        firstBeatTimeInSeconds: number;
        songEndTimeInSeconds: 0.0;
        songShortStartTimeInSeconds: -1.0;
        songShortStopTimeInSeconds: -1.0;
        /**  The length of the song, in seconds (used to display the song length in the UI) */
        songFullLengthInSeconds: number;
        songShortLengthInSeconds: number;
        songStartFadeTime: number;
        songEndFadeTime: number;
        /** Start time in song for preview in hub world. */
        previewStartInSeconds: number;
        /** Duration of preview for hub world. */
        previewDurationInSeconds: number;
        songStartBufferInSeconds: number;
        choreoJSONs: [];
        animClips: [];
        speed: number;
        quantizeSize: number;
        includeInArcades: true;
        supportedModalitySets: 2;
    };
    choreographies: {
        list: IChoreography[];
    };
}
