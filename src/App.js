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
import EventOrganizerRegistration from './components/EventOrganizerRegistration/EventOrganizerRegistration';
import Registration from './components/EventOrganizerRegistration/AccountCreationSuccess';
import DeleteOrg from './components/AdminPages/DeleteOrgPage/DeleteOrg';
import EventCreation from './components/OrganizationPages/EventCreation/EventCreation';
import OrganizationProfile from './components/OrganizationProfilePage/OrganizationProfile/OrganizationProfile';
import PendingOrganizationDetails from './components/AdminPages/PendingRequestsPage/PendingOrganizationDetails';
import BrowseOrganizations from './components/AdminPages/BrowseOrganizations/BrowseOrganizations';

function App() {
  return (
    // AuthProvider is wrapping the Router to provide authentication context for the app
    <AuthProvider>
      <Router>
        <Routes>
          {/* Home Route - Shows ChancelyHomepageNotLoggedIn for users not logged in */}
          <Route path="/" element={<ChancelyHomepageNotLoggedIn />} />
          
          {/* Login Route - Renders LoginPage for user login */}
          <Route path="/login" element={<LoginPage />} />

          {/* User's Browse Opportunities - Displays available opportunities for the user */}
          <Route path="/BrowseOpportunities" element={<BrowseOpportunities />} />

          {/* About Us Route - Shows about page */}
          <Route path="/about" element={<AboutUs />} />
          
          {/* Sign-Up Flow Routes */}
          <Route path="/Step2" element={<StepTwo />} />  {/* Step 2 of user sign-up */}
          <Route path="/Step1" element={<StepOne />} />  {/* Step 1 of user sign-up */}
          <Route path="/Step3" element={<InterestSelection />} />  {/* Step 3 of user sign-up */}
          <Route path="/Step4" element={<AccountCreationSuccess />} />  {/* Step 4 - Account creation success page */}

          {/* User Profile Routes */}
          <Route path="/UserProfile" element={<EditUserProfile />} />  {/* User profile editing */}
          
          {/* Opportunity Details Route - Displays specific opportunity details */}
          <Route path="/OppInfo/:id" element={<OpportunityInfo />} />
          
          {/* Event Organizer Routes */}
          <Route path="/OrganizationRegistration" element={<EventOrganizerRegistration />} />  {/* Organization registration */}
          <Route path="/success" element={<Registration />} />  {/* Success after organization registration */}
          <Route path="/createEvent" element={<EventCreation />} />  {/* Event creation for organization */}
          
          {/* Organization Profile Route - Displays organization profile */}
          <Route path="/OrganizationProfile" element={<OrganizationProfile />} />

          {/* Admin Routes */}
          <Route path="/PendingRequests" element={<PendingOrganizationDetails />} />  {/* Admin view of pending requests */}
          <Route path="/Delete/:id" element={<DeleteOrg />} />  {/* Admin route to delete an organization by ID */}
          <Route path="/browse" element={<BrowseOrganizations />} />  {/* Admin view of all organizations */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
