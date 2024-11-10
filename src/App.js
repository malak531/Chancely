import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure BrowserRouter import
import LoginPage from './components/LoginPage/LoginPage';
import StepOne from './components/SignUpPagesUser/SelectType/StepOne';
import StepTwo from './components/SignUpPagesUser/StepTwo/StepTwo';
import AboutUs from './components/AboutUsPage/AboutUs';
import InterestSelection from './components/SignUpPagesUser/StepThree/InterestSelection';
import BrowseOpportunities from './components/UserPages/BrowseOpportunities/BrowseOpportunities';
import EditUserProfile from './components/UserPages/Profile/EditUserProfile';
import { AuthProvider } from './components/AuthContext';
import AccountCreationSuccess from './components/SignUpPagesUser/StepFour/AccountCreationSuccess';
import OpportunityInfo from './components/OpportunityInfo/OpportunityInfo';
import EventOrganizerRegistration from './components/EventOrganizerRegistration/EventOrganizerRegistration';
import Registration from './components/EventOrganizerRegistration/AccountCreationSuccess';
import EventCreation from './components/OrganizationPages/EventCreation/EventCreation';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/BrowseOpportunities" element={<BrowseOpportunities />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Step1" element={<StepOne />} />
          <Route path="/Step2" element={<StepTwo />} />
          <Route path="/Step3" element={<InterestSelection />} />
          <Route path="/Step4" element={<AccountCreationSuccess />} />
          <Route path="/UserProfile" element={<EditUserProfile />} />
          <Route path="/OppInfo/:id" element={<OpportunityInfo />} />
          <Route path="/OrganizationRegistration" element={<EventOrganizerRegistration />} />
          <Route path="/success" element={<Registration />} />
          <Route path="/createEvent" element={<EventCreation />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
