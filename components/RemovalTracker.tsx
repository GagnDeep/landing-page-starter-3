"use client"
import React, { useState } from 'react';

const mockBrokers = [
  { id: '1', name: 'Whitepages', method: 'Online Form', wait: '48 hours', leverage: 'High' },
  { id: '2', name: 'Spokeo', method: 'Email', wait: '24 hours', leverage: 'Medium' },
];

export function RemovalTracker() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="border border-border rounded-lg bg-card p-6 shadow-sm">
      <h3 className="font-heading text-2xl font-semibold mb-4">Removal Tracker</h3>
      <p className="text-sm text-muted-foreground mb-6">Select the sites where you found your information to build an opt-out queue.</p>

      <div className="space-y-4">
        {mockBrokers.map(broker => (
          <div key={broker.id} className="flex items-center justify-between p-4 border border-border rounded-md">
            <div className="flex items-center space-x-4">
               <input
                 type="checkbox"
                 className="h-4 w-4 rounded border-input"
                 checked={selected.includes(broker.id)}
                 onChange={() => toggleSelection(broker.id)}
               />
               <div>
                 <h4 className="font-medium">{broker.name}</h4>
                 <div className="text-xs text-muted-foreground flex space-x-2">
                   <span>{broker.method}</span>
                   <span>•</span>
                   <span>Wait: {broker.wait}</span>
                 </div>
               </div>
            </div>
            <div className="text-sm">
              <span className="px-2 py-1 bg-accent/20 text-accent rounded-sm text-xs font-medium uppercase tracking-wider">{broker.leverage} Leverage</span>
            </div>
          </div>
        ))}
      </div>

      {selected.length > 0 && (
         <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-md">
           <h4 className="font-medium text-primary mb-2">Queue Active ({selected.length} Selected)</h4>
           <p className="text-sm">Your custom opt-out procedure is ready to begin.</p>
           {/* Export functionality to come in Pass 3 */}
         </div>
      )}
    </div>
  );
}
