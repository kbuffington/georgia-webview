export class FoobarClass {
    private foo_uie_webview: any;
    private subscribeAttempts = 0;
    private id: number;

    constructor() {
        this.id = Math.round(Math.random() * 100000);
        try {
            this.foo_uie_webview = window.chrome.webview.hostObjects.sync.foo_uie_webview;
        } catch {
            // not in a webview
        }
    }

    // listeners.js may load after this class is instantiated, so subscribe later
    public deferredSubscribe() {
        if (window.fbEventEmitter) {
            // console.log('found fbEventEmitter');
            window.fbEventEmitter.subscribe('onPlaybackStarting', this.onPlaybackStarting, this.id);
            window.fbEventEmitter.subscribe('onPlaybackNewTrack', this.onPlaybackNewTrack, this.id);
            window.fbEventEmitter.subscribe('onPlaybackStop', this.onPlaybackStop, this.id);
            window.fbEventEmitter.subscribe('onPlaybackSeek', this.onPlaybackSeek, this.id);
            window.fbEventEmitter.subscribe('onPlaybackPause', this.onPlaybackPause, this.id);
            window.fbEventEmitter.subscribe('onPlaybackEdited', this.onPlaybackEdited, this.id);
            window.fbEventEmitter.subscribe('onPlaybackDynamicInfo', this.onPlaybackDynamicInfo, this.id);
            window.fbEventEmitter.subscribe('onPlaybackDynamicTrackInfo', this.onPlaybackDynamicTrackInfo, this.id);
            window.fbEventEmitter.subscribe('onPlaybackTime', this.onPlaybackTime, this.id);
            window.fbEventEmitter.subscribe('onVolumeChange', this.onVolumeChange, this.id);
        } else if (this.subscribeAttempts < 10) {
            this.subscribeAttempts++;
            setTimeout(() => {
                this.deferredSubscribe();
            }, (this.subscribeAttempts - 1) * 100);
        }
    }

    public unsubscribe() {
        console.log('unsubbing');
        window.fbEventEmitter.unsubscribe('onPlaybackStarting', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackNewTrack', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackStop', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackSeek', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackPause', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackEdited', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackDynamicInfo', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackDynamicTrackInfo', this.id);
        window.fbEventEmitter.unsubscribe('onPlaybackTime', this.id);
        window.fbEventEmitter.unsubscribe('onVolumeChange', this.id);
    }

    public getString(titleFormatStr: string) {
        return this.foo_uie_webview?.GetFormattedText(titleFormatStr) ?? titleFormatStr;
    }

    public onPlaybackStarting(command: string, paused: boolean) {
        console.log(' >>> onPlaybackStarting', command, paused);
    }

    public onPlaybackNewTrack() {
        console.log(' >>> onPlaybackNewTrack');
    }

    public onPlaybackStop(reason: string) {
        console.log(' > onPlaybackStop', reason);
    }

    // Called when the user seeks to a specific time.
    public onPlaybackSeek(time: number) {
        console.log(' > onPlaybackSeek', time);
    }

    // Called when playback pauses or resumes.
    public onPlaybackPause(paused: boolean) {
        console.log(' > onPlaybackPause', paused);
    }

    // Called when the currently played file gets edited.
    public onPlaybackEdited() {
        console.log(' > onPlaybackEdited');
    }

    // Called when dynamic info (VBR bitrate etc...) changes.
    public onPlaybackDynamicInfo() {
        console.log(' > onPlaybackDynamicInfo');
    }

    // Called when the per-track dynamic info (stream track titles etc...) change. Happens less often than OnPlaybackDynamicInfo().
    public onPlaybackDynamicTrackInfo() {
        // console.log(' > onPlaybackDynamicTrackInfo');
    }

    // Called, every second, for time display.
    public onPlaybackTime(time: number) {
        // console.log(' > onPlaybackTime', time);
    }

    // Called when the user changes the volume.
    public onVolumeChange(volume: number) {
        console.log(' > onVolumeChange', volume);
    }
}

export const Foobar = new FoobarClass();
