"use client";

import React from 'react';
import MonacoEditor, { monaco } from 'react-monaco-editor';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  const editorDidMount = (editor: monaco) => {
    // You can customize editor options here
    editor.updateOptions({
      fontSize: 14,
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
    });
  };

  return (
    <MonacoEditor
      height="400"
      language="javascript"
      value={value}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  );
};

export default CodeEditor;
