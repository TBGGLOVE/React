import ColorComponent from "./ColorComponent";
import { useState } from "react";

function AppState() {
  const [state, setState] = useState({ color: "black", subject: "red" });

  const setColor = (color) => {
    setState({ ...state, color });
  };

  const setSubject = (subject) => {
    setState({ ...state, subject });
  };

  const actions = { setColor, setSubject };

  //위코드를 아래와 같이 수정하는 것이 좋다
  // const actions = {
  //   setColor : color => {
  //     setState({...state, color});
  //   },
  //   setSubject : subject => {
  //     setState({...state, subject});
  //   }
  // };

  return (
    <div>
      <ColorComponent state={state} actions={actions} />
      {/* <ColorComponent state={state} setState={setState} /> */}
    </div>
  );
}

export default AppState;
