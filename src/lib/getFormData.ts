import { cache } from 'react';
import { unstable_cache } from 'next/cache';

// Cache the query across requests with a 1-hour revalidation time
export const getFormOptions = unstable_cache(
  async () => {
    // Replace with your actual database query / API call
    const res = await fetch('https://api.example.com/form-options', {
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (!res.ok) throw new Error('Failed to fetch form options');
    return res.json();
  },
  ['form-options-key'], // Cache key
  { revalidate: 3600 }  // Cache for 3,600 seconds (1 hour)
);