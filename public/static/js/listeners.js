console.log('listeners.js loaded');

/**
 * Will call window.FoobarHandlers.On<methodName>
 */

function OnPlaybackStarting(command, paused) {}

function OnPlaybackNewTrack() {
    console.log('onplaybacknewtrack');
    // Refresh()

    // var TestDataURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

    // var DataURI = chrome.webview.hostObjects.sync.foo_uie_webview.GetArtwork("front"); // "front", "back", "disc", "icon", "artist"

    // document.getElementById("Artwork").src = (DataURI.length != 0) ? DataURI : TestDataURI;
}

function OnPlaybackStop(reason) {
    console.log('playback stopped', reason);
    //  document.getElementById("Info").style.display = 'none';
    // document.getElementById('StopReason').textContent = reason; // "User" / "EOF" / "Starting another" / "Shutting down"

    // RefreshProperties();
}

// Called when the user seeks to a specific time.
function OnPlaybackSeek(time) {
    // document.getElementById("Time").textContent = time; // in seconds
}

// Called when playback pauses or resumes.
function OnPlaybackPause(paused) {
    // document.getElementById("Paused").textContent = paused; // true / false
}

// Called when the currently played file gets edited.
function OnPlaybackEdited() {
    // Refresh();
}

// Called when dynamic info (VBR bitrate etc...) changes.
function OnPlaybackDynamicInfo() {
    // Refresh();
}

// Called when the per-track dynamic info (stream track titles etc...) change. Happens less often than OnPlaybackDynamicInfo().
function OnPlaybackDynamicTrackInfo() {
    // Refresh();
}

// Called, every second, for time display.
function OnPlaybackTime(time) {
    // document.getElementById("Time").textContent = time; // in seconds
    // document.getElementById("TrackTime").textContent = chrome.webview.hostObjects.sync.foo_uie_webview.GetFormattedText("[%playback_time%[/%length%]]");
}

// Called when the user changes the volume.
function OnVolumeChange(newValue) {
    // document.getElementById("Volume").textContent = newValue; // in dBFS
}
