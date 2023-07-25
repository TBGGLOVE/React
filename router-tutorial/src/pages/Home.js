import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장먼저보여지는 페이지</p>
      <Link to="/about">소개</Link>|<a href="/about">소개</a>
      <p>
        <Link to="/about?detail=true&mode=1">쿼리스트링 예제 :</Link>
      </p>
      <ul>
        <li>
          <Link to="/profile/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/void">존재하지 않는 사람의 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
