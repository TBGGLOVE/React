import ColorBox from "./ColorBox";
import { ColorProvider } from "./ColorContext";
import SelectColors from "./SelectColor";
import TextColorBox from "./TextColorBox";

/*
상태 관리 자료 ColorModel에서 진행함 
View는 ColorBox, TextColorBox 컴포넌트로 구성하여 
ContextAPI를 상태관리 자료를 공유 함
부모에서 자식으로 속성(porps)을 전달하지 않아도 됨 
그래서 부모의 출력 부분이 간결함 
*/
function ColorApp() {
  return (
      <ColorProvider>
        <div>
          <SelectColors/>
          <ColorBox />
          <TextColorBox/>
        </div>
      </ColorProvider>
  );
  
}

export default ColorApp;
