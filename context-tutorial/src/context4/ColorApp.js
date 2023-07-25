import ColorBox from "./ColorBox";
import { ColorProvider } from "./ColorContext";
import SelectColors from "./SelectColor";

/* */
function ColorApp() {
  return (
    <>
      {/*
        ColorContext.Provider를  ColorProvider으로 대체 하여 사용
        실제 속성과 속성값을 변경할 수 있는 함수를 사용할 때는 ColorContext.Consumer를 대체한 ColorConsumer를 사용한다
        사용하는 부분 SelectColors, ColorBox 컴포넌트 안쪽에 사용한다
        즉 전역 변수의 값을 사용하고자 할 때 ColorConsumer 컴포넌트를 사용하여 값을 접근할 수 있다 
        이전에는 props를 이용하여 하위에 속성과 속성값을 변경할 수 있는 함수를 설정해야 하데 Context를 사용하면 불필요한 작업이 된다 
       */}
      <ColorProvider>
        <div>
          <SelectColors/>
          <ColorBox />
        </div>
      </ColorProvider>
    </>
  );
  
}

export default ColorApp;
