import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

const Card = () => {
  // const cardData = [
  //   {
  //     id: 1,
  //     clause: 'Price Standard',
  //     status: 'In Progress',
  //     description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
  //     tags: ['Company policies', 'HR', 'Code Of Conduct'],
  //     category: 'Administrative',
  //     date: '23 May 2023',
  //     version: 4,
  //   },
  //   {
  //       id: 2,
  //       clause: 'Price Standard',
  //       status: 'In Progress',
  //       description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
  //       tags: ['Company policies', 'HR', 'Code Of Conduct'],
  //       category: 'Administrative',
  //       date: '23 May 2023',
  //       version: 4,
  //     },
  //     {
  //       id: 3,
  //       clause: 'Price Standard',
  //       status: 'Rework',
  //       description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
  //       tags: ['Company policies', 'HR', 'Code Of Conduct'],
  //       category: 'Administrative',
  //       date: '23 May 2023',
  //       version: 4,
  //     },
  //     {
  //       id: 4,
  //       clause: 'Price Standard',
  //       status: 'Rework',
  //       description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
  //       tags: ['Company policies', 'HR', 'Code Of Conduct'],
  //       category: 'Administrative',
  //       date: '23 May 2023',
  //       version: 4,
  //     },
  //     {
  //       id: 5,
  //       clause: 'Price Standard',
  //       status: 'Rework',
  //       description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
  //       tags: ['Company policies', 'HR', 'Code Of Conduct'],
  //       category: 'Administrative',
  //       date: '23 May 2023',
  //       version: 4,
  //     },
  //   // Add more card data as needed
  // ];

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchClause = async () => {
      try {
        const response = await fetch(
          "https://cw-bdm.cfapps.eu10-004.hana.ondemand.com/api/clause",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJJNExzTXlreEQ4czlXdFhOLUxaTXoxbDd3SmxfTmZmNGN5WkM5MEpZbklVIn0.eyJleHAiOjE2ODg1NTcxNDcsImlhdCI6MTY4ODU0OTk0NywianRpIjoiM2ZlOTJjOGYtNThjMS00OTU3LTk5NDktNjkyZWEwYzY3NzBlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5jaGVycnl3b3JrcHJvZHVjdHMuY29tL2F1dGgvcmVhbG1zL0RpZ2l0YWxBcHBsaWNhdGlvblN1aXRlIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjBkOGYxMGYzLWY3ODYtNDU1OS1iMGQzLTdmMTUzMWM5MDJjNCIsInR5cCI6IkJlYXJlciIsImF6cCI6IndvcmthY2Nlc3MiLCJzZXNzaW9uX3N0YXRlIjoiNzhkOGYyOTQtZTM4Ny00NTU4LThhMWEtMGJkMDA1ZGU3ODg5IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL3dvcmthY2Nlc3MtZnJvbnRlbmQuYXp1cmV3ZWJzaXRlcy5uZXQiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlVTRVJfREVGSU5JVElPTl9LRVlfdXNlci1hZG1pbiIsImRlZmF1bHQtcm9sZXMtaW50ZWxsaWdlbnQgdGFzayBtYW5hZ2VtZW50IiwiaXRtLWFkbWluIiwiYWNjZXNzLWlkbSIsIml0bS1kZWZhdWx0Iiwib2ZmbGluZV9hY2Nlc3MiLCJhY2Nlc3MtdGFzayIsImFjY2Vzcy1tb2RlbGVyIiwidW1hX2F1dGhvcml6YXRpb24iLCJhY2Nlc3MtYWRtaW4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI3OGQ4ZjI5NC1lMzg3LTQ1NTgtOGExYS0wYmQwMDVkZTc4ODkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJTeXN0ZW0gVXNlciIsInBpZCI6IlAwMDA5OTkiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIiwiZ2l2ZW5fbmFtZSI6IlN5c3RlbSIsImZhbWlseV9uYW1lIjoiVXNlciIsImVtYWlsIjoiZHVtbXkudG9rZW5AaW5jdHVyZS5jb20ifQ.WcKF-8TZrfX2Zic_6166Thqn4BZb3-BhNUPA0xMslI-Ey9CHZEqqzxMQYdUbvbJaPDlsF-n0EB05vwivxBWCQnNH24PX6-fjkbwrsVoo8d27GkgCJLHzxHgEAhTt80TxaD85Yifej7KGrMHGoKXP00HLfaOCHAcr2Kgrq1D_UpyK8lRwYlQCPMWf7LDKsmmAPkYzTcXDzfrI2IqMwBbjzLCD1M0i5geUoXrF-SWafuLokE3IDPGvYlYSSomq7YPHsJv6S8FmBoCTxTK2QsBONVQOCDMYr5Ed9sulZo0bInpiWu5Nph4Fy9sDL4FtL0Yexc79WDRzF_HuPHir1FuRxQ",
            },
          }
        );
        const data = await response.json();
        setCardData(data);
      } catch (e) {
        console.e("error fetching clause:", e);
      }
    };
    fetchClause();
  }, []);

  const toReadableDate = (createdAt) => {
    const year = createdAt[0];
    const month = createdAt[1] - 1; // Months are zero-based in JavaScript, so subtract 1
    const day = createdAt[2];

    const date = new Date(year, month, day);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };
  return (
    <div>
      {cardData.map((data) => (
        <CardComponent
          key={data.id}
          clause={data.name}
          status={data.status}
          description={data.description}
          tags={data.usedFor}
          category={data.category}
          date={toReadableDate(data.createdAt)}
          version={data.versionCount}
        />
      ))}
    </div>
  );
};

export default Card;
