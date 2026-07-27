import { useState } from 'react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function useWaitlist() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const submit = async (email: string): Promise<boolean> => {
    setStatus('loading');
    setMessage('');
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ email: email.trim().toLowerCase() });
      if (error) {
        // 23505 = unique_violation (already on the list) — treat as success
        if (error.code === '23505') {
          setStatus('success');
          setMessage("You're already on the list — we'll be in touch soon.");
          return true;
        }
        throw error;
      }
      setStatus('success');
      setMessage("You're on the list! We'll reach out when AI Growth Agents are ready.");
      return true;
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
      return false;
    }
  };

  const reset = () => {
    setStatus('idle');
    setMessage('');
  };

  return { status, message, submit, reset };
}
