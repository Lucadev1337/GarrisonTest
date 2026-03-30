import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, Scissors, CheckCircle2, AlertCircle } from 'lucide-react';

const steps = ["Service", "Time", "Details"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    "The Garrison Cut (£45)",
    "Signature Fade (£35)",
    "Full Grooming (£75)",
    "Beard Sculpt (£30)",
    "Hot Towel Shave (£40)"
  ];

  const times = ["09:00", "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-ink">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-4">SECURE YOUR SLOT</h1>
          <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <AlertCircle size={16} /> Limited availability this week
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                step > i + 1 ? 'bg-gold border-gold text-ink' : 
                step === i + 1 ? 'bg-ink border-gold text-gold' : 'bg-ink border-white/10 text-gray-500'
              }`}>
                {step > i + 1 ? <CheckCircle2 size={20} /> : i + 1}
              </div>
              <span className={`text-[10px] uppercase tracking-widest mt-2 font-bold ${step === i + 1 ? 'text-gold' : 'text-gray-500'}`}>
                {s}
              </span>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-serif mb-8 uppercase tracking-widest flex items-center gap-3">
                <Scissors className="text-gold" /> Select Service
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {services.map(s => (
                  <button
                    key={s}
                    onClick={() => { setFormData({...formData, service: s}); nextStep(); }}
                    className={`text-left p-6 border transition-all hover:border-gold group ${
                      formData.service === s ? 'border-gold bg-gold/5' : 'border-white/5 bg-white/5'
                    }`}
                  >
                    <span className={`uppercase tracking-widest font-bold group-hover:text-gold ${formData.service === s ? 'text-gold' : 'text-white'}`}>
                      {s}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-serif mb-8 uppercase tracking-widest flex items-center gap-3">
                <Calendar className="text-gold" /> Select Time
              </h2>
              <div className="mb-8">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {times.map(t => (
                  <button
                    key={t}
                    onClick={() => { setFormData({...formData, time: t}); nextStep(); }}
                    className={`p-4 border text-center transition-all hover:border-gold ${
                      formData.time === t ? 'border-gold bg-gold/5 text-gold' : 'border-white/5 bg-white/5 text-gray-400'
                    }`}
                  >
                    <span className="font-bold tracking-widest">{t}</span>
                  </button>
                ))}
              </div>
              <button onClick={prevStep} className="mt-8 text-gray-500 uppercase text-xs font-bold tracking-widest hover:text-white">Back</button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-serif mb-8 uppercase tracking-widest flex items-center gap-3">
                <Clock className="text-gold" /> Final Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+44 7123 456789"
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold outline-none"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="pt-6">
                  <button 
                    onClick={() => setStep(4)}
                    className="w-full bg-gold text-ink py-5 font-bold uppercase tracking-widest hover:bg-gold-hover transition-all"
                  >
                    Confirm Appointment
                  </button>
                </div>
                <button onClick={prevStep} className="text-gray-500 uppercase text-xs font-bold tracking-widest hover:text-white">Back</button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 text-ink">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">APPOINTMENT SECURED</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Your slot is locked in. A confirmation email has been sent to <span className="text-white">{formData.email}</span>. We look forward to seeing you at the Garrison.
              </p>
              <div className="bg-white/5 p-6 border border-white/10 text-left mb-10">
                <div className="flex justify-between mb-2"><span className="text-gray-500 uppercase text-[10px] tracking-widest">Service</span> <span className="text-white font-bold text-xs uppercase">{formData.service}</span></div>
                <div className="flex justify-between mb-2"><span className="text-gray-500 uppercase text-[10px] tracking-widest">Date</span> <span className="text-white font-bold text-xs uppercase">{formData.date}</span></div>
                <div className="flex justify-between"><span className="text-gray-500 uppercase text-[10px] tracking-widest">Time</span> <span className="text-white font-bold text-xs uppercase">{formData.time}</span></div>
              </div>
              <a href="/" className="text-gold uppercase text-xs font-bold tracking-[0.3em] hover:text-white transition-colors">Return to Home</a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
