import { useReducer } from 'react';

/*
처리 항목 
1. number의 변경 
2. list에 number 추가 -> 자동으로 평균값 계산 
*/
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return { ...state, list: action.list, avg: action.avg };
    default:
      return state;
  }
};

const getAverage = (list) => {
  console.log('평균값 계산 ->');
  if (list === null || list.length === 0) return 0;
  const sum = list.reduce((a, b) => a + b);
  return sum / list.length;
};

const useModel = (initState) => {
  initState.avg = getAverage(initState.list);
  const [state, dispatch] = useReducer(reducer, initState);

  const addNumber = (number) => {
    const updatedList = state.list.concat(parseInt(number));
    //    const avg = getAverage(updatedList);
    // dispatch({ name: 'list', value: updatedList }); // state list 업데이트
    // dispatch({ name: 'avg', value: avg }); // 평균값 업데이트
    // dispatch({ name: 'number', value: 0 }); // 지우기
    dispatch({
      type: 'ADD_NUMBER',
      list: updatedList,
      avg: getAverage(updatedList),
    }); // 리스트에 값을 추가한다
  };

  //   useMemo(() => {
  //     const avg = getAverage(state.list);
  //     dispatch({ name: 'avg', value: avg }); //초기에 한번만
  //   }, []);

  return { state, addNumber }; //return 연관배열
};

export default useModel;
