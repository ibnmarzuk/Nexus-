import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-8 mb-20 flex justify-between items-start">
      <div className="w-1/2 pt-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-extrabold tracking-tight leading-[0.95] mb-6 text-white"
        >
          Discover. Collect.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F59E0B]">Extraordinary</span> NFTs
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-8 max-w-md"
        >
          The most curated Web3 marketplace for rare digital art, collectibles, and hyper-limited drops.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <button className="bg-white text-black px-8 py-3.5 rounded-xl font-bold hover:scale-105 transition-transform">
            Explore Marketplace
          </button>
          <button className="border border-white/20 px-8 py-3.5 rounded-xl font-bold backdrop-blur-md hover:bg-white/5 transition-all text-white">
            Create & Mint
          </button>
        </motion.div>
      </div>
    </section>
  );
}
