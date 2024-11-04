import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import RegisterForm1 from "./Components/Register/RegisterForm1";
import RegisterForm2 from "./Components/Register/RegisterForm2";
// import DashboardPage from "./Components/admin/scenes/dashboard/DashBoardHomePage";
import About from "./Components/Pages/About";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Contact from "./Components/Pages/Contact";
import SucessStories from "./Components/Pages/SucessStories";
import Enroll from "./Components/Register/Enroll";
import Rules from "./Components/Pages/Rules";
import PrivateComponent from "./Components/PrivateComponent";
import Profiles from "./Components/Pages/Profiles";
import HomePage from "./Components/Pages/HomePage";
// import { ColorModeContext, useMode } from "./Components/admin/theme";

// import Geography from "./Components/admin/scenes/geography";
// import Calendar from "./Components/admin/scenes/calendar/calendar";
// import Premium from "./Components/admin/scenes/Premium/index";
// import Free from "./Components/admin/scenes/Free/index";
// import Blocked from "./Components/admin/scenes/Blocked/index";
// import UserDetailsForm from "./Components/admin/scenes/userdetails/index";
// import ContactUs from "./Components/admin/scenes/contactus/index";
// import Feedback from "./Components/admin/scenes/feedback/index";
// import Team from "./Components/admin/scenes/team";
// import Invoices from "./Components/admin/scenes/invoices";
// import Contacts from "./Components/admin/scenes/contacts";
// import Bar from "./Components/admin/scenes/bar";
// import Form from "./Components/admin/scenes/form";
// import Line from "./Components/admin/scenes/line";
// import Pie from "./Components/admin/scenes/pie";
// import FAQ from "./Components/admin/scenes/faq";
// import Dashboard from "./Components/admin/scenes/dashboard";
// import Sidebar from "./Components/admin/scenes/global/Sidebar";
// import Topbar from "./Components/admin/scenes/global/Topbar";
import MyProfile from "./Components/Pages/MyProfile";

import Dashboard from "./Components/Admin/Dashboard";
import NavBar from "./Components/Navbar";
// import DashBoardHomePage from "./Components/admin/scenes/dashboard/DashBoardHomePage";

function App() {
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Provider store={store}>
   
      <BrowserRouter>
        {/* <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}> */}
          <NavBar />
        <Routes>
          {/* isAuthenticated={isAuthenticated} */}
          <Route path="*" element={<HomePage isAuthenticated={false} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/successstories" element={<SucessStories />} />
          <Route path="/register" element={<Enroll />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/form1" element={<RegisterForm1 />} />
          <Route path="/form2" element={<RegisterForm2 />} />
          <Route path="/dashboard/*" element={<Dashboard />} />

    
          <Route
            path="/profiles"
            element={<Profiles isAuthenticated={false} />}
        
          />
          <Route path="/myprofile" element={<MyProfile />} />
       
        </Routes>

        {/* <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/dashboard/feedback" element={<Feedback />} />
                    <Route
                      path="/dashboard/contactus"
                      element={<ContactUs />}
                    />
                    <Route
                      path="/dashboard/userdetails"
                      element={<UserDetailsForm />}
                    />
                    <Route path="/dashboard/free" element={<Free />} />
                    <Route path="/dashboard/blocked" element={<Blocked />} />
                    <Route path="/dashboard/team" element={<Team />} />
                    <Route path="/dashboard/premium" element={<Premium />} />
                    <Route path="/dashboard/contacts" element={<Contacts />} />
                    <Route path="/dashboard/invoices" element={<Invoices />} />
                    <Route path="/dashboard/form" element={<Form />} />
                    <Route path="/dashboard/bar" element={<Bar />} />
                    <Route path="/dashboard/pie" element={<Pie />} />
                    <Route path="/dashboard/line" element={<Line />} />
                    <Route path="/dashboard/faq" element={<FAQ />} />
                    <Route path="/dashboard/calendar" element={<Calendar />} />
                    <Route
                      path="/dashboard/geography"
                      element={<Geography />}
                    />
                  </Route>
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider> */}

        {/* </ThemeProvider>
        </ColorModeContext.Provider>  */}
      </BrowserRouter>

      <div></div>

     
    </Provider>
  );
}

export default App;
