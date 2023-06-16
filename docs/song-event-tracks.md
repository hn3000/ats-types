# Environment - Song Event Tracks

While earlier choreos have custom built Scenes based on coded effects, later ones make use of Audio Trip's flexible environment generation system.

An important part of that are the songEventTracks,
specifications of events tied to certain times.

## EVENT TRACKS

There are several standard event track types:

- Staging - Controls the timespan that a "staging group" is on or off.

- Gen-Static - Used to generate objects which do not move toward the player (or at least their parent object doesn't)

- Gen-Slow, Gen-Fast, Gen-Intense - Used to generate objects which move toward the player and specify where in time (and therefore space) they will appear. Slow things move at 80m/sec, Fast at 120m/sec, and Intense at 240m/sec.

- Scene Lighting - Controls things like fog levels, current skybox, and active lights.

- Lit-Close, Lit-Far, Lit-Spots - Holds events which tell certain light/emissive effects to flash.

- React To Beat - Turns on/off effects which automatically react to every beat. This is for times when, for example, a song may have a quiet part with no audible beats so you don't want something flashing or pulsing to the beat of the song since that would feel wrong. Use this to turn those effects off temporarily, and then back on again.

- Animations - This is used to move, scale, and generally animate objects.

## EVENTS

Event tracks hold a list of events. An event always has a `startTimeInSeconds`
and an `endTimeInSeconds`. For most events, these are identical, indicating it's
a one-time, one-off sort of event. But some events actually use both of these
values to indicate a span of time something should happen.

In addition to the start and end time values, all events also have a
`payloadType`. The number in this field determines what kind of values, if any,
should be found in the payload field. Payloads provide information about what
should happen at that point in time or time span.

Here are some example `payloadType` values we found in the OST, showing example
`payload` values corresponding to each `payloadType`:

- 0: none - payload should be set to empty string ""
- 1: color like "RGBA(0.225, 0.000, 0.400, 1.000)" (used for "high inside beat" and "low inside beat" with sceneName = "Show Me")
- 2: floating point value (encoded as string)
- 3: integer value (encoded as string)
- 4: string (e.g. scene names in Staging track)
-
- JSON encoded event-track-specifc values:
- 5: "{\"idMask\":134217728,\"color\":{\"r\":0.0,\"g\":1.458823561668396,\"b\":1.4980392456054688,\"a\":1.0}}" (in Lit-Close, Lit-Far, Lit-Spots)
- 6:
- 8: `ATSpawnPayload`
     "{\"group\":\"assemble 1\",\"obj\":\"assembling gate\",\"idMask\":1,\"zOffset\":NaN}" (in Gen-Fast)
     "{\"group\":\"gotcha\",\"obj\":\"gate_beat\",\"idMask\":0,\"zOffset\":NaN}" (in Gen-Intense)
- 9: `ATLightingPayload`
- 11: "{\"clipName\":\"assembleccw\",\"beatSpan\":2.0,\"wrapMode\":8,\"idMask\":4}" (in Animations)
- 12: "{\"start\":{\"r\":0.0,\"g\":1.4588240385055543,\"b\":1.4980000257492066,\"a\":1.0},\"end\":{\"r\":0.0,\"g\":0.9647058844566345,\"b\":1.0,\"a\":1.0},\"duration\":0.0,\"idMask\":0}" (in Lit-Close, Lit-Far)

Most of the payloads are encoded as stringified JSON, with the addition of `NaN`
values that would not be allowed in regular JSON but are allowed here for
otherwise numerical fields.

## PAYLOADS

Now let's talk about payload types. I'll break them down in the context of
which types would typically be used in which tracks:

### Staging

This track should only have a text payload type which is the name of the staging
group to be enabled for the span of that event.

Text (payloadType: 4) - This is just a basic string of text.

In the case of the Staging track, the `startTimeInSeconds` and 
`endTimeInSeconds` are important because they control when objects in the group
named in the payload field will turn on and off. They will turn on at the start
time, and turn off again at the end time. For the most part, this is the only
track where both start and end times are important. Most other tracks just treat
events as one-time momentary things, and the start and end times are usually
identical.

Note: In a [discussion on the ATCD](https://discord.com/channels/734199944130592818/734200516099309619/1118669371011768500) ,
champfriend describes an issue where differing values for `startTimeInSeconds`
and `endTimeInSeconds` cause performance problems. He credits user @Billiegorgon
for identifying this as the cause of the problems. Unless/until the issue is 
fixed in Audio Trip, it's probably best to always use the exact same values for
both fields unless they are used in a "Staging" track as described above.

### Gen-X

The generation tracks use an `ATSpawnPayload` which specifies which object to
spawn at the specified point in time (or in the case of Gen-Static, the time
parameters aren't important), and which staging group it should be part of so
all objects in that group can be turned on/off together using staging events
in the Staging track.

`ATSpawnPayload` (payloadType: 8):

- `group`: The name of the staging group to which this object should belong.
  This is the name used in the Staging track events to turn entire groups of
  objects on for spans of time.

- `obj`: The name of the object to be spawned at the specified point in time
  (point in space that, due to the speed of its movement toward the player,
  will arrive at the player's position at the specified startTimeInSeconds).

- `idMask`: A 32-bit bitfield used by scripts to filter out events they do/don't
  want to react to. In this case, it is used to tell any interested scripts on
  the generated object which effect IDs to listen for.
  A value of 0 means "Don't Care" and thus will react to all events on the event
  track it is listening to. Which event track an object listens to depends on
  the object itself. If the value is non-zero, any events that fire with an ID
  that matches any of the bits set to 1 in the idMask will cause the object to
  react. Thus it is possible to have 32 unique IDs for a single event track.
  You would use this feature to, for example, have multiple flashing objects
  visible at one time that all listen to a single event track (such as
  Lit-Close), but which you don't want to all flash at the same time on every
  event, but rather want to flash in a sequence. You would use effect IDs with
  different values that match different idMask of each object.

- `zOffset`: This gives you a way to give an optional additional offset in the
  forward direction, specified in meters. A positive value results in an object
  being nudged in the forward direction by the specified number of meters. A
  negative value does the opposite. The default value of this is NaN(*) which is
  recommended unless you know for sure you want an offset. This will ensure this
  value is ignored and only the startTimeInSeconds is used to determine the
  placement of the object.
  (*)NaN as literal text, not a string -- invalid in JSON

### Scene Lighting

The Scene Lighting track only uses payloads of type `ATLightingPayload`.

`ATLightingPayload` (payloadType: 9):

* `name`: A descriptive name for this lighting setup. This is used in our
  editing interface to make it easier to read/see what's going on. 
  It isn't used by Audio Trip itself.

* `lightSet`: The name of the set of lights to activate upon this event. These
  are sets of (usually of just one) dynamic lights that illuminate and color
  the scene.

* `cubemap`: The name of the cubemap to use for the skybox and 
  reflections/global illumination.

* `startFogDensity`: The fog density (lower numbers place the fog further away)
  to start with at the time this event is fired.

* `fogDensity`: The target fog density.

* `fogTransitionBeats`: The number of beats it will take to transition from
  `startFogDensity` to .

* `startSkyExposure`: The starting exposure value of the skybox when the event
  is fired. Higher values are brighter.

* `skyExposure`: The target sky exposure.

* `expTransitionBeats`: The number of beats it will take to transition from
  `startSkyExposure` to `skyExposure`.

### Lit-X

The Lit-Close, Lit-Far, and Lit-Spots tracks use a couple of different payload types:

ATColorPayload (payloadType: 5):
idMask: A bitfield to control which objects should react to this event. For more info see the explanation above for ATSpawnPayload.

color: The color of the event. This is normally the color an emissive object should flash, and will then fade either to black or transparent, depending on the object.

ATColorDeltaPayload (payloadType: 12):
start: The color something should start out with (usually emissive objects).

end: The color something should fade toward.

duration: The time taken to fade from start to end. In most cases, this value is interpreted as the number of beats. But some effects interpret it as seconds. If set to NaN or 0, the object's default duration will be used, depending on the object.

idMask: A bitfield to control which objects should react to this event. For more info see the explanation above for ATSpawnPayload.
. 
[20:03] Punchey: React To Beat
The React To Beat track only uses the Int (Integer) payload type.

Int (payloadType: 3)
This payload type can hold any integer value, but in the case of React To Beat, it is treated as a boolean, so the valid values in that case are 0 and 1 indicating false or true, respectively. In the case of the React To Beat track, beats following an event with payload 0 will not trigger effects set to react to each song beat. And after events with payload 1, effects set to react to each song beat will resume reacting to each beat. 

## Animations

The Animations track mainly uses two payload types:

ATIDPayload (payloadType: 7)
idMask: A bitfield to control which objects should react to this event. For more info see the explanation above for ATSpawnPayload.

ATAnimClipPayload (payloadType: 11):
clipName: The name of the animation clip to play when this event fires.

beatSpan: The number of beats the animation should span. So a value of 4 would cause a given animation to take 4 beats to complete.

wrapMode: Controls what the animation does when it reaches the end. Possible values are:
0 - Default
1 - Once/Clamp
2 - Loop
4 - PingPong
8 - ClampForever
For details on these, see the Unity documentation:
https://docs.unity3d.com/ScriptReference/WrapMode.html

idMask: A bitfield to control which objects should react to this event. For more info see the explanation above for ATSpawnPayload. 




------

[20:39] Punchey: To use a lot of these, you will need to know things like names of spawnable objects, what kinds of effects those objects support, animation clip names, etc. 
[20:40] Punchey: I will cover that in a separate thread at a later time. 
[20:40] Punchey: But for now, you can use the values in the built-in .ats files as a reference for some of the valid combinations you can use.
