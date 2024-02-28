import React from "react";
import QRCode from "qrcode.react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "./style.css";

class QRCodeGenerator extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="grid-container">
          <div className="grid-item">
            <CodeEditor
              placeholder="Enter text to generate QR code"
              onChange={this.handleChange}
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
            <QRCode value={this.state.text} size={256} />
          </div>
        </div>
      </div>
    );
  }
}

export default QRCodeGenerator;
