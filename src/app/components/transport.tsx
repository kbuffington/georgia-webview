import React, { useContext } from 'react';
import { FoobarContext } from './foobar-context';

export const TransportControls: React.FC<{}> = () => {
    const { controls } = useContext(FoobarContext);
    return (
        <>
            <button onClick={() => controls.Previous()}>&lt;&lt;</button>
            <button onClick={() => controls.TogglePause()}>||</button>
            <button onClick={() => controls.Next()}>&gt;&gt;</button>
        </>
    );
};
