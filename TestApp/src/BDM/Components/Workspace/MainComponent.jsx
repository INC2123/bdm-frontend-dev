import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "./Card";
import Header from "../AppHeader/Header";
import SideBar from "../SideNavBar/SideBar";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Pagination from '@mui/material/Pagination';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterList from "@mui/icons-material/FilterListOutlined";
import CloudUpload from "@mui/icons-material/CloudUploadOutlined";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button, IconButton, TextField } from "@mui/material";



const useStyles = makeStyles((theme) => {
  return {
    title: {
      "& .muitypography-root": {
        color: "#000000",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "normal",
        letterSpacing: "0.03rem",
      },
    },
  };
});

const MainComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    // <Paper sx={{ flex: 1 }}>
      <Stack
        spacing={2}
        direction="column"
        padding={2}
        marginTop="3rem"
        marginLeft="5rem"
      >
        <Typography className={classes.title}>Clause Library</Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "black",
              },
            }}
            textColor="#000000"
            lineHeight="8px"
          >
            <Tab
              icon={<AssignmentIcon />}
              iconPosition="start"
              label="Clauses"
            />
            <Tab
              icon={<PendingActionsIcon />}
              iconPosition="start"
              label="Pending Clause"
            />
          </Tabs>
          <Stack spacing={1} direction="row" alignItems="center">
            <Button variant="contained" color="primary" endIcon={<AddIcon />} onClick={() => navigate("/CreateClause1")} >
              Create Clause
            </Button>
            <TextField label="Search" size="small" variant="outlined" />
            <IconButton>
              <CloudUpload />
            </IconButton>
            <IconButton>
              <FilterList />
            </IconButton>
          </Stack>
        </Stack>
        <Stack spacing={2} direction="column">
          <Card />
        </Stack>
      
      <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack>
    </Stack>
    // </Paper>
  );
};
export default MainComponent;