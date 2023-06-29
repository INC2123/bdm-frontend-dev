import React from "react";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalCategeory from "./ApprovalCategeory";
import ApprovalClauseBody from "./ApprovalClauseBody";
import ApprovalComments from "./ApprovalComments";
import { Stack } from "@mui/material";
import ApproversButtons from "./ApproversButtons";

export default function ApprovalScreen() {
  return (
    <div>
      <Stack>
        <ApprovalHeader button={<ApproversButtons />} />
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <ApprovalCategeory />
        <ApprovalClauseBody />
        <ApprovalComments />
      </Stack>
    </div>
  );
}
