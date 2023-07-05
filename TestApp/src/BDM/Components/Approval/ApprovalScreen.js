import React, { useEffect, useState } from "react";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalCategeory from "./ApprovalCategeory";
import ApprovalClauseBody from "./ApprovalClauseBody";
import ApprovalComments from "./ApprovalComments";
import { Stack } from "@mui/material";
import ApproversButtons from "./ApproversButtons";
import axios from "axios";

export default function ApprovalScreen() {
  const [highlightedTexts, setHighlightedTexts] = useState([]);
  const [comments, setComments] = useState([]);
  const [combinedObject, setCombinedObject] = useState({});
  const [approvalData, setApprovalData] = useState([]);

  // const getApprovalData = async () => {
  //   const { approvalData } = await axios.get(
  //     `https://cw-bdm.cfapps.eu10-004.hana.ondemand.com//api/clause/tasks/getTaskByAssignee`
  //   );
  //   setApprovalData(approvalData);
  // };
  // useEffect(() => {
  //   getApprovalData();
  // }, []);
  console.log(approvalData);
  const handleReworkClick = () => {
    const data = highlightedTexts.map((text, index) => ({
      highlightedText: text,
      comment: comments[index],
    }));

    // axios
    //   .post("<your API endpoint>", data)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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
