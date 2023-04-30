import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Component/Error";
import ForgotPass from "./Component/ForgotPass";
import Login from "./Component/Login";
import NewPass from "./Component/NewPass";
import Profile from "./Component/Profile";
import SignUp from "./Component/SignUp";
import Test from "./Component/Test";
import Header from "./Header/Header";

function App() {
  const x = 0;
  //login branch
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path={"/404"} element={<Error />} />
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
