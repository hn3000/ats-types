
# WebSocketServer -- status info for OBS overlays

To support OBS overlays written in HTML, the game opens a WebSocketServer
on port 48998 and only reachable from the same machine, on 127.0.0.1 .
(The url is ws://127.0.0.1/ -- you can add a path after that, but it does not matter.)

Only one connection to the WebSocketServer is supported
at this time.

## Status Data

Once you're connected to the game, regular messages will
arrive on the WebSocket connection. The messages are encoded
as JSON and can be parsed using the standard JSON object.

While in the hub world, the socket will send out status messages like this:

```json
{
   "gameVersion": "1.0.3066",
   "inSong": false
}
```

While a song is playing, the messages look like this:

```json
{
   "gameVersion": "1.0.3066",
   "inSong": true,
   "tripType": "FullTrip",
   "songLength": 375.23,
   "songTitle": "Jurassic Snack Pack",
   "songArtist": "PrototypeRaptor",
   "choreoName": "Expert",
   "choreographer": "Kinemotik Studios",
   "songID": "4",
   "choreoID": "6bc1bab19320ee19955d6f5fb4fa9e0262ed05a9a1e26c389c73af21904ab22b",
   "playerStatus": "Playing",
   "score": 9026,
   "multiplier": 1,
   "playerHealth": -1,
   -"curSongTime": 105.119
}
```

* `"tripType"` will be `"QuickTrip"`, `"FullTrip"` or `"Custom"`.

* `"playerStatus"` will be one of `"Playing"`, `"Finished"` or `"Failed"`.

* `"playerHealth"` is either `-1` (in "No Fail" mode) or a value between `0` and `1`.


## Configuration

The WebSocketServer can be configured using a file called `StatServer.cfg` that
should be in the same folder as the `Songs` and the `Playlist` folder or the 
`Player.log` and / or `Player-prev.log` files. 
(Only the `Songs` folder will always be present if you've run the game before.
The other files will usually also exist, but may be missing for some reason.)

The `StatServer.cfg` file looks like this:

```StatServer.cfg
ip: 127.0.0.1
port: 48998
rate: 0.1
```

If the game slows down while the WebSocket Server is in use, you
can try to enter a higher value for rate (it's given in seconds between
packets).

For the Oculus Quest (or Quest 2 and other Android-based headsets), the file
must be present because the WebSocketServer will not be usable (and therefore 
not run) on these platforms unless the ip is set to a value other than 
`127.0.0.1`. (The game checks if the file exists, but `ip: 127.0.0.1` would only
be reachable on the headset itself and not be very useful.)

To make the server available on a standalone headset, this configuration
is ideal, as it doesn't depend on the Wifi Network you're connected to:

```StatServer.cfg
ip: 0.0.0.0
```

The value `0.0.0.0` makes the WebSocketServer available on every network the
headset is connected to, so if you're playing on public Wifi networks, you may
not want to use this configuration.

If you also want to specify port and rate, the file would look like this:

```StatServer.cfg
ip: 0.0.0.0
port: 48998
rate: 0.1
```

But again, be aware that this allows connections from other devices on the
same network, so don't use this on public Wifi.

To connect to the WebSocketServer for a Quest or other headset, you need to
obtain the IP address of the headset. This can be done using SideQuest (it
shows the IP in the title bar when the headset is connected) or any other
way, but it won't work using Websites on the internet -- because you need
the address that is used on your local network.

