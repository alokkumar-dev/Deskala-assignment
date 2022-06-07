import { Route, Routes } from "react-router";
import { HomePage } from "../Home/Home";
import SignIn from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
