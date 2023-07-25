const { createContext, useState } = require("react");

/*
 * 기본 상태값과 기본 처리 함수를 선언한다 
 */
const ColorContext = createContext({
    state : {color:'black',subject:'red'},
    actions : {
        setColor:()=>{},
        setSubject:()=>{}
    }
});

/*
 ColorContext에서 상태값과 상태값을 변경하는 함수를 어떻게 처리할지 실제 구현하여 제공한다
 구현시 Provider 컨포넌트로 제공함 
*/
const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subject, setSubject] = useState('red');

    const value = {
        state : {color, subject},        //상태 변수 
        actions : {setColor, setSubject} //상태 변수 값을 변경 하는 함수 
    }
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
};

const { Consumer: ColorConsumer } = ColorContext;

/* 외부에서 사용할 때 ColorContext.Provider, ColorContext.Consumer 이름이 길어 짧은 이름으로 변경하여 제공한다   */
export {ColorProvider, ColorConsumer};

export default ColorContext;
