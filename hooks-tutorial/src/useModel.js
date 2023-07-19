import { useReducer } from 'react';

const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const useModel = (initState) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const onChange = (e) => {
    dispatch(e.target);
  };
  const onUpdate = (e) => {
    dispatch(e.target);
  };

  //  return [state, onChange]; //색인 배열
  return {
    //연관 배열
    onChange,
    state,
    onUpdate,
  };
};

export default useModel;
