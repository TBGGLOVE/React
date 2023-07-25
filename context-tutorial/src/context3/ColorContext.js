const { createContext } = require("react");

//상태변수 2개(color, subject)를 연관배열 state로 선언 
const ColorContext = createContext({
    state : {color:'black',subject:'red'},
});

console.log(ColorContext);

//객체 비구조화 할당 구문을 이용하여 ColorContext.Consumer 컴포넌트 이름을 ColorConsumer 이름으로 변경하여 처리할 수 있게 아래와 같이 추가함  
const {Consumer: ColorConsumer } = ColorContext;

export {ColorConsumer};

export default ColorContext;
