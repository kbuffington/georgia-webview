console.log('listeners.js loading');

class FbEventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback, id) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push({ callback, id });
    }

    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => listener.callback(...args));
        }
    }

    unsubscribe(eventName, id) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(listener => listener.id !== id);
        }
    }
}

// eslint-disable @typescript-eslint/no-unused-vars

// global fbEventEmitter that components can subscribe to
if (!window.fbEventEmitter) {
    window.fbEventEmitter = new FbEventEmitter();
}

/* eslint-disable @typescript-eslint/no-unused-vars */
function OnPlaybackStarting(command, paused) {
    window.fbEventEmitter.emit('onPlaybackStarting', command, paused);
}

function OnPlaybackNewTrack() {
    window.fbEventEmitter.emit('onPlaybackNewTrack', {});
}

function OnPlaybackStop(reason) {
    window.fbEventEmitter.emit('onPlaybackStop', reason);
}

// Called when the user seeks to a specific time.
function OnPlaybackSeek(time) {
    window.fbEventEmitter.emit('onPlaybackSeek', time);
}

// Called when playback pauses or resumes.
function OnPlaybackPause(paused) {
    window.fbEventEmitter.emit('onPlaybackPause', paused);
}

// Called when the currently played file gets edited.
function OnPlaybackEdited() {
    window.fbEventEmitter.emit('onPlaybackEdited');
}

// Called when dynamic info (VBR bitrate etc...) changes.
function OnPlaybackDynamicInfo() {
    window.fbEventEmitter.emit('onPlaybackDynamicInfo');
}

// Called when the per-track dynamic info (stream track titles etc...) change. Happens less often than OnPlaybackDynamicInfo().
function OnPlaybackDynamicTrackInfo() {
    window.fbEventEmitter.emit('onPlaybackDynamicTrackInfo');
}

// Called, every second, for time display.
function OnPlaybackTime(time) {
    window.fbEventEmitter.emit('onPlaybackTime', time);
}

// Called when the user changes the volume.
function OnVolumeChange(volume) {
    window.fbEventEmitter.emit('onVolumeChange', volume);
}
