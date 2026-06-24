/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Trending from './components/Trending';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC] font-sans relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7C3AED] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#06B6D4] rounded-full blur-[120px]"></div>
      </div>
      <Navigation />
      <main className="p-10 relative z-10">
        <Hero />
        <Trending />
      </main>
    </div>
  );
}
