import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPass from "./Component/ForgotPass";
import Login from "./Component/Login";
import NewPass from "./Component/NewPass";
import Profile from "./Component/Profile";
import SignUp from "./Component/SignUp";
import Test from "./Component/Test";
import Header from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/signUp"} element={<SignUp />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/forgotPassword"} element={<ForgotPass />} />
            <Route path={"/newPassword"} element={<NewPass />} />
            <Route path={"/test"} element={<Test />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
