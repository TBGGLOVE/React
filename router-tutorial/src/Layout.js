import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = (e) => {
    navigate("/articles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header, 메뉴
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>copy right KOSA 더존 5기</h1>
      </footer>
    </div>
  );
};

export default Layout;
