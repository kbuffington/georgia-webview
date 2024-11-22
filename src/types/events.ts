// https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/javascript/sharedbufferreceivedevent
export type FbSharedBufferReceivedEvent = {
    getBuffer: () => ArrayBuffer;
    additionalData: {
        ChannelConfig: number;
        ChannelCount: number;
        SampleCount: number;
        SampleRate: number;
    };
    timeStamp: number;
    // sharedBuffer: ArrayBuffer; // this is only populated once getBuffer is called. Use the global window.fbSharedBuffer instead.
    // other standard event fields like source, currentTarget, etc.
};
