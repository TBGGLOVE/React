import ColorModel from "./ColorModel";

const { createContext, useState } = require("react");

const ColorContext = createContext({
    state : {color:'black',subject:'red'},
    actions : {
        setColor:()=>{},
        setSubject:()=>{}
    }
});

const ColorProvider = ({children}) => {
    const model = ColorModel();

    const value = {
        state : model.state,    //상태 변수 
        actions : model.actions //상태 변수 값을 변경 하는 함수 
    }
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
};

const { Consumer: ColorConsumer } = ColorContext;

export {ColorProvider, ColorConsumer};

export default ColorContext;
