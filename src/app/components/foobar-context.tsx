import { FoobarClass } from '@/lib/foobar';
import { MetadataContext } from '@/app/components/metadata-context';
import { FbWebView } from '@/types/globals';
import { FoobarCallbacks, StopReason } from '@/types/types';
import React, { useContext, useEffect } from 'react';

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
    // refreshMetadata: (): FoobarMetadata => {
    //     return refresh();
    // },
};
type FoobarInterface = {
    // metadata: FoobarMetadata;
    playerState: PlayerState;
    controls: typeof PlayerMethods;
    foobar: FoobarClass;
    // listeners: FoobarListeners;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FoobarContext = React.createContext<FoobarInterface>({} as any);

export const FoobarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { refreshMetadata } = useContext(MetadataContext);
    const initValues: FoobarInterface = {
        playerState: defaultPlayerState,
        controls: PlayerMethods,
        foobar: {} as FoobarClass, // gets replaced below
    };

    const foobarCallbacks: FoobarCallbacks = {
        onPlaybackStarting: (command: string, paused: boolean) => {
            console.log(' >>> onPlaybackStarting', command, paused);
        },
        onPlaybackNewTrack: () => {
            refreshMetadata();
        },
        onPlaybackStop: (reason: StopReason) => {
            if (reason !== StopReason.StartingAnother) {
                refreshMetadata();
            }
        },
        onPlaybackSeek: (time: number) => {
            console.log(' > onPlaybackSeek', time);
        },
        onPlaybackPause: (paused: boolean) => {
            console.log(' > onPlaybackPause', paused);
        },
        onPlaybackEdited: () => {
            refreshMetadata();
        },
        onPlaybackDynamicInfo: () => {
            // console.log(' > onPlaybackDynamicInfo');
        },
        onPlaybackDynamicTrackInfo: () => {
            // console.log(' > onPlaybackDynamicTrackInfo');
        },
        onPlaybackTime: (time: number) => {
            // console.log(' > onPlaybackTime', time);
        },
        onVolumeChange: (volume: number) => {
            console.log(' > onVolumeChange', volume);
        },
        onSharedBufferReceived: evt => {
            console.log(' > onSharedBufferReceived', evt);
            if (window.fbSharedBuffer) {
                window.chrome.webview.releaseBuffer(window.fbSharedBuffer);
            }
            window.fbSharedBuffer = evt.getBuffer();
            window.fbAudioSamples = new Float64Array(window.fbSharedBuffer);
        },
    };
    initValues.foobar = new FoobarClass(foobarCallbacks);

    useEffect(() => {
        // refresh();
        initValues.foobar.deferredSubscribe();
        return () => {
            initValues.foobar.unsubscribe();
        };
    }, []);

    // Foobar.onPlaybackNewTrack = () => {
    //     defaultValues.controls.refreshMetadata();
    // };
    return <FoobarContext.Provider value={initValues}>{children}</FoobarContext.Provider>;
};
