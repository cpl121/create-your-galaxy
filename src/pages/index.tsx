'use client';

import { useState } from 'react';
import { Button, Scene } from '@/components';
import ControlPanel from '../components/ControlPanel';
import { Maximize2, Minimize2 } from 'lucide-react';
import type { GalaxyParams } from '@/lib/types';
import { useRouter } from 'next/router';
import { encodeGalaxyParams } from '@/lib/utils';

export default function Home() {
  const [isControlsOpen, setIsControlsOpen] = useState(true);
  const [galaxyParams, setGalaxyParams] = useState<GalaxyParams>({
    stars: 10000,
    radius: 5,
    branches: 5,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: '#ff6030',
    outsideColor: '#1b3984',
  });
  const router = useRouter();

  const toggleControls = () => {
    setIsControlsOpen(!isControlsOpen);
  };

  const handleViewGalaxy = () => {
    const queryCompressed = encodeGalaxyParams(galaxyParams);
    router.push(`/custom-galaxy?g=${queryCompressed}`);
  };

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black z-0 opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/stars-bg.png')] bg-repeat opacity-30 z-0"></div>

      <header className="relative z-10 pt-8 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-2">
          Create Your{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Galaxy
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Customize and visualize your own galaxy in 3D
        </p>
      </header>

      <div className="relative flex-1 flex flex-col md:flex-row w-full z-10">
        <div className="flex-1 w-full h-[50vh] md:h-auto">
          <Scene galaxyParams={galaxyParams} />
        </div>
        <div
          className={`relative transition-all duration-300 ease-in-out ${isControlsOpen ? 'w-full md:w-96' : 'w-0'}`}
        >
          {isControlsOpen && (
            <ControlPanel galaxyParams={galaxyParams} setGalaxyParams={setGalaxyParams} />
          )}
        </div>

        <button
          onClick={toggleControls}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80 transition-all"
          aria-label={isControlsOpen ? 'Hide controls' : 'Show controls'}
        >
          {isControlsOpen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      <div className="relative z-10 flex justify-center pb-12 pt-6">
        <Button onClick={handleViewGalaxy}>View Galaxy</Button>
      </div>
    </main>
  );
}
