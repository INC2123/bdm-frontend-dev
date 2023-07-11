import logo from "./logo.svg";
import "./App.css";
import SideBar from "./BDM/Components/SideNavBar/SideBar";
import Header from "./BDM/Components/AppHeader/Header";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./BDM/Utility/theme";
import Card from "./BDM/Components/Workspace/Card";
import MainComponent from "./BDM/Components/Workspace/MainComponent";
import Workspace from "./BDM/Components/Workspace/Workspace";
import ApprovalScreen from "./BDM/Components/Approval/ApprovalScreen";
import EditorScreen from "./BDM/Components/Approval/EditorScreen";
import CreateClause1 from "./BDM/Components/Clausecreation/CreateClause1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditorHighlighter from "./BDM/Components/Approval/EditorHighlighter";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-1">
                <SideBar />
              </div>
              <div class="col-sm-12 col-md-11">
                <Routes>
                  <Route
                    path="/CreateClause1"
                    exact
                    element={<CreateClause1 />}
                  />
                  <Route path="/" exact element={<MainComponent />} />
                  <Route
                    path="/ApprovalScreen"
                    exact
                    element={<ApprovalScreen />}
                  ></Route>
                  <Route
                    path="/EditorScreen"
                    exact
                    element={<EditorScreen />}
                  ></Route>
                  <Route
                    path="/EditorHighlighter"
                    exact
                    element={<EditorHighlighter />}
                  ></Route>

                  <Route
                    path="*"
                    element={<MainComponent to="/" replace />}
                  ></Route>
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
