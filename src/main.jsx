import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import BoardListPage from "./BoardListPage.jsx";
import BoardAddPage from "./BoardAddPage.jsx";
import BoardUpdatePage from "./BoardUpdatePage.jsx";
import BoardDeletePage from "./BoardDeletePage.jsx";
import BoardPostsPage from "./BoardPostsPage.jsx";   // ✅ 게시글 목록 조회
import PostCreatePage from "./PostCreatePage.jsx";   // ✅ 새로 추가

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/boards" element={<BoardListPage />} />
        <Route path="/boards/add" element={<BoardAddPage />} />
        <Route path="/boards/:boardId/update" element={<BoardUpdatePage />} />
        <Route path="/boards/:boardId/delete" element={<BoardDeletePage />} />
        <Route path="/boards/:boardId" element={<BoardPostsPage />} />   
        <Route path="/boards/:boardId/add" element={<PostCreatePage />} /> {/* ✅ 게시글 생성 */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);