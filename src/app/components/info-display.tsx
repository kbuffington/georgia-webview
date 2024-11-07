import React, { useContext } from 'react';
import { MetadataContext } from './metadata-context';

export const InfoDisplay: React.FC<{}> = () => {
    const { metadata } = useContext(MetadataContext);
    return (
        <>
            <div className="text-lg font-bold">Artist: {metadata.trackArtist}</div>
            <div className="text-med font-bold">Album: {metadata.album}</div>
            <div className="text-base">Track: {metadata.trackTitle}</div>
            <div className="text-sm">Year: {metadata.albumDate}</div>
            <div className="text-xs">Genre: {metadata.genre}</div>
        </>
    );
};
