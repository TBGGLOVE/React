import React from 'react';
import ColorContext from './ColorContext';

const ColorBox = () => {
    return (
        <>  {/* context에서 정의된 값을 읽기 위해서는 Consumer tag를 사용하여 content영역에 callback 함수를 추가해서 처리한다 */}
            <ColorContext.Consumer>
                {value => (
                    <>
                    <div style={{width: '64px', height: '64px', background : value.color}} />
                    </>
                )}
            </ColorContext.Consumer>
        </>
    );
};

export default ColorBox;