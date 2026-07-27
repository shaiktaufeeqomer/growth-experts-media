import { useState } from 'react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export function useContact() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const submit = async (payload: ContactPayload): Promise<boolean> => {
    setStatus('loading');
    setMessage('');
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: payload.name.trim(),
        email: payload.email.trim().toLowerCase(),
        company: payload.company?.trim() || null,
        message: payload.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setMessage("Thanks for reaching out! We'll get back to you within one business day.");
      return true;
    } catch {
      setStatus('error');
      setMessage('Something went wrong sending your message. Please try again.');
      return false;
    }
  };

  const reset = () => {
    setStatus('idle');
    setMessage('');
  };

  return { status, message, submit, reset };
}
