import React from 'react';
import { QrCode, CreditCard, CheckCircle2 } from 'lucide-react';

const FakeQR = () => {
  // Lightweight decorative QR-like grid
  const blocks = Array.from({ length: 121 }, (_, i) => i);
  return (
    <div className="grid aspect-square w-40 grid-cols-11 gap-0.5 rounded-lg bg-white p-1">
      {blocks.map((i) => (
        <div key={i} className={`${(i * 37) % 7 < 3 ? 'bg-neutral-900' : 'bg-neutral-200'} h-3 w-3 rounded-[2px]`} />
      ))}
    </div>
  );
};

const TicketPreview = () => {
  return (
    <section className="mx-auto mt-10 w-full max-w-6xl">
      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold">Active Ticket</h3>
            <p className="text-xs text-neutral-500">Valid for 2h across route BND ➜ CST</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> Ready to board
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
          <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-4">
            <div className="flex items-center justify-between text-sm">
              <div>
                <div className="text-xs text-neutral-500">From</div>
                <div className="font-semibold">Bandra (BND)</div>
              </div>
              <div className="text-neutral-300">• • •</div>
              <div className="text-right">
                <div className="text-xs text-neutral-500">To</div>
                <div className="font-semibold">CST Mumbai</div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg bg-neutral-50 p-2">
                <div className="text-neutral-500">Fare</div>
                <div className="text-sm font-semibold">₹ 42.00</div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-2">
                <div className="text-neutral-500">Validity</div>
                <div className="text-sm font-semibold">1h 54m</div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-2">
                <div className="text-neutral-500">Payment</div>
                <div className="inline-flex items-center gap-1 text-sm font-semibold">
                  <CreditCard className="h-4 w-4" /> UPI
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4">
            <FakeQR />
            <div className="text-center">
              <div className="text-xs text-neutral-500">Scan to validate</div>
              <div className="inline-flex items-center gap-1 text-sm font-medium">
                <QrCode className="h-4 w-4" /> Works with QR / NFC
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <button className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50">
            Download Receipt
          </button>
          <button className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50">
            View History
          </button>
          <button className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
            Validate on Boarding
          </button>
        </div>
      </div>
    </section>
  );
};

export default TicketPreview;
