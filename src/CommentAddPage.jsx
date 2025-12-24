import React, { useState } from "react";

export default function CommentAddPage() {
  const [form, setForm] = useState({
    postId: "",
    authorId: "",
    password: "",
    content: "",
    ipHash: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8082/api/posts/${form.postId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 201) return res.json();
        throw new Error();
      })
      .then(() => alert("댓글 생성 완료"))
      .catch(() => alert("오류 발생"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="postId"
        value={form.postId}
        onChange={handleChange}
        placeholder="Post ID"
        required
      />
      <input
        name="authorId"
        value={form.authorId}
        onChange={handleChange}
        placeholder="작성자 ID"
        required
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="댓글 내용"
        required
      />
      <input
        name="ipHash"
        value={form.ipHash}
        onChange={handleChange}
        placeholder="IP Hash"
      />
      <input
        type="datetime-local"
        name="createdAt"
        value={form.createdAt}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="updatedAt"
        value={form.updatedAt}
        onChange={handleChange}
      />
      <button type="submit">댓글 추가</button>
    </form>
  );
}