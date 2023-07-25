import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const detail = searchParam.get("detail");
  const mode = searchParam.get("mode");

  const onToggleDetail = (e) => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncMode = (e) => {
    // const mode === null ? 1: parseInt(mode)+1
    setSearchParams({ detail, mode: mode === "true" ? 1 : parseInt(mode) + 1 });
  };

  return (
    <div>
      <h1>어바웃</h1>
      <p>어바웃 페이지 입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncMode}>Mode 1증가</button>
    </div>
  );
};

export default About;
