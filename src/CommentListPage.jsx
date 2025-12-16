import React, { useEffect, useState } from "react";

export default function CommentListPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/comments")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          console.error("서버 응답이 배열이 아님:", data);
          setComments([]);
        }
      })
      .catch((err) => console.error("댓글 조회 실패:", err));
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>댓글 목록</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.commentId} style={{ marginBottom: "15px" }}>
            <strong>ID:</strong> {c.commentId} <br />
            <strong>작성자:</strong> {c.author} <br />
            <strong>내용:</strong> {c.content} <br />
            <strong>게시글 ID:</strong> {c.postId}
          </li>
        ))}
      </ul>
    </div>
  );
}