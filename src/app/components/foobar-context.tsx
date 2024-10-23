import { FoobarMetadata, defaultMetadata, refreshMetadata } from '@/lib/metadata';
import { FbWebView } from '@/types/globals';
import React from 'react';

type PlayerState = {
    isPlaying: boolean;
    isPaused: boolean;
    isStopped: boolean;
};

const defaultPlayerState: PlayerState = {
    isPlaying: false,
    isPaused: false,
    isStopped: true,
};

const PlayerMethods = {
    Stop: () => {
        FbWebView.Stop();
    },
    Play: () => {
        FbWebView.Play(false); // test other values?
    },
    TogglePause: () => {
        FbWebView.TogglePause();
    },
    Previous: () => {
        FbWebView.Previous();
    },
    Next: () => {
        FbWebView.Next();
    },
    Random: () => {
        FbWebView.Random();
    },
    VolumeDown: () => {
        FbWebView.VolumeDown();
    },
    VolumeUp: () => {
        FbWebView.VolumeUp();
    },
    ToggleMute: () => {
        FbWebView.ToggleMute();
    },
    Seek: (time: number) => {
        FbWebView.Seek(time);
    },
    SeekDelta: (delta: number) => {
        FbWebView.SeekDelta(delta);
    },
    toggleStopAfterCurrent: () => {
        FbWebView.ToggleStopAfterCurrent();
    },
    // non-FB methods
    refreshMetadata: () => {
        refreshMetadata();
    },
};

type FoobarInterface = {
    metadata: FoobarMetadata;
    playerState: PlayerState;
    controls: typeof PlayerMethods;
};

export const FoobarContext = React.createContext<FoobarInterface>({} as any);

export const FoobarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const defaultValues: FoobarInterface = {
        metadata: defaultMetadata,
        playerState: defaultPlayerState,
        controls: PlayerMethods,
    };
    return <FoobarContext.Provider value={defaultValues}>{children}</FoobarContext.Provider>;
};
