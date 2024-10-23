import { Foobar } from '@/lib/foobar';

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

export const refreshMetadata = (): FoobarMetadata => {
    console.log(Foobar.getString('[%album%]'));
    return {
        album: Foobar.getString('[%album%]'),
        albumArtist: Foobar.getString('[%album artist%]'),
        albumDate: Foobar.getString('[%date%]'),

        genre: Foobar.getString('[%genre%]'),

        trackArtist: Foobar.getString('[%artist%]'),
        trackTitle: Foobar.getString('[%title%]'),
        trackNumber: Foobar.getString('[%tracknumber%]'),
        trackTime: Foobar.getString('[%playback_time%]'),
        trackLength: Foobar.getString('[%length%]'),
    };
};
