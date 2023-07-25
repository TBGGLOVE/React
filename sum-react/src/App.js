import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    status: -1,
    result: 0,
    message: "",
    uuid: "",
  });

  const onSum = async (e) => {
    //alert("계산요청");
    setState({
      status: -1,
      result: 0,
      message: "",
      uuid: "",
    });

    const response = await axios.get("http://localhost:8090/api/createId");
    console.log(response.data);
    console.log(response.headers["sessionid"]);
    if (response.data.status === 1) {
      setState({ ...state, uuid: response.data.uuid });
      const response2 = await axios.get(
        "http://localhost:8090/api/sum?uuid=" + response.data.uuid
      );
      //console.log(response.data);
      setState(response2.data);
    }
  };

  const onSumCancel = async (e) => {
    //alert("계산취소");
    const response = await axios.get(
      "http://localhost:8090/api/sumCancel?uuid=" + state.uuid
    );
    setState(response.data);
  };

  return (
    <div>
      <div>
        <h1>axios</h1>
        <p>결과 : {state.status === 1 ? state.result : ""}</p>
        <p>메시지 : {state.message}</p>
        <button onClick={onSum}>계산요청</button>
        <button onClick={onSumCancel}>계산취소</button>
      </div>
    </div>
  );
}

export default App;
