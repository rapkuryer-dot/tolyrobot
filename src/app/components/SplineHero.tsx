'use client';

import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';
import { useCallback, useEffect, useRef, useState } from 'react';
import { applySceneBranding, applyToliHead, preloadToliTexture } from '../libs/splineHeads';

const SCENE_URL = 'https://prod.spline.design/IXTSbGyJCKPpuQVy/scene.splinecode';

export default function SplineHero() {
  const splineRef = useRef<Application | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    preloadToliTexture();
  }, []);

  const handleLoad = useCallback(async (spline: Application) => {
    splineRef.current = spline;
    applySceneBranding(spline);

    if (typeof window !== 'undefined') {
      (window as Window & { __splineApp?: Application }).__splineApp = spline;
    }

    try {
      await applyToliHead(spline);
    } catch (error) {
      console.error('Failed to apply Toli head', error);
    } finally {
      setIsReady(true);
    }
  }, []);

  return (
    <section id="home" className="h-screen flex justify-center items-center bg-black text-white relative overflow-hidden">
      <div
        className={`fixed inset-0 z-[5] transition-opacity duration-200 ${
          isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isReady}
      >
        <Spline scene={SCENE_URL} className="h-full w-full" onLoad={handleLoad} />
      </div>

      {!isReady && (
        <div className="fixed inset-0 z-[10] flex items-center justify-center bg-black">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-fuchsia-400" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white py-8 px-4 z-20 backdrop-filter backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-widest">TOLYROBOT</h1>
          <p className="text-xl text-zinc-300">
            A fan-built 3D tribute to Toli Yakovchuk. Explore the robot. Join the community.
          </p>
        </div>
      </div>
    </section>
  );
}
