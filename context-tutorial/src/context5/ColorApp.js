import ColorBox from "./ColorBox";
import { ColorProvider } from "./ColorContext";
import SelectColors from "./SelectColor";

/* ColorContext를 useContext hook 함수로 감싸서 사용하는 방법 */

function ColorApp() {
  return (
      <ColorProvider>
        <div>
          <SelectColors/>
          <ColorBox />
        </div>
      </ColorProvider>
  );
  
}

export default ColorApp;
