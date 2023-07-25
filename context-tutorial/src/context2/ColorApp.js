import ColorBox from "./ColorBox";
import ColorContext from "./ColorContext";

function ColorApp() {
  return (
      <>
        {/* ColorContext에 값을 기록하기 위해 Provider를 사용하여 값을 설정한다  */}
        <ColorContext.Provider value={{color:'red'}}>
          <ColorBox />
        </ColorContext.Provider>
      </>
  );
  
}

export default ColorApp;
