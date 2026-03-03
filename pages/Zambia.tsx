import React from 'react';
import { MapPin, TrendingUp, Truck, Users } from 'lucide-react';

const Zambia: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-kvi-900 border-b border-kvi-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-kvi-500/10 text-kvi-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Strategic Expansion
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zambia: The Gateway to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-kvi-400">Southern African Innovation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-400">
            KVI has identified Zambia not just as a market, but as the logistical and technological hub for the next decade of African growth.
          </p>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-kvi-800 text-white">
                            <Truck className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-white">Logistics Advantage</h3>
                        <p className="mt-2 text-base text-slate-400">
                            Landlinked by 8 countries, Zambia is the perfect distribution center for hardware, software services, and regional digital infrastructure.
                        </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-kvi-800 text-white">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-white">Stable Growth</h3>
                        <p className="mt-2 text-base text-slate-400">
                            With a stable political environment and a government pushing for digital transformation, Zambia is ripe for long-term tech partnerships.
                        </p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-kvi-800 text-white">
                            <Users className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-white">Young, Tech-Savvy Workforce</h3>
                        <p className="mt-2 text-base text-slate-400">
                            KVI is committed to training and employing local talent, creating a sustainable ecosystem of developers and engineers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-kvi-900 p-8 rounded-2xl border border-kvi-800 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <MapPin size={200} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-6">Partnership Proposal</h2>
                <div className="space-y-6 text-slate-300">
                    <p>
                        Kiprojects Innovations seeks strategic partners to establish a physical HQ in Lusaka. This hub will serve as the command center for our IoT and Software operations across the SADC region.
                    </p>
                    <div className="bg-kvi-950 p-4 rounded-lg border-l-4 border-kvi-500">
                        <p className="font-bold text-white mb-1">Our Offer:</p>
                        <p className="text-sm">We provide the proprietary technology (Cloud Suite, Smart Systems) and technical expertise.</p>
                    </div>
                    <div className="bg-kvi-950 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="font-bold text-white mb-1">Partner Role:</p>
                        <p className="text-sm">Logistics support, local network access, and operational scaling within the Zambian market.</p>
                    </div>
                    <button className="w-full py-4 bg-white text-kvi-950 font-bold rounded-lg hover:bg-slate-200 transition-colors mt-4">
                        Download Full Investor Deck (PDF)
                    </button>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default Zambia;