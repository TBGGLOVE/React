import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    FontSize: 21,
  };

  return (
    <div>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ padding: "10px 20px" }}>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li style={{ padding: "10px 20px" }}>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li style={{ padding: "10px 20px" }}>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Articles;
