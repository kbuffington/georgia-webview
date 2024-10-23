export {};

declare global {
    interface Window {
        chrome: {
            webview: {
                hostObjects: {
                    sync: any;
                };
            };
        };
    }
}
