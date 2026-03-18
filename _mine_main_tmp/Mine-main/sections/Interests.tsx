
import React from 'react';
import { motion } from 'framer-motion';
import { interests } from '../data/portfolioData';

const InterestIcon = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case 'camera': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
    case 'globe': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>;
    case 'code': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>;
    case 'terminal': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;
    default: return null;
  }
};

const Interests: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0d121f] px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Personal Side</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Beyond the <span className="text-gradient">Code.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col items-center gap-4 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-xl shadow-sm"
            >
              <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <InterestIcon name={interest.icon} />
              </div>
              <p className="font-black text-slate-900 dark:text-white tracking-wide">{interest.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
