import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

const Home = () => {
  return (
    <CodeEditor
      value={"Hello World! I'm Manindra Gautam."}
      language="yaml"
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
      }}
    />
  );
};

export default Home;
