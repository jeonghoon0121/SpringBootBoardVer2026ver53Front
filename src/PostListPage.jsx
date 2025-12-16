import React, { useEffect, useState } from "react";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/posts")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("서버 응답이 배열이 아님:", data);
          setPosts([]);
        }
      })
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>게시글 목록</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.postId} style={{ marginBottom: "15px" }}>
            <strong>ID:</strong> {p.postId} <br />
            <strong>제목:</strong> {p.title} <br />
            <strong>내용:</strong> {p.content} <br />
            <strong>작성자:</strong> {p.author} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}