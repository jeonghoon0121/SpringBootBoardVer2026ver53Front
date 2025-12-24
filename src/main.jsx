import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./MainPage.jsx";   // ✅ 메인 페이지 추가
import BoardListPage from "./BoardListPage.jsx";
import BoardAddPage from "./BoardAddPage.jsx";
import BoardUpdatePage from "./BoardUpdatePage.jsx";
import BoardDeletePage from "./BoardDeletePage.jsx";
import PostListPage from "./PostListPage.jsx";
import PostAddPage from "./PostAddPage.jsx";
import CommentListPage from "./CommentListPage.jsx";
import CommentAddPage from "./CommentAddPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />   {/* ✅ 메인 페이지 라우트 */}
        <Route path="/boards" element={<BoardListPage />} />  
        <Route path="/boards/add" element={<BoardAddPage />} />
        <Route path="/boards/:boardId/update" element={<BoardUpdatePage />} />
        <Route path="/boards/:boardId/delete" element={<BoardDeletePage />} /> 
        <Route path="/posts" element={<PostListPage />} /> 
        <Route path="/posts/add" element={<PostAddPage />} />
        <Route path="/comments" element={<CommentListPage />} /> 
        <Route path="/comments/add" element={<CommentAddPage />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);