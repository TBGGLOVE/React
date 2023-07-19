import React, { Component } from 'react';
import './EventPractice.css';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
    userid: '',
    passwd: '',
  };
  //멤버 변수 선언 
  userid = null; //ref을 사용하여 callback function에서 값을 설정 
  username = null;//ref을 사용하여 callback function에서 값을 설정 
  passwd = null;//ref을 사용하여 callback function에서 값을 설정 

  //   handlerChangeMessage = (e) => {
  //     console.log(e.target);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   handlerChangeUsername = (e) => {
  //     console.log(e.target);
  //     // this.setState({ username: e.target.value });
  //     // this.setState({ username: e.target.value });
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  handlerChange = (e) => {
    //    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  handlerClick = (e) => {
    this.setState({ message: '', username: '', userid: '', passwd: '' });
  };
  // handlerKeydown = (e) => {
  //   console.log(e);
  //   if (e.keyCode === 13) {
  //     this.handlerClick(e);
  //   }
  // };

  handlerSubmit = (e) => {
    //let passwd = document.getElementById('passwd');
    //let passwd = document.querySelector("input[name='passwd']");
    this.passwd.className = '';
    if (this.state.passwd === '0000') {
      this.passwd.className = 'success';
    } else {
      this.passwd.className = 'failure';
    }

    //form속성 action에 설정된 주소로 입력 값 전달을 취소한다
    if (this.state.userid === '') {
      alert('아이디 입력해줘~~~');
      e.preventDefault();
      //let userid = document.querySelector("input[name='userid']");
      this.userid.focus();
      return false;
    }
    if (this.state.username === '') {
      alert('사용자이름  입력해줘~~~');
      e.preventDefault();
      //let username = document.querySelector("input[name='username']");
      this.username.focus();
      return false;
    }

    let obj1 = {username : "aaa", age : 10};
    let obj2 = new Object();
    obj1.userid = "aaaa";
    obj1.userId = "bbbb";
    
  };
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
            ref={(username) => (this.username = username)}
          />
          <br />
          아이디 :
          <input
            type="text"
            name="userid"
            placeholder="사용자 아이디 입력..."
            onChange={this.handlerChange}
            value={this.state.userid}
            ref={(userid) => (this.userid = userid)}
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
            ref={(passwd) => (this.passwd = passwd)}
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

export default EventPractice;
