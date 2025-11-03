import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import RouteSearch from './components/RouteSearch';
import LiveBusList from './components/LiveBusList';
import TicketPreview from './components/TicketPreview';
import { Bus, User } from 'lucide-react';

function App() {
  const [search, setSearch] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="inline-flex items-center gap-2">
            <span className="rounded-lg bg-neutral-900 p-2 text-white">
              <Bus className="h-4 w-4" />
            </span>
            <div className="text-sm font-semibold">
              StateBus
              <span className="ml-1 bg-gradient-to-r from-neutral-900 to-orange-500 bg-clip-text text-transparent">Passenger</span>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
            <User className="h-4 w-4" /> Sign in
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <HeroCover />
        <RouteSearch onSearch={setSearch} />
        <LiveBusList key={JSON.stringify(search)} />
        <TicketPreview />
      </main>

      <footer className="mt-12 border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-neutral-500 sm:flex-row">
          <div>
            © {new Date().getFullYear()} StateBus Prototype. For demo purposes only.
          </div>
          <div className="flex gap-4">
            <span>UPI • Cards • Wallets</span>
            <span>QR/NFC Validation</span>
            <span>Real-time Tracking</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
