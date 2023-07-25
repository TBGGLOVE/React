import React from "react";
import { ColorConsumer } from "./ColorContext";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(state) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subject,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
