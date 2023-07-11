import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
// import { convertToHtml } from "mui-rte";
import { stateToHTML } from 'draft-js-export-html';

const myTheme = createTheme({
  overrides: {
    MUIRichTextEditor: {
      root: {
        border: "1px solid #E0E0E0", // Set border to 1px solid grey
        borderRadius: "4px", // Optional: Set border radius for a rounded border
      },
      editorContainer: {
        border: "1px solid #E0E0E0", // Set border to 1px solid grey
        borderRadius: "4px", // Optional: Set border radius for a rounded border
        width: "647px", // Set width of the editor container
        height: "150px", // Set heiht of the editor container
        overflowY:"scroll"
      },
      editor: {
        backgroundColor: "#FFFFFF", // Set the color inside the border to white
      },
    },
  },
});

const TextEditor = ({ onContentChange }) => {
  // const classes = myTheme();
  const handleContentChange = (content) => {
    if (onContentChange) {
      const htmlContent = stateToHTML(content.getCurrentContent());
      onContentChange(htmlContent);
    }
  };
  

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          className="overrides"
          label="Type something here..."
          inlineToolbar={true}
          onChange={handleContentChange} // Call the callback function when the content changes
        />
      </ThemeProvider>
    </div>
  );
};


export default TextEditor;