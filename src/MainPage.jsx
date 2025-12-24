// MainPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/boards")
      .then((res) => res.json())
      .then(setBoards)
      .catch((err) => console.error("게시판 조회 실패:", err));
  }, []);

  return (
    <div>
      <h1>메인 페이지 - 게시판 목록</h1>
      <ul>
        {boards.map((b) => (
          <li key={b.boardId}>
            <Link to={`/boards/${b.boardId}`}>
              {b.boardId} - {b.name} ({b.description})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}