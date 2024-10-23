# Georgia WebView

## Introduction

This is a **very early** WIP for migrating some/all of the Georgia functionality into foo_uie_webview to take advantage of Chromium's rendering, image handling and CSS capabilities.

It is _currently_ being written in React, although who knows if that will continue.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) because I wanted to make my life as difficult as possible.

## What is currently happening

foo_uie_webview doesn't currently support all the functionality a full UI replacement needs, so I'm working with what's available.
At the moment most of the development work is in creating a sane TS/JS framework and interface for working with the methods that foo_uie_webview exposes. At the moment there's no real UI to speak of other than retrieving some track metadata and controlling FB with some of the buttons.

Most of the magic will be in the `src/lib`, `src/types` and `public/static/js` directories while I flesh this out and work on some kind of subscriber/redux based system for notifying components that state has changed and getting them to re-render.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
