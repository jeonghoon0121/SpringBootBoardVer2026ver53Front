import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BoardDeletePage() {
  const { boardId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm(`게시판 ${boardId}을 정말 삭제하시겠습니까?`)) return;

    fetch(`http://localhost:8082/boards/${boardId}`, { method: "DELETE" })
      .then(res => {
        if (res.status === 204) {
          alert("삭제 완료");
          navigate("/boards"); // 삭제 후 목록 페이지로 이동
        } else {
          throw new Error("삭제 실패");
        }
      })
      .catch(() => alert("오류 발생"));
  };

  return (
    <div>
      <p>게시판 번호: {boardId}</p>
      <button onClick={handleDelete}>삭제하기</button>
    </div>
  );
}
