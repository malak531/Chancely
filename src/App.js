import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChancelyHomepageNotLoggedIn from './components/ChancelyHomepageNotLoggedIn/ChancelyHomepageNotLoggedIn';
import LoginPage from './components/LoginPage/LoginPage';
import StepOne from './components/Sign Up Pages User/SelectType/StepOne';
import StepTwo from './components/Sign Up Pages User/StepTwo/StepTwo';
import AboutUs from './components/AboutUsPage/AboutUs';
import InterestSelection from './components/Sign Up Pages User/StepThree/InterestSelection';
import BrowseOpportunities from './components/User Pages/BrowseOpportunities/BrowseOpportunities';
import EditUserProfile from './components/User Pages/Profile/EditUserProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* This will render ChancelyHomepageNotLoggedIn for the home route */}
        <Route path="/" element={<ChancelyHomepageNotLoggedIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/BrowseOpportunities" element={<BrowseOpportunities />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Step2" element={<StepTwo />} />
        <Route path="/Step1" element={<StepOne />} />
        <Route path="/Step3" element={<InterestSelection />} />
        <Route path="/UserProfile" element={<EditUserProfile />} />


      </Routes>
    </Router>
        
  );
}

export default App;
