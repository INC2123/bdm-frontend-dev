import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";


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
        width: "911px", // Set width of the editor container
        height: "174px", // Set height of the editor container
        overflowY:"scroll",
      },
      editor: {
        backgroundColor: "#FFFFFF", // Set the color inside the border to white
      },
    },
  },
});

// const TextEditor = () => {
//   return (
//     <div>
//       <ThemeProvider theme={myTheme}>
//         <MUIRichTextEditor
//           label="Type something here..."
//           inlineToolbar={true}
//         />
//       </ThemeProvider>
//     </div>
//   );
// };

const TextEditor = ({ onContentChange }) => {
  // const classes = myTheme();
  const handleContentChange = (content) => {
    if (onContentChange) {
      onContentChange(content);
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
