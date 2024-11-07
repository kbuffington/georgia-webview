import { FbWebView } from '@/types/globals';
import { createContext, useEffect, useState } from 'react';

export interface FoobarMetadata {
    album: string;
    albumArtist: string;
    albumDate: string;

    genre: string;

    trackArtist: string;
    trackTitle: string;
    trackNumber: string;
    trackTime: string;
    trackLength: string;
}

export const defaultMetadata: FoobarMetadata = {
    album: 'album',
    albumArtist: 'albumArtist',
    albumDate: 'albumDate',

    genre: 'genre',

    trackArtist: 'trackArtist',
    trackTitle: 'trackTitle',
    trackNumber: 'trackNumber',
    trackTime: 'trackTime',
    trackLength: 'trackLength',
};

export type MetadataInterface = {
    metadata: FoobarMetadata;
    refreshMetadata: () => FoobarMetadata;
};

const getString = (tfString: string) => {
    return FbWebView?.IsPlaying ? FbWebView.GetFormattedText(tfString) : '';
};

const getMetadata = (): FoobarMetadata => {
    console.log(getString('%album%'));
    return {
        album: getString('[%album%]'),
        albumArtist: getString('[%album artist%]'),
        albumDate: getString('[%date%]'),

        genre: getString('[%genre%]'),

        trackArtist: getString('[%artist%]'),
        trackTitle: getString('[%title%]'),
        trackNumber: getString('[%tracknumber%]'),
        trackTime: getString('[%playback_time%]'),
        trackLength: getString('[%length%]'),
    };
};

export const MetadataContext = createContext<MetadataInterface>({} as any);

export const MetadataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [metadata, setMetadata] = useState(defaultMetadata);

    const initValues = {
        metadata: metadata,
        refreshMetadata: () => {
            const metadata = getMetadata();
            // console.log('>>> refreshing:', metadata);
            setMetadata(metadata);
            return metadata; // not sure we should really be returning this instead of just relying on state?
        },
    };
    useEffect(() => {
        initValues.refreshMetadata();
    }, []);
    // controls.refreshMetadata = () => {
    //     const metadata = refreshMetadata();
    //     setMetadata(metadata);
    //     return metadata;
    // };
    return <MetadataContext.Provider value={initValues}>{children}</MetadataContext.Provider>;
};
