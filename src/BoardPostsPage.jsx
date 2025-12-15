import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BoardPostsPage() {
  const { boardId } = useParams();   // 라우터에서 boardId 추출
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8082/api/boards/${boardId}`)
      .then((res) => {
        if (!res.ok) throw new Error("게시글 조회 실패");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [boardId]);

  if (loading) return <p>불러오는 중...</p>;

  return (
    <div>
      <h2>게시판 {boardId}의 게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.postId}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>작성자: {post.writer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}