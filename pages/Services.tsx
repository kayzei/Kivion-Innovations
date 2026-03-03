import React from 'react';
import {  Cpu, Globe, ShieldCheck, Video, Code, CloudLightning, Database, Wifi } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="w-full pt-10 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Capabilities</h1>
        <p className="text-xl text-slate-400 max-w-3xl">
          We combine deep technical expertise with industry knowledge to deliver solutions that are not just modern, but future-proof.
        </p>
      </div>

      {/* Service Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Software */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-kvi-500/20 rounded-lg">
                <Code className="text-kvi-400 w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Software Engineering & Automation</h2>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              At the heart of KVI is a relentless pursuit of coding excellence. We build systems that run businesses. From the flagship <span className="text-kvi-400">KVI Cloud Control Suite</span> to bespoke ERPs, our software is designed for stability and scale.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-kvi-500 mr-3"></span>
                <span><strong>Custom Software Development:</strong> React, Python, Node.js solutions tailored to specific workflows.</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-kvi-500 mr-3"></span>
                <span><strong>AI Automation:</strong> Intelligent agents that handle customer service, data entry, and predictive analytics.</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-kvi-500 mr-3"></span>
                <span><strong>API Development:</strong> Robust middleware connecting disparate legacy systems to modern UIs.</span>
              </li>
            </ul>
          </div>
          <div className="bg-kvi-900 rounded-2xl p-8 border border-kvi-800 shadow-2xl relative overflow-hidden">
             {/* Abstract Code UI */}
             <div className="space-y-3 font-mono text-xs">
                <div className="text-slate-500">import <span className="text-neon-purple">KVI_Core</span> from 'engine';</div>
                <div className="text-slate-500">class <span className="text-yellow-400">Innovation</span> extends <span className="text-neon-purple">Vision</span> {'{'}</div>
                <div className="pl-4 text-kvi-400">this.scale = 'GLOBAL';</div>
                <div className="pl-4 text-kvi-400">this.security = true;</div>
                <div className="pl-4 text-green-400">await this.deploy();</div>
                <div className="text-slate-500">{'}'}</div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-kvi-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* IoT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-kvi-900 rounded-2xl p-8 border border-kvi-800 shadow-2xl">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-kvi-950 p-4 rounded-xl border border-kvi-800">
                   <Wifi className="text-green-500 mb-2 w-5 h-5" />
                   <div className="text-2xl font-bold text-white">99.9%</div>
                   <div className="text-xs text-slate-500">Uptime</div>
                </div>
                <div className="bg-kvi-950 p-4 rounded-xl border border-kvi-800">
                   <CloudLightning className="text-yellow-500 mb-2 w-5 h-5" />
                   <div className="text-2xl font-bold text-white">24ms</div>
                   <div className="text-xs text-slate-500">Latency</div>
                </div>
                <div className="bg-kvi-950 p-4 rounded-xl border border-kvi-800 col-span-2">
                   <div className="flex justify-between items-end">
                     <div>
                        <div className="text-sm text-slate-400">Sensor Array A</div>
                        <div className="text-lg font-bold text-white">Active</div>
                     </div>
                     <div className="flex space-x-1">
                        <div className="w-1 h-4 bg-kvi-500 rounded-sm"></div>
                        <div className="w-1 h-6 bg-kvi-500 rounded-sm"></div>
                        <div className="w-1 h-3 bg-kvi-500 rounded-sm"></div>
                        <div className="w-1 h-8 bg-kvi-500 rounded-sm"></div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-kvi-500/20 rounded-lg">
                <Cpu className="text-kvi-400 w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Smart Systems & IoT</h2>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We bridge the physical and digital worlds. Our IoT solutions provide real-time visibility into operations, from agricultural fields in Zambia to manufacturing plants globally.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-300">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-kvi-500 mr-3"></span>
                <span><strong>Environmental Sensors:</strong> Monitoring temperature, humidity, and air quality for smart cities.</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-kvi-500 mr-3"></span>
                <span><strong>Remote Dashboards:</strong> Control hardware from anywhere in the world via the KVI Web Interface.</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-kvi-500 mr-3"></span>
                <span><strong>Viltec Engineering:</strong> Specialized solutions for industrial energy management.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cyber & Media */}
        <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6 border border-kvi-800 rounded-2xl hover:bg-kvi-900/30 transition-colors">
                <ShieldCheck className="text-neon-purple w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Cybersecurity & Intelligence</h3>
                <p className="text-slate-400 text-sm mb-4">
                    In a digital-first world, trust is currency. We deploy enterprise encryption, continuous threat detection algorithms, and secure cloud architectures to protect your data assets.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-kvi-900 border border-kvi-700 rounded text-xs text-slate-300">End-to-End Encrypted</span>
                    <span className="px-2 py-1 bg-kvi-900 border border-kvi-700 rounded text-xs text-slate-300">Zero Trust</span>
                </div>
            </div>

            <div className="p-6 border border-kvi-800 rounded-2xl hover:bg-kvi-900/30 transition-colors">
                <Video className="text-pink-500 w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Media & Digital Platforms</h3>
                <p className="text-slate-400 text-sm mb-4">
                    Empowering creators and businesses. From the <strong>Indimba</strong> music ecosystem to the <strong>Fab's Lounge POS</strong>, we build high-performance applications that look as good as they function.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-kvi-900 border border-kvi-700 rounded text-xs text-slate-300">iOS/Android</span>
                    <span className="px-2 py-1 bg-kvi-900 border border-kvi-700 rounded text-xs text-slate-300">Real-time Streaming</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;