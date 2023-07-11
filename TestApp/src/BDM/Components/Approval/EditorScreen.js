import React, { useEffect, useState } from "react";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalCategeory from "./ApprovalCategeory";
import ApprovalClauseBody from "./ApprovalClauseBody";
import ApprovalComments from "./ApprovalComments";
import { Stack } from "@mui/material";
import EditorButtons from "./EditorsButtons";

export default function EditorScreen() {
  return (
    <div>
      <Stack
        sx={{
          marginLeft: "3.875rem",
          marginTop: "4.5rem",
        }}
      >
        <ApprovalHeader button={<EditorButtons />} />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          marginLeft: "3.875rem",
          gap: "1rem",
        }}
      >
        <ApprovalCategeory />
        <ApprovalClauseBody />
        <ApprovalComments />
      </Stack>
    </div>
  );
}
