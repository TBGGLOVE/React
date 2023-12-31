import React from 'react';
import {ColorConsumer} from './ColorContext';

const ColorBox = () => {
    return (
        <ColorConsumer>
            {value => (
                <>
                <div style={{width: '64px', height: '64px', background : value.state.color}} />
                <div style={{width: '32px', height: '32px', background : value.state.subject}}/>
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;