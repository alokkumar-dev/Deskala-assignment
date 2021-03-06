import { Route, Routes } from "react-router";
import { CandidateCreationPage } from "../CandidateCreationPage/CandidateCreationPage";
import LandingPage from "../LandingPage/LandingPage";
import SignIn from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/candidateCreatePage" element={<CandidateCreationPage />} />
      </Routes>
    </>
  );
};
