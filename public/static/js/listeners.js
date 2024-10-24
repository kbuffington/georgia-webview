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

// global fbEventEmitter that components can subscribe to
if (!window.fbEventEmitter) {
    window.fbEventEmitter = new FbEventEmitter();
}

/**
 * Will call window.FoobarHandlers.On<methodName> maybe?
 */

function OnPlaybackStarting(command, paused) {
    fbEventEmitter.emit('onPlaybackStarting', command, paused);
}

function OnPlaybackNewTrack() {
    fbEventEmitter.emit('onPlaybackNewTrack', {});
}

function OnPlaybackStop(reason) {
    fbEventEmitter.emit('onPlaybackStop', reason);
}

// Called when the user seeks to a specific time.
function OnPlaybackSeek(time) {
    fbEventEmitter.emit('onPlaybackSeek', time);
}

// Called when playback pauses or resumes.
function OnPlaybackPause(paused) {
    fbEventEmitter.emit('onPlaybackPause', paused);
}

// Called when the currently played file gets edited.
function OnPlaybackEdited() {
    fbEventEmitter.emit('onPlaybackEdited');
}

// Called when dynamic info (VBR bitrate etc...) changes.
function OnPlaybackDynamicInfo() {
    fbEventEmitter.emit('onPlaybackDynamicInfo');
}

// Called when the per-track dynamic info (stream track titles etc...) change. Happens less often than OnPlaybackDynamicInfo().
function OnPlaybackDynamicTrackInfo() {
    fbEventEmitter.emit('onPlaybackDynamicTrackInfo');
}

// Called, every second, for time display.
function OnPlaybackTime(time) {
    fbEventEmitter.emit('onPlaybackTime', time);
}

// Called when the user changes the volume.
function OnVolumeChange(volume) {
    fbEventEmitter.emit('onVolumeChange', volume);
}
