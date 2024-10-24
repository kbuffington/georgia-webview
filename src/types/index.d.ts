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
        fbEventEmitter: {
            subscribe: (eventName: string, callback: (...args) => void, id: number) => void;
            emit: (eventName, ...args) => {};
            unsubscribe: (eventName: string, id: number) => {};
        };
    }
}
