import { UieWebVew } from './types';

// for server side rendering (which we don't use by nextjs needs), window does not exist so return an empty object
export const FbWebView: UieWebVew =
    typeof window !== 'undefined' ? window.chrome.webview.hostObjects.sync.foo_uie_webview : ({} as UieWebVew);
