import React, { useContext } from 'react';
import ColorContext from './ColorContext';

const TextColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            <h1 style={{color : state.color, background : state.subject}}>안녕하세요</h1>
        </>
    );
};

export default TextColorBox;