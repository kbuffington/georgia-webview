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
    // sharedBuffer: ArrayBuffer; // probably don't want to expose this?
    // other standard event fields like source, currentTarget, etc.
};
