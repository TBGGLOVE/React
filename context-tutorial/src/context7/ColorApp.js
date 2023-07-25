import ColorBox from "./ColorBox";
import { ColorProvider } from "./ColorContext";
import SelectColors from "./SelectColor";

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
