import React, { useReducer, useState } from 'react';

function model(state, action) {
  //처리 루틴 여러개가 될 수 있음
  //state는 관리하는 상태 변수
  //action : 명령 (처리 루틴 여러개를 구분하는 키)
}

const Counter = () => {
  //상태 변수 선언
  //const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(model, { value: 0 });
  //model : 처리 함수
  //{value : 0} : 초기값 -> state가 초기값을 받는 변수
  //dispatch : action을  수행할 함수를 나타남

  //아래에 선언된 것은 데이터 관리 함수
  const incValue = () => {
    //setValue(value + 1);
    dispatch({ type: 'incValue' });
  };

  const decValue = () => {
    //setValue(value + 1);
    dispatch({ type: 'decValue' });
  };

  //아래는 출력에 대한 코드
  return (
    <div>
      <p>
        {/* 아래 코드는 상태 코드 값을 읽기  */}
        현재 카운트 값은 <b>{state.value} </b>입니다
      </p>

      {/* 아래 코드는 상태 코드 값을 변경 */}
      <button onClick={incValue}>1 증가</button>
      <button onClick={decValue}>1 감소</button>
    </div>
  );
};
/*
Counter(); 1 증가 클릭 -> value(0 -> 1) Counter(); 호출 
Counter();
*/
export default Counter;
