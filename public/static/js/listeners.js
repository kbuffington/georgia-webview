console.log('listeners.js loaded');

/**
 * Will call window.FoobarHandlers.On<methodName> maybe?
 */

function OnPlaybackStarting(command, paused) {}

function OnPlaybackNewTrack() {
    console.log('onplaybacknewtrack');

function OnPlaybackStop(reason) {
    console.log('playback stopped', reason);
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
}

// Called when the user changes the volume.
function OnVolumeChange(newValue) {
}
