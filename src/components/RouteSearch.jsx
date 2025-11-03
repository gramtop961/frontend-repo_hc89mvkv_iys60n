import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Clock } from 'lucide-react';

const cities = [
  'Mumbai',
  'Pune',
  'Nashik',
  'Nagpur',
  'Aurangabad',
  'Satara',
  'Kolhapur',
  'Thane',
  'Vashi',
  'Panvel',
];

const RouteSearch = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('');

  const useMyLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      () => {
        // In a real app, we'd reverse-geocode to nearest stop
        setFrom('Current Location');
      },
      () => {
        setFrom('');
      }
    );
  };

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({ from, to, date, time });
  };

  return (
    <section className="mx-auto -mt-16 w-full max-w-6xl rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:p-6">
      <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-5">
        <div className="col-span-2">
          <label className="mb-1 block text-xs font-medium text-neutral-600">From</label>
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2">
            <MapPin className="h-4 w-4 text-orange-500" />
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              list="from-cities"
              required
              placeholder="Enter start stop"
              className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
            />
            <button
              type="button"
              onClick={useMyLocation}
              className="rounded-lg bg-neutral-100 px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-200"
            >
              Use GPS
            </button>
            <datalist id="from-cities">
              {cities.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
        </div>

        <div className="col-span-2">
          <label className="mb-1 block text-xs font-medium text-neutral-600">To</label>
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2">
            <Navigation className="h-4 w-4 text-orange-500" />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              list="to-cities"
              required
              placeholder="Enter destination"
              className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
            />
            <datalist id="to-cities">
              {cities.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-2 gap-2 sm:flex sm:flex-col">
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-600">Date</label>
            <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2">
              <Calendar className="h-4 w-4 text-orange-500" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-neutral-600">Time</label>
            <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-5">
          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-orange-600 hover:to-orange-700"
          >
            Search Buses
          </button>
        </div>
      </form>
    </section>
  );
};

export default RouteSearch;
