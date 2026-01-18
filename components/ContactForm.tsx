import React, { useState } from 'react';
import Icon from './Icon';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row shadow-xl">
          {/* Info Side - Changed to brandDark */}
          <div className="p-12 lg:w-1/3 bg-brandDark text-white">
            <h2 className="text-3xl font-bold mb-6">Alustame koostööd</h2>
            <p className="text-white/80 mb-12">
              Kas olete valmis oma äri järgmisele tasemele viima? Täitke vorm ja me võtame teiega ühendust 24 tunni jooksul.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon name="mail" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Email</p>
                  <p className="font-medium">info@dorianova.ee</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon name="user" size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase font-bold tracking-wider">Asukoht</p>
                  <p className="font-medium">Tallinn, Eesti</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nimi</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Teie täisnimi"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@ettevote.ee"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ettevõte</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Teie ettevõtte nimi"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sõnum</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Kuidas saame teid aidata?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-gray-900 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-brandDark text-white py-4 rounded-xl font-bold hover:bg-brand transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg active:scale-[0.98]"
              >
                {status === 'loading' ? (
                  <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : status === 'success' ? (
                  "Saadetud!"
                ) : (
                  <>
                    Saada päring
                    <Icon name="arrow-right" size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;