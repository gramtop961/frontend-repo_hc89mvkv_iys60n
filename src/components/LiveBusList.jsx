import React from 'react';
import { Bus, Clock, Battery, User } from 'lucide-react';

const mockBuses = [
  {
    id: 'MH-12-AB-1234',
    category: 'Express AC',
    eta: '06 min',
    occupancy: 28,
    capacity: 40,
    fare: 120,
    speed: 38,
  },
  {
    id: 'MH-14-CD-5678',
    category: 'Ordinary',
    eta: '12 min',
    occupancy: 40,
    capacity: 40,
    fare: 60,
    speed: 31,
  },
  {
    id: 'MH-10-EF-9012',
    category: 'Semi-Luxury',
    eta: '18 min',
    occupancy: 14,
    capacity: 40,
    fare: 95,
    speed: 41,
  },
];

const OccupancyBar = ({ occupancy, capacity }) => {
  const pct = Math.min(100, Math.round((occupancy / capacity) * 100));
  const color = pct >= 90 ? 'bg-red-500' : pct >= 60 ? 'bg-yellow-500' : 'bg-emerald-500';

  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-xs text-neutral-600">
        <span>Occupancy</span>
        <span>{occupancy}/{capacity}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const LiveBusList = () => {
  return (
    <section className="mx-auto mt-8 w-full max-w-6xl">
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-lg font-semibold">Live Buses on your route</h2>
        <span className="text-xs text-neutral-500">Auto-refreshing • GPS synced</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {mockBuses.map((bus) => {
          const full = bus.occupancy >= bus.capacity;
          return (
            <div
              key={bus.id}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                    <Bus className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{bus.category}</div>
                    <div className="text-xs text-neutral-500">{bus.id}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-600">
                  <Clock className="h-4 w-4" />
                  <span>ETA {bus.eta}</span>
                </div>
              </div>

              <OccupancyBar occupancy={bus.occupancy} capacity={bus.capacity} />

              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-neutral-50 p-2 text-center">
                  <div className="font-semibold">₹{bus.fare}</div>
                  <div className="text-neutral-500">Est. Fare</div>
                </div>
                <div className="rounded-xl bg-neutral-50 p-2 text-center">
                  <div className="font-semibold">{bus.speed} km/h</div>
                  <div className="text-neutral-500">Speed</div>
                </div>
                <div className={`rounded-xl p-2 text-center ${full ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  <div className="font-semibold">{full ? 'Full' : 'Seats'}</div>
                  <div className="text-neutral-500">
                    <span className="inline-flex items-center gap-1 text-neutral-600">
                      <User className="h-3 w-3" /> {bus.capacity - bus.occupancy}
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:bg-neutral-300" disabled={full}>
                {full ? 'Standing Only' : 'Book Seat'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LiveBusList;
