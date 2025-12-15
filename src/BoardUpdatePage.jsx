import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BoardUpdatePage() {
  const { boardId } = useParams();
  const [form, setForm] = useState({
    name: "",
    description: "",
    userActive: true,
    adminActive: false,
  });

  useEffect(() => {
    fetch(`http://localhost:8082/boards/${boardId}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [boardId]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:8082/boards/${boardId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(() => alert("수정 완료"))
      .catch(() => alert("오류 발생"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>게시판 번호: {boardId}</p>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="게시판 이름"
        required
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="설명"
      />
      <label>
        사용자 활성
        <input
          type="checkbox"
          name="userActive"
          checked={form.userActive}
          onChange={handleChange}
        />
      </label>
      <label>
        관리자 활성
        <input
          type="checkbox"
          name="adminActive"
          checked={form.adminActive}
          onChange={handleChange}
        />
      </label>
      <button type="submit">수정</button>
    </form>
  );
}
