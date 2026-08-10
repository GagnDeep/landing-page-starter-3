'use client';

import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, Loading03Icon } from '@hugeicons/core-free-icons';

export function CheckoutForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate network request gracefully degrading if NEXT_PUBLIC_CHECKOUT_URL isn't fully operational
    // const url = process.env.NEXT_PUBLIC_CHECKOUT_URL || '/api/mock-checkout';

    try {
      // We wrap the state update in a setTimeout to avoid strict mode cascade warnings
      setTimeout(() => {
        // Since we have no actual backend, we'll simulate a successful form submission
        // In a real scenario, this would redirect to Stripe or a real checkout endpoint
        setStatus('success');
      }, 800);
    } catch (_err) {
      setTimeout(() => setStatus('error'), 800);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-primary/10 border border-primary/20 text-primary p-6 rounded-lg text-center">
        <h3 className="font-heading text-xl mb-2">Check your email</h3>
        <p className="text-sm">We&apos;ve sent a secure access link to the provided address.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HugeiconsIcon icon={Mail01Icon} className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="email"
            id="email"
            required
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            placeholder="Enter your email address"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <HugeiconsIcon icon={Loading03Icon} className="w-5 h-5 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <span>Get Instant Access</span>
        )}
      </button>
      {status === 'error' && (
        <p className="text-sm text-destructive text-center mt-2">
          Something went wrong. Please try again or contact support.
        </p>
      )}
    </form>
  );
}
