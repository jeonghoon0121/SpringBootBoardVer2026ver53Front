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
        if (Array.isArray(data)) setPosts(data);
        else setPosts([]);
      })
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, []);

  return (
    <div>
      <h1>게시글 목록</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.postId}>
            postId: {p.postId} <br />
            boardId: {p.boardId} <br />
            authorId: {p.authorId} <br />
            password: {p.password} <br />
            ipHash: {p.ipHash} <br />
            attachmentUrl: {p.attachmentUrl} <br />
            title: {p.title} <br />
            content: {p.content} <br />
            thumbnailUrl: {p.thumbnailUrl} <br />
            accessLevel: {p.accessLevel} <br />
            status: {p.status} <br />
            viewCount: {p.viewCount} <br />
            createdAt: {p.createdAt} <br />
            updatedAt: {p.updatedAt} <br />
            notice: {String(p.notice)} <br />
            secret: {String(p.secret)}
          </li>
        ))}
      </ul>
    </div>
  );
}