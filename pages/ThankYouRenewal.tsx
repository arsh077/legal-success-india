import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';

export default function ThankYouRenewal() {
  const navigate = useNavigate();
  const [renewalData, setRenewalData] = useState({
    name: 'Valued Customer',
    email: '',
    licenseNumber: '',
  });

  useEffect(() => {
    const name = sessionStorage.getItem('renewalName') || 'Valued Customer';
    const email = sessionStorage.getItem('renewalEmail') || '';
    const licenseNumber = sessionStorage.getItem('renewalLicenseNumber') || '';
    setRenewalData({ name, email, licenseNumber });

    // Clear session storage
    sessionStorage.removeItem('renewalName');
    sessionStorage.removeItem('renewalEmail');
    sessionStorage.removeItem('renewalLicenseNumber');
  }, []);

  const handleBackHome = () => navigate('/');
  const handleViewCRM = () => navigate('/crm');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Success Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <CheckCircle className="w-32 h-32 text-purple-500 relative z-10" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Renewal Request Received, {renewalData.name}! ✨
          </h1>

          <p className="text-center text-xl text-gray-600 mb-8">
            Your license renewal application has been successfully submitted!
          </p>

          {/* Confirmation Details */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Renewal Status
            </h2>

            <div className="space-y-3 mb-4">
              {renewalData.email && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>Email: <strong>{renewalData.email}</strong></span>
                </div>
              )}
              {renewalData.licenseNumber && (
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="font-semibold text-purple-600">📋</span>
                  <span>License #: <strong>{renewalData.licenseNumber}</strong></span>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-semibold text-purple-700">✓</span> Your renewal has been processed
              </p>
              <p>
                <span className="font-semibold text-purple-700">✓</span> Processing typically takes 2-5 business days
              </p>
              <p>
                <span className="font-semibold text-purple-700">✓</span> You'll receive updates via email
              </p>
            </div>
          </div>

          {/* Important Info */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-amber-900 mb-3">Important: Before Renewal Expires</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li><strong>1.</strong> Keep your contact information updated</li>
              <li><strong>2.</strong> Ensure all documentation is current</li>
              <li><strong>3.</strong> Check your email regularly for updates</li>
              <li><strong>4.</strong> Complete renewal before expiration date</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleViewCRM}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              <span>View in CRM</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleBackHome}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full transition-all duration-200"
            >
              Back to Home
            </button>
          </div>

          {/* Contact Support */}
          <div className="text-center text-sm text-gray-600 pt-8 border-t border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">Questions about renewal?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-purple-600">
              <a href="tel:09007299384" className="hover:underline font-semibold">
                📞 09007299384
              </a>
              <a href="mailto:legalsuccessindia@gmail.com" className="hover:underline font-semibold">
                📧 legalsuccessindia@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8 text-gray-600">
          <p>Your license renewal is in good hands with Legal Success India!</p>
        </div>
      </div>
    </div>
  );
}
