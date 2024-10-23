class FoobarClass {
    private foo_uie_webview: any;
    constructor() {
        try {
            this.foo_uie_webview =
                window.chrome.webview.hostObjects.sync.foo_uie_webview;
        } catch {
            // not in a webview
        }
    }

    public getString(titleFormatStr: string) {
        return (
            this.foo_uie_webview?.GetFormattedText(titleFormatStr) ??
            titleFormatStr
        );
    }
}

export function OnPlaybackStarting(command: any, paused: any) {
    console.log('onPlaybackStarting', command, paused);
}

export const Foobar = new FoobarClass();
