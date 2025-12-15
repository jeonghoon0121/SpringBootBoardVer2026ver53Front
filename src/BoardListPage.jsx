// BoardListPage.jsx
import React, { useEffect, useState } from "react";

export default function BoardListPage() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/boards")
      .then((res) => res.json())
      .then(setBoards)
      .catch((err) => console.error("게시판 조회 실패:", err));
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>게시판 목록</h1>
      <ul>
        {boards.map((b) => (
          <li key={b.boardId} style={{ marginBottom: "15px" }}>
            <strong>ID:</strong> {b.boardId} <br />
            <strong>이름:</strong> {b.name} <br />
            <strong>설명:</strong> {b.description} <br />
            <strong>User Active:</strong> {b.userActive ? "✅ 활성" : "❌ 비활성"} <br />
            <strong>Admin Active:</strong> {b.adminActive ? "✅ 활성" : "❌ 비활성"}
          </li>
        ))}
      </ul>
    </div>
  );
}
