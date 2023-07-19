import React from 'react';

const ListComponent = (props) => {
  const handlerRemove = (item) => {
    if (
      window.confirm(
        '"' + item.id + '번 ' + item.text + '"을 삭제하시겠습니까?'
      )
    ) {
      props.remove(item.id);
    }
  };

  const namesList = props.names.map((item) => (
    <li key={item.id} onDoubleClick={(e) => handlerRemove(item)}>
      {item.id} : {item.text}
      <button onClick={(e) => handlerRemove(item)}>삭제</button>
    </li>
  ));

  return <ul>{namesList}</ul>;
};

export default ListComponent;
