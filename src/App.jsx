import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import Report from "./pages/Report";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import { useEffect } from "react";

function App() {

  useEffect(()=> {
    if (!localStorage.getItem("TaskArray")) {
      localStorage.setItem("TaskArray", JSON.stringify([]))
    }
  })

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/report" element={<Report/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
