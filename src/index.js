import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import HtmlToMarkdown from "./pages/HtmlToMarkdown";
import QRGenerator from "./pages/QRGenerator";
import NoPage from "./pages/NoPage";
// import MinifyHTML from "./pages/MinifyHTML";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="minify_html" element={<MinifyHTML />} /> */}
          <Route path="html_to_markdown_generator" element={<HtmlToMarkdown />} />
          <Route path="qr_generator" element={<QRGenerator />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
