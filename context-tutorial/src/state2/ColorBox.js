import React from 'react';

const ColorBox = ({state}) => {
    return (
        <>
            <div style={{width: '64px', height: '64px', background : state.color}} />
            <div style={{width: '32px', height: '32px', background : state.subject}}/>
        </>
    );
};

export default ColorBox;