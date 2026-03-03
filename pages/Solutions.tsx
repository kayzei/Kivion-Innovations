import React, { useState } from 'react';
import { 
  BarChart3, Cloud, Music, FlaskConical, Camera, 
  Settings, Users, ShoppingCart, Activity, FileText, Play, Pause, SkipForward,
  CreditCard, Wifi
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'fab' | 'indimba' | 'health' | 'deezee'>('cloud');

  return (
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Innovations Lab</h1>
          <p className="text-slate-400">Live previews of our flagship platforms and pilot projects.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'cloud', label: 'KVI Cloud Suite', icon: Cloud },
            { id: 'fab', label: "Fab's Lounge POS", icon: ShoppingCart },
            { id: 'indimba', label: 'Indimba Music', icon: Music },
            { id: 'health', label: 'Smart Health Lab', icon: FlaskConical },
            { id: 'deezee', label: 'Deezee Events', icon: Camera },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-kvi-500 text-white shadow-lg shadow-kvi-500/25'
                  : 'bg-kvi-900 text-slate-400 hover:text-white border border-kvi-800'
              }`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-kvi-900/50 border border-kvi-800 rounded-3xl overflow-hidden min-h-[600px] shadow-2xl">
          
          {/* CLOUD SUITE MOCKUP */}
          {activeTab === 'cloud' && (
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white">KVI Cloud Control Suite</h2>
                  <p className="text-slate-400 text-sm">Centralized remote administration & IoT analytics.</p>
                </div>
                <div className="flex space-x-2">
                    <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-green-500 uppercase font-mono">System Online</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Stats */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-kvi-950 p-4 rounded-xl border border-kvi-800">
                            <p className="text-slate-500 text-xs uppercase">CPU Load</p>
                            <p className="text-2xl font-mono text-white">42%</p>
                        </div>
                        <div className="bg-kvi-950 p-4 rounded-xl border border-kvi-800">
                            <p className="text-slate-500 text-xs uppercase">Active Nodes</p>
                            <p className="text-2xl font-mono text-white">1,024</p>
                        </div>
                        <div className="bg-kvi-950 p-4 rounded-xl border border-kvi-800">
                            <p className="text-slate-500 text-xs uppercase">Network</p>
                            <p className="text-2xl font-mono text-white">4.2 GB/s</p>
                        </div>
                    </div>
                    
                    <div className="bg-kvi-950 border border-kvi-800 rounded-xl p-4 h-64">
                         <h4 className="text-xs text-slate-500 mb-4 uppercase">Traffic Analysis</h4>
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={[
                                {name: '00:00', uv: 400}, {name: '04:00', uv: 300}, {name: '08:00', uv: 550},
                                {name: '12:00', uv: 800}, {name: '16:00', uv: 600}, {name: '20:00', uv: 900},
                            ]}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" stroke="#475569" fontSize={10} />
                                <YAxis stroke="#475569" fontSize={10} />
                                <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b'}} />
                                <Area type="monotone" dataKey="uv" stroke="#06b6d4" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sidebar Controls */}
                <div className="bg-kvi-950 border border-kvi-800 rounded-xl p-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center"><Settings size={16} className="mr-2"/> Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full text-left px-4 py-3 bg-kvi-900 hover:bg-kvi-800 rounded-lg text-sm text-slate-300 transition-colors flex items-center justify-between">
                            <span>Deploy Container</span>
                            <span className="text-xs bg-kvi-500/20 text-kvi-400 px-2 py-0.5 rounded">New</span>
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-kvi-900 hover:bg-kvi-800 rounded-lg text-sm text-slate-300 transition-colors">
                            Run Diagnostics
                        </button>
                        <button className="w-full text-left px-4 py-3 bg-kvi-900 hover:bg-kvi-800 rounded-lg text-sm text-slate-300 transition-colors">
                            Manage API Keys
                        </button>
                        <hr className="border-kvi-800 my-4" />
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-500">Auto-Scaling</span>
                            <div className="w-10 h-5 bg-kvi-500 rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          )}

          {/* FAB'S LOUNGE POS */}
          {activeTab === 'fab' && (
            <div className="p-8 h-full">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Fab's Lounge POS</h2>
                    <p className="text-slate-400 text-sm">Bar management system with real-time inventory.</p>
                  </div>
                  <div className="text-right">
                      <p className="text-2xl font-mono text-white font-bold">10:42 PM</p>
                      <p className="text-xs text-slate-500">Station: BAR_MAIN_01</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 h-[500px]">
                    {/* Menu Grid */}
                    <div className="col-span-2 grid grid-cols-3 gap-3 content-start overflow-y-auto pr-2">
                        {['Lager', 'Stout', 'Cider', 'Wine (Red)', 'Wine (White)', 'Whiskey', 'Gin', 'Cocktail A', 'Cocktail B'].map((item, i) => (
                            <button key={i} className="bg-kvi-950 hover:bg-kvi-800 border border-kvi-800 p-4 rounded-xl flex flex-col items-center justify-center h-24 transition-colors">
                                <span className="text-white font-medium">{item}</span>
                                <span className="text-kvi-400 text-sm mt-1">$5.00</span>
                            </button>
                        ))}
                    </div>

                    {/* Cart/Tab */}
                    <div className="bg-white text-slate-900 rounded-xl p-4 flex flex-col">
                        <h3 className="font-bold text-lg border-b pb-2 mb-2 flex justify-between">
                            <span>Table #4</span>
                            <span className="text-orange-500">OPEN</span>
                        </h3>
                        <div className="flex-grow space-y-2 overflow-y-auto">
                            <div className="flex justify-between text-sm">
                                <span>2x Lager</span>
                                <span className="font-mono">$10.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>1x Whiskey Dbl</span>
                                <span className="font-mono">$12.00</span>
                            </div>
                        </div>
                        <div className="border-t pt-4 mt-4 space-y-3">
                            <div className="flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>$22.00</span>
                            </div>
                            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold shadow-lg">CHARGE</button>
                            <button className="w-full bg-slate-200 text-slate-800 py-2 rounded-lg font-medium">Print Receipt</button>
                        </div>
                    </div>
                </div>
            </div>
          )}

          {/* INDIMBA */}
          {activeTab === 'indimba' && (
            <div className="p-8">
               <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-white">Indimba Ecosystem</h2>
                  <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-kvi-800 rounded-full text-xs text-slate-300">Web</span>
                      <span className="px-3 py-1 bg-kvi-800 rounded-full text-xs text-slate-300">iOS</span>
                      <span className="px-3 py-1 bg-kvi-800 rounded-full text-xs text-slate-300">Android</span>
                  </div>
               </div>
               
               <div className="flex flex-col md:flex-row gap-8">
                   {/* Mobile Mockup */}
                   <div className="w-64 bg-black border-4 border-slate-800 rounded-[2.5rem] p-4 mx-auto relative shadow-2xl">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-800 rounded-b-xl"></div>
                       <div className="mt-8 space-y-4">
                           <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl w-full flex items-center justify-center shadow-lg">
                                <Music size={48} className="text-white opacity-50"/>
                           </div>
                           <div className="text-center">
                               <h3 className="text-white font-bold text-lg">Midnight Beats</h3>
                               <p className="text-slate-400 text-sm">Zambian Afro-Fusion</p>
                           </div>
                           <div className="flex justify-center items-center space-x-6 pt-2 text-white">
                               <SkipForward size={20} className="rotate-180"/>
                               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                                   <Play fill="black" size={20} className="ml-1"/>
                               </div>
                               <SkipForward size={20}/>
                           </div>
                       </div>
                   </div>

                   {/* Admin Dashboard */}
                   <div className="flex-1 bg-kvi-950 rounded-xl border border-kvi-800 p-6">
                       <h3 className="text-slate-400 text-sm uppercase mb-4">Artist Stats Portal</h3>
                       <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={[
                                    {name: 'Mon', streams: 4000}, {name: 'Tue', streams: 3000},
                                    {name: 'Wed', streams: 2000}, {name: 'Thu', streams: 2780},
                                    {name: 'Fri', streams: 1890}, {name: 'Sat', streams: 2390},
                                ]}>
                                    <XAxis dataKey="name" stroke="#475569" fontSize={10}/>
                                    <Bar dataKey="streams" fill="#a855f7" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                       </div>
                       <div className="mt-6 grid grid-cols-2 gap-4">
                           <div className="p-4 bg-kvi-900 rounded-lg">
                               <div className="text-xs text-slate-500">Royalties Earned</div>
                               <div className="text-xl font-mono text-white">$1,240.50</div>
                           </div>
                           <div className="p-4 bg-kvi-900 rounded-lg">
                               <div className="text-xs text-slate-500">Active Listeners</div>
                               <div className="text-xl font-mono text-white">45.2K</div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
          )}

           {/* SMART HEALTH */}
           {activeTab === 'health' && (
            <div className="p-8">
               <div className="flex justify-between items-center mb-8">
                  <div>
                     <h2 className="text-2xl font-bold text-white">Smart Health Laboratory</h2>
                     <p className="text-slate-400 text-sm">Digital sample tracking & result automation.</p>
                  </div>
                  <div className="bg-blue-900/30 text-blue-400 px-4 py-2 rounded-lg text-xs font-mono border border-blue-500/30">
                      CEDRIC PROJECT: PILOT PHASE
                  </div>
               </div>

               <div className="bg-slate-50 rounded-lg overflow-hidden text-slate-900 shadow-xl">
                   <div className="bg-slate-200 px-6 py-3 border-b border-slate-300 flex justify-between items-center">
                       <span className="font-bold text-slate-700">Lab Request Queue</span>
                       <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded uppercase font-bold tracking-wider">New Entry</button>
                   </div>
                   <table className="w-full text-sm text-left">
                       <thead className="bg-slate-100 text-slate-500 uppercase text-xs">
                           <tr>
                               <th className="px-6 py-3">Sample ID</th>
                               <th className="px-6 py-3">Patient Name</th>
                               <th className="px-6 py-3">Test Type</th>
                               <th className="px-6 py-3">Status</th>
                               <th className="px-6 py-3">Action</th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-200">
                           <tr>
                               <td className="px-6 py-4 font-mono">LAB-2023-001</td>
                               <td className="px-6 py-4">John Doe</td>
                               <td className="px-6 py-4">Haematology</td>
                               <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Processing</span></td>
                               <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">View</td>
                           </tr>
                           <tr>
                               <td className="px-6 py-4 font-mono">LAB-2023-002</td>
                               <td className="px-6 py-4">Jane Smith</td>
                               <td className="px-6 py-4">Biochemistry</td>
                               <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span></td>
                               <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">Download PDF</td>
                           </tr>
                           <tr>
                               <td className="px-6 py-4 font-mono">LAB-2023-003</td>
                               <td className="px-6 py-4">Alice Brown</td>
                               <td className="px-6 py-4">Microbiology</td>
                               <td className="px-6 py-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Flagged</span></td>
                               <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">Review</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
               
               <div className="mt-8 grid grid-cols-3 gap-6">
                   <div className="bg-kvi-950 p-4 border border-kvi-800 rounded-lg">
                       <h4 className="text-white text-sm font-bold mb-2">Workflow Benefit</h4>
                       <p className="text-xs text-slate-400">Eliminates 90% of paperwork errors by digitizing sample intake at the source.</p>
                   </div>
                   <div className="bg-kvi-950 p-4 border border-kvi-800 rounded-lg">
                       <h4 className="text-white text-sm font-bold mb-2">Teaching Hospital Ready</h4>
                       <p className="text-xs text-slate-400">Scalable architecture designed to handle thousands of daily samples across national networks.</p>
                   </div>
                   <div className="bg-kvi-950 p-4 border border-kvi-800 rounded-lg">
                       <h4 className="text-white text-sm font-bold mb-2">Auto-Reporting</h4>
                       <p className="text-xs text-slate-400">Generates branded PDF results and emails them to doctors instantly upon approval.</p>
                   </div>
               </div>
            </div>
          )}

          {/* DEEZEE */}
          {activeTab === 'deezee' && (
            <div className="p-8">
               <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-white">Deezee Events & Photography</h2>
                  <p className="text-slate-400 text-sm">Professional portfolio & booking engine.</p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-4">
                       <div className="bg-white text-slate-900 p-6 rounded-lg shadow-lg rotate-1">
                           <h3 className="font-serif text-2xl mb-1">Modern Wedding</h3>
                           <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Collection 2024</p>
                           <div className="aspect-video bg-slate-200 rounded mb-4 flex items-center justify-center text-slate-400">
                               [High-Res Gallery Preview]
                           </div>
                           <div className="flex justify-between items-center">
                               <button className="bg-black text-white text-xs px-4 py-2 rounded">Book Session</button>
                               <span className="font-bold">$450</span>
                           </div>
                       </div>
                   </div>

                   <div className="bg-kvi-950 border border-kvi-800 rounded-xl p-6">
                       <h3 className="text-white font-bold mb-4">Platform Features</h3>
                       <ul className="space-y-4">
                           <li className="flex items-center space-x-3">
                               <CreditCard className="text-kvi-400" size={20} />
                               <div>
                                   <div className="text-white text-sm font-medium">Payment Processing</div>
                                   <div className="text-xs text-slate-500">Integrated small-business payment module.</div>
                               </div>
                           </li>
                           <li className="flex items-center space-x-3">
                               <Users className="text-kvi-400" size={20} />
                               <div>
                                   <div className="text-white text-sm font-medium">Client Portal</div>
                                   <div className="text-xs text-slate-500">Clients can view watermarked drafts and select favorites.</div>
                               </div>
                           </li>
                           <li className="flex items-center space-x-3">
                               <FileText className="text-kvi-400" size={20} />
                               <div>
                                   <div className="text-white text-sm font-medium">Auto-Invoicing</div>
                                   <div className="text-xs text-slate-500">Generate professional contracts and invoices.</div>
                               </div>
                           </li>
                       </ul>
                   </div>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Solutions;