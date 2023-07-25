import { useReducer } from "react";

const reducer = (state, action) => {
  return [action.type && action.value]
    ? { ...state, [action.type]: action.value }
    : state;
  // switch (action.type) {
  //   case "change_color":
  //     return { ...state, color: action.color };
  //   // return { ...state, color: action.color }; 위와 같다.
  //   case "change_subject":
  //     return { ...state, subject: action.subject };
  //   default:
  //     return state;
  // }
};

const ColorModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    color: "black",
    subject: "red",
  });

  const setColor = (color) => {
    dispatch({ type: "change_color", color: color });
  };

  const setSubject = (subject) => {
    dispatch({ type: "change_subject", subject: subject });
  };

  return { state, setColor, setSubject };
};

export default ColorModel;
