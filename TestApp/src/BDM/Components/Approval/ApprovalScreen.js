import React, { useEffect, useState } from "react";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalCategeory from "./ApprovalCategeory";
import ApprovalClauseBody from "./ApprovalClauseBody";
import ApprovalComments from "./ApprovalComments";
import { Stack } from "@mui/material";
import ApproversButtons from "./ApproversButtons";
import { doAjax } from "../../Services/serviceRequest";

export default function ApprovalScreen() {
  const [highlightedTexts, setHighlightedTexts] = useState([]);
  const [comments, setComments] = useState([]);
  const [combinedObject, setCombinedObject] = useState({});
  const [approvalData, setApprovalData] = useState([]);
  console.log(combinedObject);

  useEffect(() => {
    doAjax(
      `/BDMServices/api/clause/tasks`,
      "get",
      {},
      function (approvalData) {
        if (approvalData) {
          console.log(approvalData);
          setApprovalData(approvalData);
        }
      },
      (err) => {}
    );
  }, []);

  const handleReworkClick = () => {
    const data = highlightedTexts.map((text, index) => ({
      highlightedText: text,
      comment: comments[index],
    }));
  };

  return (
    <div>
      <Stack
        sx={{
          marginLeft: "3.875rem",
          marginTop: "4.5rem",
        }}
      >
        <ApprovalHeader
          button={
            <ApproversButtons
              highlightedTexts={highlightedTexts}
              comments={comments}
              onReworkClick={handleReworkClick}
            />
          }
        />
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
        <ApprovalClauseBody setCombinedObject={setCombinedObject} />
        <ApprovalComments
          combinedObject={combinedObject}
          setCombinedObject={setCombinedObject}
        />
      </Stack>
    </div>
  );
}
