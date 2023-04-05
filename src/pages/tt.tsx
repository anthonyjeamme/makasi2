// @ts-nocheck
import { useEffect, useRef, useState } from "react";

import uniqid from "uniqid";

const Page = () => {
  return (
    <div
      style={{
        padding: 100,
      }}
    >
      <Editor />
    </div>
  );
};

export default Page;

const Editor = () => {
  const [editorState, setEditorState] = useState({
    text: "",
    json: [
      {
        type: "paragraph",
        id: "xx",
        content: "super",
      },
    ],
    selection: {
      selectionStart: 0,
      selectionEnd: 0,
      anchor: "",
    },
  });

  const editorRef = useRef<HTMLDivElement>(null);

  const htmlToJSON = () => {
    const editorElement = editorRef.current;

    if (!editorElement) return [];

    return Array.from(editorElement.children).map((child) => ({
      id: child.id,
      type: "paragraph",
      content: child.innerText,
    }));
  };

  console.log(editorState.selection);

  return (
    <div>
      <div
        ref={editorRef}
        id="editor"
        style={{ border: "2px solid black", padding: 20 }}
        contentEditable={true}
        suppressContentEditableWarning
        onKeyUp={() => {
          setEditorState({
            ...editorState,
            selection: getCursorPosition(),
          });
        }}
        onMouseUp={() => {
          setEditorState({
            ...editorState,
            selection: getCursorPosition(),
          });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();

            const id = uniqid();

            setEditorState({
              ...editorState,
              json: [
                ...editorState.json,
                {
                  id,
                  content: "x",
                  type: "paragraph",
                },
              ],
            });

            requestAnimationFrame(() => {
              moveCursor(document.getElementById(id), 0, 0);
            });
          }
        }}
        onInput={(e) => {
          const editorElement = editorRef.current;
          if (!editorElement) return;

          const cursorPosition = getCursorPosition();

          const selection = getCursorPosition();

          setEditorState({
            ...editorState,
            text: editorElement.innerHTML,
            json: htmlToJSON(),
          });

          requestAnimationFrame(() => {
            moveCursor(
              editorElement.querySelector(`#${selection.anchor}`),
              selection.selectionStart,
              selection.selectionEnd
            );
          });
        }}
      >
        {editorState.json.map((item) => (
          <p key={item.id} id={item.id}>
            {item.content || ""}
          </p>
        ))}
      </div>
    </div>
  );
};

const getCursorPosition = () => {
  const selection = window.getSelection();

  if (!selection)
    return {
      selectionStart: 0,
      selectionEnd: 0,
      anchor: "",
    };

  const selectionStart = selection.anchorOffset;
  const selectionEnd = selection.focusOffset;
  const anchorNode = selection.anchorNode;

  if (!anchorNode)
    return {
      selectionStart: 0,
      selectionEnd: 0,
      anchor: "",
    };

  return {
    selectionStart,
    selectionEnd,
    anchor: getNodeId(anchorNode),
  };
};

const getNodeId = (node: Node) => {
  if (node.nodeType === 3) return node.parentNode.id;

  return node.id;
};

const moveCursor = (
  element: any,
  selectionStart: number,
  selectionEnd: number
) => {
  const sel = window.getSelection();

  if (!sel) return;
  const range = document.createRange();
  range.setStart(element.firstChild, selectionStart);
  range.setEnd(element.firstChild, selectionEnd);
  sel.removeAllRanges();
  sel.addRange(range);
};
