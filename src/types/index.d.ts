export {};

declare global {
    interface Window {
        chrome: {
            webview: {
                hostObjects: {
                    sync: {
                        foo_uie_webview: UieWebVew;
                    };
                };
                releaseBuffer: (buffer: ArrayBuffer) => void;
            };
        };
        fbEventEmitter: {
            subscribe: (eventName: string, callback: (...args) => void, id: number) => void;
            emit: (eventName, ...args) => {};
            unsubscribe: (eventName: string, id: number) => {};
        };
        fbSharedBuffer: ArrayBuffer;
        fbAudioSamples: Float64Array;
    }
}
