import React from 'react';
import {ColorConsumer} from './ColorContext';

/*value 매개 변수를 사용하여 내부에 있는 상태 변수값(state)의 접근하는데 이를 쉽게 하기 위해 state의 속성을 연관 배열로 매개 변수를 변경했다*/
const ColorBox = () => {
    return (
        <ColorConsumer>
            {({state}) => (
                <>
                <div style={{width: '64px', height: '64px', background : state.color}} />
                <div style={{width: '32px', height: '32px', background : state.subject}}/>
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;