export type FoobarCallbacks = {
    // Called when playback starts
    onPlaybackStarting: (command: string, paused: boolean) => void;
    // Called when playing track changes
    onPlaybackNewTrack: () => void;
    // Called when playback stops
    onPlaybackStop: (reason: string) => void;
    // Called when the user seeks to a specific time.
    onPlaybackSeek: (time: number) => void;
    // Called when playback pauses or resumes.
    onPlaybackPause: (paused: boolean) => void;
    // Called when the currently played file gets edited.
    onPlaybackEdited: () => void;
    // Called when dynamic info (VBR bitrate etc...) changes.
    onPlaybackDynamicInfo: () => void;
    // Called when the per-track dynamic info (stream track titles etc...) change. Happens less often than OnPlaybackDynamicInfo().
    onPlaybackDynamicTrackInfo: () => void;
    // Called, every second, for time display.
    onPlaybackTime: (time: number) => void;
    // Called when the user changes the volume.
    onVolumeChange: (volume: number) => void;
};
