import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
import { MyComponent } from './comp/MyComponent';
import MyComponent2 from './comp/MyComponent2';
import MyComponent3 from './comp/MyComponent3';
//import { MyComponent } from './comp/MyComponent';

/*
  flasy
  false, null, undefined, '' , 0
*/
/*
function App() {
    const name = undefined;
    const styleMap = {
        backgroundColor: 'red',
        color: 'aqua',
        fontSize: '48px',
    };

    return (
        <div className="react">
            {name || <h1> undefined 입니다 </h1>}
            아이디 : <input name="uid" />
            {
                //라인 주석
            }
        </div>
    );
}
*/

class App extends Component {
  name = '멤버변수 홍길동';
  age = 20;

  render() {
    //    const name = '지역변수 홍길동';
    return (
      <div className="react">
        이름 : {this.name}
        <MyComponent name={this.name} age={this.age} />
        {/* MyComponent("홍길동", 20) */}
        <MyComponent2 name={'3'} age="20" favoriteNumber={2} />
        <MyComponent2 age="20" favoriteNumber={3} />
        <MyComponent2 age="20" favoriteNumber={1}>
          [[[[[[
          <MyComponent /> 내용]]]]]]
          <MyComponent /> 내용]]]]]]
        </MyComponent2>
        {/* 함수명 (매개변수 -> 기본값) */}
        <MyComponent3 name={this.name} age="20" />
      </div>
    );
  }
}
/*
function App() {
  const name = '홍길동';
  return <div className="react">{name}</div>;
}
*/
export default App;
