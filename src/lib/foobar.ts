import { FoobarCallbacks } from '@/types/types';

export class FoobarClass {
    private subscribeAttempts = 0;
    private id: number;
    private callbacks: FoobarCallbacks;

    constructor(cbs: FoobarCallbacks) {
        this.id = Math.round(Math.random() * 100000);
        this.callbacks = cbs;
    }

    // listeners.js may load after this class is instantiated, so subscribe later
    public deferredSubscribe() {
        if (window.fbEventEmitter) {
            // console.log('found fbEventEmitter');
            window.fbEventEmitter.subscribe('onPlaybackStarting', this.callbacks.onPlaybackStarting, this.id);
            window.fbEventEmitter.subscribe('onPlaybackNewTrack', this.callbacks.onPlaybackNewTrack, this.id);
            window.fbEventEmitter.subscribe('onPlaybackStop', this.callbacks.onPlaybackStop, this.id);
            window.fbEventEmitter.subscribe('onPlaybackSeek', this.callbacks.onPlaybackSeek, this.id);
            window.fbEventEmitter.subscribe('onPlaybackPause', this.callbacks.onPlaybackPause, this.id);
            window.fbEventEmitter.subscribe('onPlaybackEdited', this.callbacks.onPlaybackEdited, this.id);
            window.fbEventEmitter.subscribe('onPlaybackDynamicInfo', this.callbacks.onPlaybackDynamicInfo, this.id);
            window.fbEventEmitter.subscribe(
                'onPlaybackDynamicTrackInfo',
                this.callbacks.onPlaybackDynamicTrackInfo,
                this.id
            );
            window.fbEventEmitter.subscribe('onPlaybackTime', this.callbacks.onPlaybackTime, this.id);
            window.fbEventEmitter.subscribe('onVolumeChange', this.callbacks.onVolumeChange, this.id);
            window.fbEventEmitter.subscribe('onSharedBufferReceived', this.callbacks.onSharedBufferReceived, this.id);
        } else if (this.subscribeAttempts < 10) {
            this.subscribeAttempts++;
            setTimeout(
                () => {
                    this.deferredSubscribe();
                },
                (this.subscribeAttempts - 1) * 100
            );
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
        window.fbEventEmitter.unsubscribe('onSharedBufferReceived', this.id);
    }
}
