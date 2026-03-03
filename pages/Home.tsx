import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cloud, Lock, Server, Smartphone, Globe } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 6890 },
  { name: 'Jun', value: 8390 },
];

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-kvi-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-kvi-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-kvi-900/50 border border-kvi-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-in slide-in-from-top-10 fade-in duration-700">
            <span className="w-2 h-2 rounded-full bg-kvi-400 animate-pulse"></span>
            <span className="text-kvi-300 text-xs font-mono tracking-wider">SYSTEMS OPERATIONAL</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight animate-in slide-in-from-bottom-10 fade-in duration-700 delay-100">
            Engineering Tomorrow's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kvi-400 to-neon-purple">Intelligence</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-200">
            Kiprojects Innovations (KVI) is the bridge between vision and reality. We build ultra-scalable digital infrastructure, AI automation, and smart ecosystems for global emerging markets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
            <Link to="/innovations" className="px-8 py-4 bg-kvi-500 hover:bg-kvi-400 text-white rounded-lg font-semibold transition-all shadow-lg shadow-kvi-500/30 hover:shadow-kvi-500/50 flex items-center">
              Explore Innovations <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/zambia" className="px-8 py-4 bg-kvi-900/50 hover:bg-kvi-800 border border-kvi-700 text-slate-200 rounded-lg font-semibold transition-all backdrop-blur-sm">
              Partner With Us
            </Link>
          </div>

          {/* Hero Visual Metric */}
          <div className="mt-16 max-w-4xl mx-auto h-48 sm:h-64 opacity-60 pointer-events-none">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-kvi-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive digital transformation across four strategic pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-kvi-900/50 border border-kvi-800 p-8 rounded-2xl hover:border-kvi-500/50 transition-colors group">
              <div className="w-12 h-12 bg-kvi-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-kvi-500 transition-colors">
                <Server className="text-kvi-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Software & Automation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Custom cloud infrastructure, AI agent systems, and robust API development for enterprise scalability.
              </p>
            </div>

            <div className="bg-kvi-900/50 border border-kvi-800 p-8 rounded-2xl hover:border-kvi-500/50 transition-colors group">
              <div className="w-12 h-12 bg-kvi-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-kvi-500 transition-colors">
                <Activity className="text-kvi-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Systems & IoT</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Industrial monitoring, smart city environmental sensors, and remote control dashboards.
              </p>
            </div>

            <div className="bg-kvi-900/50 border border-kvi-800 p-8 rounded-2xl hover:border-kvi-500/50 transition-colors group">
              <div className="w-12 h-12 bg-kvi-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-kvi-500 transition-colors">
                <Lock className="text-kvi-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cyber Intelligence</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advanced threat detection, secure cloud architecture, and enterprise-grade encryption.
              </p>
            </div>

            <div className="bg-kvi-900/50 border border-kvi-800 p-8 rounded-2xl hover:border-kvi-500/50 transition-colors group">
              <div className="w-12 h-12 bg-kvi-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-kvi-500 transition-colors">
                <Smartphone className="text-kvi-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Media Platforms</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Next-gen streaming tech, POS systems, and mobile applications for the creator economy.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-kvi-900">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Join us in building the digital backbone of Africa and beyond.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="px-10 py-4 bg-white text-kvi-950 font-bold rounded-lg hover:bg-slate-200 transition-colors">
              Start Project
            </Link>
          </div>
        </div>
       </section>
    </div>
  );
};

export default Home;