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
import { AuthProvider } from './components/AuthContext';
import AccountCreationSuccess from './components/Sign Up Pages User/StepFour/AccountCreationSuccess';
import OpportunityInfo from './components/OpportunityInfo/OpportunityInfo';
import EditEventOrganizer from './components/EditEventOrganizer/EditEventOrganizer';
import EventOrganizerRegistration from './components/EventOrganizerRegistration/EventOrganizerRegistration';
import Registration from './components/EventOrganizerRegistration/AccountCreationSuccess';
import EventCreation from './components/OrganizationPages/EventCreation/EventCreation';
import PendingOrganizationDetails from './components/AdminPages/PendingRequestsPage/PendingOrganizationDetails';
import OrganizationProfile from './components/OrganizationProfilePage/OrganizationProfile/OrganizationProfile';
import PendingOrganizationDetails from './components/AdminPages/PendingRequestsPage/PendingOrganizationDetails';

function App() {
  return (
    <AuthProvider>
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
        <Route path="/Step4" element={<AccountCreationSuccess />} />
        <Route path="/UserProfile" element={<EditUserProfile />} />
        <Route path="/OppInfo/:id" element={<OpportunityInfo />} />
        <Route path="/OrganizationRegistration" element={<EventOrganizerRegistration />} />
        <Route path="/success" element={<Registration />} />
        <Route path="/createEvent" element={<EventCreation />} />
        <Route path="/OrganizationProfile" element={<OrganizationProfile />} />
        <Route path="/PendingRequests" element={<OrganizationProfile />} />

      </Routes>
    </Router>
   </AuthProvider>

        
 );
 }

export default App;
