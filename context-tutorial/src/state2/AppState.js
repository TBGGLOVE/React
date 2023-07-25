import ColorComponent from "./ColorComponent";
import { useState } from "react";
import TextColorBox from "./TextColorBox";

/*아래 예제는 
상태 관리 자료 color, subject와 
View는 ColorBox, TextColorBox 컴포넌트로 구성하여 
부모에서 상태 관리 변수를 선언하고 View 컴포넌트들에 속성(porps)로 전달하는 것을 확인 할 수 있다.
state를 사용하면 반드시 부모에서 자식으로 속성(porps)을 전달해주어야 한다
이코드를 좀더 나은 코드로 변경한 것이 context8 예제 임 
*/
function AppState() {
  const [state, setState] = useState({ color: "black", subject: "red" });

  const actions = {
    setColor: (color) => {
      setState({ ...state, color });
    },
    setSubject: (subject) => {
      setState({ ...state, subject });
    },
  };

  return (
    <div>
      <ColorComponent state={state} actions={actions} />
      <TextColorBox state={state}></TextColorBox>
    </div>
  );
}

export default AppState;
