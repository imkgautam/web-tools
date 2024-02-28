import React, { useState } from "react";
import { minify } from "html-minifier";
import CodeEditor from "@uiw/react-textarea-code-editor";
import TurndownService from "turndown";
import "./style.css";

const MinifyHTML = () => {
  const [html, setHtml] = useState("");
  const [minifyHtml, setMinifyHtml] = useState("");
  const turndownService = new TurndownService();
  turndownService.addRule("fenceAllPreformattedText", {
    filter: ["pre"],
    replacement: function (_content, node, options) {
      return (
        "\n\n" +
        options.fence +
        "\n" +
        node.firstChild.textContent +
        "\n" +
        options.fence +
        "\n\n"
      );
    },
  });

  const handleHtmlChange = (event) => {
    setHtml(event.target.value);
  };

  const runMinifier = () => {
    const minified = minify(input, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
    });
    // setMinifyHtml(turndownService.turndown(minified));
    setMinifyHtml(minified);
  };

  return (
    <div>
      <div className="fixed-button-container">
        <button className="mdc-fab red" onClick={runMinifier}>
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
          </svg>
        </button>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <CodeEditor
            value={html}
            language="html"
            placeholder="Please enter HTML code."
            onChange={handleHtmlChange}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>
        <div className="grid-item">
          <CodeEditor
            value={minifyHtml}
            language="html"
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MinifyHTML;
