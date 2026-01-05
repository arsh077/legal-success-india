
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import ServiceDetail from './pages/ServiceDetail';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ApplicationLicense from './pages/ApplicationLicense';
import ApplicationRenewal from './pages/ApplicationRenewal';
import Disclaimer from './pages/Disclaimer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import RefundPolicy from './pages/RefundPolicy';
import Compliance from './pages/Compliance';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ApplicationLicenseForm from './pages/ApplicationLicenseForm';
import ThankYou from './pages/ThankYou';
import ThankYouContact from './pages/ThankYouContact';
import ThankYouRenewal from './pages/ThankYouRenewal';
import CRMDashboard from './pages/CRMDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/apply-license" element={<ApplicationLicense />} />
          <Route path="/apply-license-form" element={<ApplicationLicenseForm />} />
          <Route path="/renew-license" element={<ApplicationRenewal />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply-license-form" element={<ApplicationLicenseForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you-contact" element={<ThankYouContact />} />
          <Route path="/thank-you-renewal" element={<ThankYouRenewal />} />
          <Route path="/crm" element={<CRMDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

