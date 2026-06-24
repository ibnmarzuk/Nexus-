import { Search, ShoppingBag, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/10 h-[72px]">
      <div className="max-w-7xl mx-auto px-10 h-full flex items-center justify-between">
        <div className="text-2xl font-display font-bold text-white tracking-tighter">NEXUS</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {['Explore', 'Collections', 'Mint', 'Rankings'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-[#7C3AED]/20 text-white"
          >
            Connect Wallet
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
