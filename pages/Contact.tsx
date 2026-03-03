import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. KVI Team will respond shortly.");
  };

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Start the Conversation</h1>
          <p className="text-slate-400">Whether you need a custom software solution or want to discuss the Zambia expansion.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-kvi-900/50 p-8 rounded-2xl border border-kvi-800">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-kvi-400 w-6 h-6 mt-1" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-slate-400">hello@kiprojects.com</p>
                  <p className="text-slate-400">partnerships@kiprojects.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-kvi-400 w-6 h-6 mt-1" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-slate-400">+1 (555) 000-0000 (Global)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-kvi-400 w-6 h-6 mt-1" />
                <div>
                  <p className="text-white font-medium">Headquarters</p>
                  <p className="text-slate-400">Global Digital Operations</p>
                  <p className="text-slate-400 text-sm mt-2 text-kvi-500">Coming Soon: Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-kvi-900 p-8 rounded-2xl border border-kvi-800 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-kvi-950 border border-kvi-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kvi-500 transition-colors"
                  placeholder="John Doe"
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-kvi-950 border border-kvi-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kvi-500 transition-colors"
                  placeholder="john@company.com"
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-kvi-950 border border-kvi-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-kvi-500 transition-colors"
                  placeholder="Tell us about your project..."
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-kvi-500 to-blue-600 hover:from-kvi-400 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-kvi-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;