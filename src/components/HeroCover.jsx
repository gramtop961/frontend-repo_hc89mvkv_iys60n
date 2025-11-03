import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bus, Star, ShieldCheck } from 'lucide-react';

const HeroCover = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end gap-4 px-6 pb-10 text-white sm:gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Secure tickets • UPI / Cards • Live tracking</span>
        </div>
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
          Smart State Bus Ticketing
          <span className="block bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
            Discover • Book • Pay • Ride
          </span>
        </h1>
        <p className="max-w-2xl text-sm text-white/80 sm:text-base">
          Find nearby buses, see live ETA and occupancy, purchase digital tickets with instant QR validation, and enjoy seamless city-to-city travel.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-orange-100">
            <Bus className="h-4 w-4" />
            Find Buses Near Me
          </button>
          <div className="inline-flex items-center gap-1 text-xs text-white/70">
            <Star className="h-4 w-4 text-yellow-300" />
            Rated 4.8 by passengers
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
