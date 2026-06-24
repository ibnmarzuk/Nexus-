import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

const TRENDING_NFTS = [
  { id: '1', name: 'Cyber Neon Apes', collection: 'CyberApes', price: 2.4, image: 'bg-gradient-to-br from-violet-500 to-cyan-500', likes: 120 },
  { id: '2', name: 'Abstract Dreams', collection: 'ArtBlocks', price: 1.8, image: 'bg-gradient-to-br from-amber-500 to-orange-500', likes: 98 },
  { id: '3', name: 'Space Explorer', collection: 'Cosmos', price: 3.5, image: 'bg-gradient-to-br from-blue-600 to-indigo-600', likes: 210 },
  { id: '4', name: 'Digital Ghost', collection: 'Spectres', price: 0.9, image: 'bg-gradient-to-br from-emerald-500 to-teal-500', likes: 85 },
  { id: '5', name: 'Future City', collection: 'NeoTokyo', price: 5.2, image: 'bg-gradient-to-br from-rose-500 to-pink-500', likes: 300 },
  { id: '6', name: 'Golden Orb', collection: 'Ethereal', price: 4.1, image: 'bg-gradient-to-br from-yellow-500 to-amber-600', likes: 155 },
];

export default function Trending() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-white mb-8">Trending Now</h2>
      <div className="grid grid-cols-4 gap-6">
        {TRENDING_NFTS.map((nft) => (
          <motion.div 
            key={nft.id}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-3 rounded-2xl flex items-center gap-4"
          >
            <div className={`w-16 h-16 rounded-xl ${nft.image}`} />
            <div>
              <p className="text-sm font-bold">{nft.name}</p>
              <p className="text-xs text-slate-500 font-mono">{nft.price} Ξ</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
