import { useReducer } from 'react';

//Color와 subject를 관리할 수 있는 reducer 메소드 
const  colorReducer = (state, action) =>{
    console.log("colorReducer->", state, action);
    return state[[action.type]] ? {...state, [action.type] : action.value} : null; 
}

const  ColorModel = () => {
    const [state, dispatch] = useReducer(colorReducer, {color:'black',subject:'red'});

    return {
        state : state, 
        actions : {
            setColor : color => {
                dispatch({type : "color", value : color});
            }, 
            setSubject : subject => {
                dispatch({type : "subject", value : subject});
            }}
    };
}

export default ColorModel;
