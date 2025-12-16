import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import BoardListPage from "./BoardListPage.jsx";
import BoardAddPage from "./BoardAddPage.jsx";
import BoardUpdatePage from "./BoardUpdatePage.jsx";
import BoardDeletePage from "./BoardDeletePage.jsx";
import PostListPage from "./PostListPage.jsx";
import CommentListPage from "./CommentListPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/boards" element={<BoardListPage />} />  
        <Route path="/boards/add" element={<BoardAddPage />} />
        <Route path="/boards/:boardId/update" element={<BoardUpdatePage />} />
        <Route path="/boards/:boardId/delete" element={<BoardDeletePage />} /> 
        <Route path="/posts" element={<PostListPage />} /> 
        <Route path="/comments" element={<CommentListPage />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);