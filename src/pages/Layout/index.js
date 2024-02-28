import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="tablet-buttons">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/minify_html">Minify Html</Link>
          </li>
          <li>
            <Link to="/html_to_markdown_generator">Html to Markdown</Link>
          </li>
          <li>
            <Link to="/qr_generator">QR Generator</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
