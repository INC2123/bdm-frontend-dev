import React from "react";
import Stack from "@mui/material";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import Tag from "../ExtendedComponents/Tag";
import { makeStyles } from "@mui/styles";
import CustomChip from "../ExtendedComponents/StatusChip";
import { useState } from "react";
import { useEffect } from "react";
import Category from "../ExtendedComponents/Category";

const useStyles = makeStyles((theme) => {
  return {
    clauseCard: {
      backgroundColor: theme.palette.background.paper,
      boxSizing: "border-box",
      position: "relative",
      width: "1295px",
      height: "116px",
      borderRadius: "10px",
      boxShadow: "0px 2px 3px rgba(169, 169, 169, 0.25)",
      marginTop: "10px"
    },
  
    clauseTitle: {
      fontSize: "15px",
      fontWeight: "normal",
      fontFamily: "Roboto",
      color: "#424242",
      fontWeight: 500,
      lineHeight: "18px",
      display: "inline",
      marginLeft:"31px",
      marginTop:"15px",
    },
    clauseDescriptionText: {
      fontSize: "15px",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "18px",
      color: "#424242",
      width: "768px",
      height: "18px",
      marginLeft:"31px",
      marginTop:"36px",
      [theme.breakpoints.down("xl")]: {
        width: "1920px",
      },
      [theme.breakpoints.down("lg")]: {
        width: "1280px",
      },
      [theme.breakpoints.down("md")]: {
        width: "960px",
      },
    },
  
    statusChip: {
      boxSizing: "border-box",
      position: "absolute",
      width: "116px",
      height: "26px",
      left: "1145px",
      top: "15px",
    },
    tag: {
      position: "absolute",
      width: "116px",
      height: "29px",
      left: "0px",
      top: "0px",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "15px",
    },
    tag: {
      display: "inline-block",
      margin: "2px",
      padding: "2px",
    },
    // version: {
    //   marginBottom: theme.palette.spacing(10),
    // },
  };
});

const CardComponent = ({
  clause,
  category,
  tags,
  description,
  date,
  version,
}) => {
  const classes = useStyles();

  //   *fetch clause from backend*
  //   const[clause,setClause] = useState(null);

  //   useEffect(() =>{
  //     const fetchClause = async () =>{
  //         try{
  //             const response = await fetch('put backend url');
  //             const data = await response.json();
  //             setClause(data.clause);
  //             }
  //             catch(e){
  //                 console.e('error fetching clause:',error);
  //                 }

  //         };
  //         fetchClause();
  //     },[]);

  return (
    <Card className={classes.clauseCard}>
      <CardContent>
        <div>
          <Typography className={classes.clauseTitle}>
            {clause}
            {/* {clause.name} */}
          </Typography>
          <Typography className={classes.clauseDescriptionText}>
            {description}
            {/* {clause.description} */}
          </Typography>
        </div>
        <div className={classes.statusChip}>
          {/* <Typography className={classes.statusChip} variant="body1" component="p"> */}
          <CustomChip status="Rework" />

          {/* backend wise */}
          {/* {clause && <CustomChip status={clause.status}/> */}
        </div>
        <div className={classes.container}>
          <div>
            {tags.map((tags) => (
              <div className={classes.tag}>
                <Tag key={tags} label={tags} />
              </div>
            ))}
          </div>
          <div className={classes.container}>
            <span style={{marginRight:'66px'}}>
              <Category category={category} />
            </span>
            <span style={{marginRight:'29.5px'}}>{date}</span> {/* {clause.createdAt} */}
            <span>{version}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CardComponent;
