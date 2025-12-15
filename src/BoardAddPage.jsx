import React, { useState } from "react";

export default function BoardCreatePage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    userActive: true,
    adminActive: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8082/api/boards", {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 201) return res.json();
        throw new Error();
      })
      .then((data) => alert("생성 완료"))
      .catch(() => alert("오류 발생"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="이름" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="설명" />
      <label>
        사용자 활성
        <input type="checkbox" name="userActive" checked={form.userActive} onChange={handleChange} />
      </label>
      <label>
        관리자 활성
        <input type="checkbox" name="adminActive" checked={form.adminActive} onChange={handleChange} />
      </label>
      <button type="submit">생성</button>
    </form>
  );
}
