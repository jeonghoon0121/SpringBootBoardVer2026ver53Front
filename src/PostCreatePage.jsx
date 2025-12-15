import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function PostCreatePage() {
  const { boardId } = useParams();   // URL에서 boardId 추출
  const [form, setForm] = useState({
    authorId: "",
    password: "",
    ipHash: "",
    attachmentUrl: "",
    title: "",
    content: "",
    thumbnailUrl: "",
    accessLevel: "",
    status: "",
    viewCount: 0,
    createdAt: "",
    updatedAt: "",
    notice: false,
    secret: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8082/api/boards/${boardId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, boardId: parseInt(boardId) }),
    })
      .then((res) => {
        if (res.status === 201) return res.json();
        throw new Error("게시글 생성 실패");
      })
      .then((data) => {
        alert("게시글 생성 완료!");
        console.log("생성된 게시글:", data);
      })
      .catch((err) => {
        console.error(err);
        alert("오류 발생");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="authorId" value={form.authorId} onChange={handleChange} placeholder="작성자 ID" required />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="비밀번호" required />
      <input name="ipHash" value={form.ipHash} onChange={handleChange} placeholder="IP 해시" />
      <input name="attachmentUrl" value={form.attachmentUrl} onChange={handleChange} placeholder="첨부파일 URL" />
      <input name="title" value={form.title} onChange={handleChange} placeholder="제목" required />
      <textarea name="content" value={form.content} onChange={handleChange} placeholder="내용" required />
      <input name="thumbnailUrl" value={form.thumbnailUrl} onChange={handleChange} placeholder="썸네일 URL" />
      <input name="accessLevel" value={form.accessLevel} onChange={handleChange} placeholder="접근 레벨" />
      <input name="status" value={form.status} onChange={handleChange} placeholder="상태" />
      <input type="number" name="viewCount" value={form.viewCount} onChange={handleChange} placeholder="조회수" />
      <input type="datetime-local" name="createdAt" value={form.createdAt} onChange={handleChange} />
      <input type="datetime-local" name="updatedAt" value={form.updatedAt} onChange={handleChange} />
      <label>
        공지글
        <input type="checkbox" name="notice" checked={form.notice} onChange={handleChange} />
      </label>
      <label>
        비밀글
        <input type="checkbox" name="secret" checked={form.secret} onChange={handleChange} />
      </label>
      <button type="submit">게시글 생성</button>
    </form>
  );
}