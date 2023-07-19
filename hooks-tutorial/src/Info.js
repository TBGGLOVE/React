import React, { useReducer } from 'react';
import useModel from './useModel';

// //action -> e.target
// const reducer = (state, action) => {
//   //    let key = action.type; //name, nickname
//   //   switch (action.type) {
//   //     case 'name':
//   //         return { ...state, [key]: action.value };
//   // //        return { ...state, name: action.value };
//   //     case 'nickname':
//   //       return { ...state, [key]: action.value };
//   // //        return { ...state, nickname: action.value };
//   // default:
//   //       return state;
//   //   }
//   //action.name => name, nickname
//   //action.type => text
//   //action.value => 값
//   return { ...state, [action.name]: action.value };
//   //{name;"", nickname:""}
// };

// const useModel = (initState) => {
//   const [state, dispatch] = useReducer(reducer, initState);

//   //data 변경에 대한 이벤트 핸들러
//   //데이터 변경 함수
//   //e.target.name, e.target.value
//   const onChange = (e) => {
//     dispatch(e.target);
//   };

//   return [state, onChange];
// };

const Info = () => {
  //색인 배열로 사용할 때
  //const [state, onChange, bbb] = useModel({ name: '', nickname: '' }); //정상
  //const [onChange, state] = useModel({ name: '', nickname: '' }); //오류
  //연관 배열로 사용할 때
  const { state, onChange } = useModel({ name: '', nickname: '' }); //정상
  //const { onChange, state } = useModel({ name: '', nickname: '' });//정상
  const model = useModel({ name: '', nickname: '' }); //정상
  
  //   const onChangeName = (e) => {
  //     //e.target.name = name
  //     dispatch({ type: e.target.name, value: e.target.value });
  //   };

  //   const onChangeNickname = (e) => {
  //     //e.target.name = nickname
  //     //dispatch({ type: 'name', value: e.target.value });
  //     dispatch({ type: e.target.name, value: e.target.value });
  //   };

  //   const onChange = (e) => {
  //     //e.target.name = nickname
  //     //dispatch({ type: 'name', value: e.target.value });
  //     //dispatch({ type: e.target.name, value: e.target.value });
  //     dispatch(e.target);
  //   };
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={model.state.name}
          onChange={model.onChange}
        />
        <input
          type="text"
          name="nickname"
          value={model.state.nickname}
          onChange={model.onChange}
        />
      </div>
      <div>
        <b>이름:</b>
        {state.name}
      </div>
      <div>
        <b>닉네임:</b>
        {state.nickname}
      </div>
    </div>
  );
};
export default Info;
