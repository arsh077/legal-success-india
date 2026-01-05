import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react';

export default function ThankYouContact() {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    name: 'Valued Customer',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const name = sessionStorage.getItem('contactName') || 'Valued Customer';
    const email = sessionStorage.getItem('contactEmail') || '';
    const phone = sessionStorage.getItem('contactPhone') || '';
    setContactData({ name, email, phone });

    // Clear session storage
    sessionStorage.removeItem('contactName');
    sessionStorage.removeItem('contactEmail');
    sessionStorage.removeItem('contactPhone');
  }, []);

  const handleBackHome = () => navigate('/');
  const handleViewCRM = () => navigate('/crm');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Success Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <CheckCircle className="w-32 h-32 text-blue-500 relative z-10" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Message Received, {contactData.name}! 📬
          </h1>

          <p className="text-center text-xl text-gray-600 mb-8">
            Thank you for reaching out to us!
          </p>

          {/* Confirmation Details */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              We Got Your Message
            </h2>

            <div className="space-y-3 mb-4">
              {contactData.email && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>Sent to: <strong>{contactData.email}</strong></span>
                </div>
              )}
              {contactData.phone && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Contact: <strong>{contactData.phone}</strong></span>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-semibold text-blue-700">✓</span> Our team will review your message
              </p>
              <p>
                <span className="font-semibold text-blue-700">✓</span> We'll respond within 24 hours
              </p>
              <p>
                <span className="font-semibold text-blue-700">✓</span> Check your email for updates
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleViewCRM}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
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
            <p className="font-semibold text-gray-900 mb-2">Want to chat directly?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-blue-600">
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
          <p>We're excited to help you with your legal needs!</p>
        </div>
      </div>
    </div>
  );
}
