import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/AccountPage";
import FormsPage from "./pages/FormsPage";
import Dashboard from "./pages/Dashboard";

axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
