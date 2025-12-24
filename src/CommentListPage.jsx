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
    <div>
      <h1>댓글 목록</h1>
      <ul>
        {comments.map((c) => (
          <li key={c.commentId}>
            commentId: {c.commentId} <br />
            postId: {c.postId} <br />
            authorId: {c.authorId} <br />
            password: {c.password} <br />
            content: {c.content} <br />
            ipHash: {c.ipHash} <br />
            createdAt: {c.createdAt} <br />
            updatedAt: {c.updatedAt}
          </li>
        ))}
      </ul>
    </div>
  );
} 