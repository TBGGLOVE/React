import React, { useRef, useCallback, useState } from "react";
import { produce } from "immer";

const orgState = [
  {
    id: 1,
    todo: "aaaaa",
    checked: true,
  },
  {
    id: 2,
    todo: "bbbb",
    checked: false,
  },
];

// console.log('orgState', orgState);
// //id가 2인 항목의 checked값 을 true로 변경
// let newState = orgState.map((info) =>
//   info.id !== 2 ? info : { ...info, checked: true },
// );
// console.log('newState', newState);

// //새로운 Info 추가
// newState.push({
//   id: 3,
//   todo: 'ccc',
//   checked: false,
// });
// newState = [...newState];

// console.log('newState', newState);

// newState = newState.filter((info) => info.id !== 1);
// console.log('newState', newState);

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  const newState = produce(orgState, (draft) => {
    //id가 2인 항목의 checked값 을 true로 변경
    const todo = draft.find((info) => info.id === 2);
    todo.checked = true;

    //새로운 Info 추가
    draft.push({
      id: 3,
      todo: "ccc",
      checked: false,
    });

    //id가 1인 항목 삭제
    draft.splice(
      draft.findIndex((info) => info.id === 1),
      1
    );
  });

  console.log("newState", newState);

  // input 수정을 위한 함수
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    //setForm({ ...form, [name]: [value] });
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);
  /*
const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      //setForm({ ...form, [name]: [value] });
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );
*/

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      console.log("info", info);

      // array 에 새 항목 등록
      setData({ ...data, array: data.array.concat(info) });

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback((id) => {
    setData({ ...data, array: data.array.filter((info) => info.id !== id) });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
