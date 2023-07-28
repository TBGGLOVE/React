import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    roles: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // FormData를 서버로 전송하는 Axios POST 요청
      await axios.post('/api/v1/join', formData);

      // 성공적으로 전송했다면 상태 초기화
      setFormData({
        username: '',
        password: '',
        roles: ' ',
      });

      // 성공 메시지 또는 다른 동작을 수행할 수 있음
      alert('데이터 전송이 완료되었습니다.');
    } catch (error) {
      // 실패했을 때 처리
      alert('데이터 전송에 실패했습니다.');
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Id를 입력하시오
        <br />
        username :
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
