import React, { useContext } from 'react';
import ColorContext, {ColorConsumer} from './ColorContext';

/*
ColorContext에서 제공하는 속성정보를 useContext() hook함수를 사용하여 처리 하는 방법
이전 ColorConsumer 컨포넌트를 사용하지 않아도 됨 
*/
const ColorBox = () => {
    const { state } = useContext(ColorContext);

    return (
        <>
        <div style={{width: '64px', height: '64px', background : state.color}} />
        <div style={{width: '32px', height: '32px', background : state.subject}}/>
        </>
    );
};

export default ColorBox;