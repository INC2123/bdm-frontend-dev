import logo from "./logo.svg";
import "./App.css";
import SideBar from "./BDM/Components/SideNavBar/SideBar";
import Header from "./BDM/Components/AppHeader/Header";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./BDM/Utility/theme";
import Card from "./BDM/Components/Workspace/Card";
import Workspace from "./BDM/Components/Workspace/Workspace";
import ApprovalScreen from "./BDM/Components/Approval/ApprovalScreen";
import CreateClause1 from "./BDM/Components/Clausecreation/CreateClause1";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <App/> */}
        <ApprovalScreen />
        {/* <Workspace/> */}
        {/* <CreateClause1 /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
