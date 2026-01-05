import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle, Mail, Phone } from 'lucide-react';
import { leadsService } from '../services/leadsService';

export default function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Save to leads service with contact type
      const contact = leadsService.addLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.subject,
        packageType: 'Contact Inquiry',
      });

      // Store info in session storage for thank you page
      sessionStorage.setItem('contactName', formData.name);
      sessionStorage.setItem('contactEmail', formData.email);
      sessionStorage.setItem('contactPhone', formData.phone);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect to thank you page
      navigate('/thank-you-contact');
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.name
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'
          } focus:outline-none`}
        />
        {errors.name && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </div>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.email
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'
          } focus:outline-none`}
        />
        {errors.email && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </div>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="09007299384"
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
            errors.phone
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'
          } focus:outline-none`}
        />
        {errors.phone && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            {errors.phone}
          </div>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:bg-blue-50 focus:outline-none transition-colors"
        >
          <option>General Inquiry</option>
          <option>FSSAI License Help</option>
          <option>License Renewal</option>
          <option>Compliance Issue</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
            errors.message
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300 focus:border-blue-500 focus:bg-blue-50'
          } focus:outline-none`}
        />
        {errors.message && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </div>
        )}
      </div>

      {/* Submit Error */}
      {errors.submit && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-600">
          <AlertCircle className="w-5 h-5" />
          {errors.submit}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            <Mail className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      {/* Info Box */}
      <div className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>📞 Prefer to call?</strong> Reach us at 09007299384 or email legalsuccessindia@gmail.com
        </p>
      </div>
    </form>
  );
}
