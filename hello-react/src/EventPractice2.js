import React, { Component } from 'react';
import './EventPractice.css';

class EventPractice2 extends Component {
  state = {
    message: '',
    username: '',
    userid: '',
    passwd: '',
  };
  //createRef() 함수를 사용하여 멤버 변수 선언 및 초기화
  userid = React.createRef(); //ref속성을 이용하여 값을 설정
  username = React.createRef();
  passwd = React.createRef();

  //userid 사용시  userid.current가 실제 DOM 객체

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlerClick = (e) => {
    this.setState({ message: '', username: '', userid: '', passwd: '' });
  };
  handlerSubmit = (e) => {
    this.passwd.current.className = '';
    if (this.state.passwd === '0000') {
      this.passwd.current.className = 'success';
    } else {
      this.passwd.current.className = 'failure';
    }

    //form속성 action에 설정된 주소로 입력 값 전달을 취소한다
    if (this.state.userid === '') {
      alert('아이디 입력해줘~~~');
      e.preventDefault();
      this.userid.current.focus();
      return false;
    }
    if (this.state.username === '') {
      alert('사용자이름  입력해줘~~~');
      e.preventDefault();
      this.username.current.focus();
      return false;
    }
  };

  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div id="idDiv">
        <h1>이벤트 연습</h1>
        <form
          name="myForm"
          action="registerMember.do"
          method="get"
          onSubmit={this.handlerSubmit}
        >
          메시지 :{' '}
          <input
            type="text"
            name="message"
            placeholder="아무키나 입력해 보세요"
            onChange={this.handlerChange}
            value={this.state.message}
          />
          <br />
          사용자명 :
          <input
            type="text"
            name="username"
            placeholder="사용자이름 입력..."
            onChange={this.handlerChange}
            value={this.state.username}
            ref={this.username}
          />
          <br />
          아이디 :
          <input
            type="text"
            name="userid"
            placeholder="사용자 아이디 입력..."
            onChange={this.handlerChange}
            value={this.state.userid}
            ref={this.userid}
          />
          <br />
          비밀번호 :
          <input
            type="password"
            name="passwd"
            id="passwd"
            placeholder="비밀번호 입력..."
            onChange={this.handlerChange}
            value={this.state.passwd}
            ref={this.passwd}
          />
          <h2>메시지 : {this.state.message}</h2>
          <h2>사용자명 : {this.state.username}</h2>
          <h2>아이디 : {this.state.userid}</h2>
          <button type="submit">확인</button>
          <image src=""></image>
          <button onClick={this.handlerClick}>초기화</button>
        </form>
      </div>
    );
  }
}

export default EventPractice2;
