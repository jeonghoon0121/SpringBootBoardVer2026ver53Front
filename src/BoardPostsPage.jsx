import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function BoardPostsPage() {
  const { boardId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8082/boards/${boardId}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(() => alert("게시글 목록 불러오기 실패"));
  }, [boardId]);

  return (
    <div>
      <h2>게시판 {boardId}의 게시글 목록</h2>
      {posts.length === 0 ? (
        <p>게시글이 없습니다.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.postId}>
              <strong>{post.title}</strong> - {post.author}
              <p>{post.content}</p>
              {/* 필요하다면 상세보기 링크 추가 */}
              <Link to={`/posts/${post.postId}`}>상세보기</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
