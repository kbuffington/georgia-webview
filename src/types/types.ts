import { FbSharedBufferReceivedEvent } from './events';

export type UieWebVew = {
    CanSeek: boolean;
    ComponentVersionText: string;
    ComponentVersion: number;
    Length: number;
    Position: number;
    IsMuted: boolean;
    IsPlaying: boolean;
    IsPaused: boolean;
    StopAfterCurrent: boolean;
    Volume: number;
    GetFormattedText: (titleFormatString: string) => string;
    Next: () => void;
    Play: (val: boolean) => void;
    Previous: () => void;
    Random: () => void;
    Seek: (time: number) => void;
    SeekDelta: (delta: number) => void;
    Stop: () => void;
    ToggleMute: () => void;
    TogglePause: () => void;
    ToggleStopAfterCurrent: () => void;
    VolumeDown: () => void;
    VolumeUp: () => void;
};

export const enum StopReason {
    User = 'User',
    StartingAnother = 'Starting another',
    EOF = 'EOF',
}

export const enum PlaybackStartCommand {
    Play = 'Play',
    Next = 'Next',
    Previous = 'Prev',
}

export type FoobarCallbacks = {
    // Called when playback starts
    onPlaybackStarting: (command: PlaybackStartCommand, paused: boolean) => void;
    // Called when playing track changes
    onPlaybackNewTrack: () => void;
    // Called when playback stops
    onPlaybackStop: (reason: StopReason) => void;
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
    // Called when the shared buffer does not exist yet or when the channel configuration changes.
    onSharedBufferReceived: (evt: FbSharedBufferReceivedEvent) => void;
};
