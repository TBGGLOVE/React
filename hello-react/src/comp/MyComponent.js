import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    //지역 선언
    const { name, age } = this.props;
    return (
      <>
        <div>나의 첫번째 컴포넌트 이름 : {this.props.name}</div>
        <div>나이 : {this.props.age}</div>
        <div>나의 첫번째 컴포넌트 이름 : {name}</div>
        <div>나이 : {age}</div>
      </>
    );
  }
}

//export default MyComponent;
export { MyComponent };
