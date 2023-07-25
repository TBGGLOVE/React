import React from 'react';

const TextColorBox = ({state}) => {
    return (
        <>
            <h1 style={{color : state.color, background : state.subject}}>안녕하세요</h1>
        </>
    );
};

export default TextColorBox;