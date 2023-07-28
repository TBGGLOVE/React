import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // FormData를 서버로 전송하는 Axios POST 요청
      console.log(username);
      console.log(password);

      await axios.post('/login', { username: username, password: password });

      // 성공적으로 전송했다면 상태 초기화
      setUsername('');
      setPassword('');

      // 성공 메시지 또는 다른 동작을 수행할 수 있음
      alert('로그인에 성공했습니다.');
    } catch (error) {
      // 실패했을 때 처리
      alert('로그인에 실패했습니다.');
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // 각각의 입력 필드에 따라 상태를 업데이트
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login 하세요
        <br />
        username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange} // 입력 필드 변경 시에 상태 업데이트
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange} // 입력 필드 변경 시에 상태 업데이트
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
