import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';

export default function ThankYou() {
  const navigate = useNavigate();
  const [applicantData, setApplicantData] = useState({
    name: 'Valued Client',
    email: '',
  });

  useEffect(() => {
    const name = sessionStorage.getItem('applicantName') || 'Valued Client';
    const email = sessionStorage.getItem('applicantEmail') || '';
    setApplicantData({ name, email });

    // Clear session storage
    sessionStorage.removeItem('applicantName');
    sessionStorage.removeItem('applicantEmail');
  }, []);

  const handleBackHome = () => navigate('/');
  const handleViewCRM = () => navigate('/dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Success Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
              <CheckCircle className="w-32 h-32 text-green-500 relative z-10" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Thank You, {applicantData.name}! 🎉
          </h1>

          <p className="text-center text-xl text-gray-600 mb-8">
            Your application has been successfully submitted!
          </p>

          {/* Confirmation Details */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Application Confirmed
            </h2>

            <div className="space-y-3 mb-4">
              {applicantData.email && (
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>Confirmation sent to: <strong>{applicantData.email}</strong></span>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 text-sm text-gray-600 space-y-2">
              <p>
                <span className="font-semibold text-green-700">✓</span> Our team will review your application within 2 hours
              </p>
              <p>
                <span className="font-semibold text-green-700">✓</span> You'll receive a confirmation email shortly
              </p>
              <p>
                <span className="font-semibold text-green-700">✓</span> We'll contact you with the next steps
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
            <ol className="space-y-2 text-sm text-blue-800">
              <li><strong>1.</strong> We'll verify your information</li>
              <li><strong>2.</strong> Our team will contact you within 2 hours</li>
              <li><strong>3.</strong> You'll receive your official documentation</li>
              <li><strong>4.</strong> Activate your account and get started!</li>
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleViewCRM}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105"
            >
              <span>View in Dashboard</span>
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
            <p className="font-semibold text-gray-900 mb-2">Need immediate assistance?</p>
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
          <p>We appreciate your trust in Legal Success India</p>
        </div>
      </div>
    </div>
  );
}
