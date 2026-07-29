import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

function isValidUrl(url: string | undefined): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function initSupabase(): SupabaseClient {
  if (isValidUrl(supabaseUrl) && supabaseAnonKey) {
    try {
      return createClient(supabaseUrl!, supabaseAnonKey, {
        auth: {
          persistSession: false,
        },
      });
    } catch (error) {
      console.warn('Failed to initialize Supabase client:', error);
    }
  } else {
    console.warn(
      'Supabase credentials missing or invalid. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env file.'
    );
  }

  // Fallback client prevents uncaught top-level exceptions on startup when env vars are missing
  return {
    from: (_table: string) => ({
      insert: async (_data: unknown) => {
        console.warn('Supabase not configured with valid credentials. Request simulated.');
        return { data: null, error: null };
      },
      select: async () => ({ data: [], error: null }),
    }),
  } as unknown as SupabaseClient;
}

export const supabase = initSupabase();

export type WaitlistEntry = {
  id: string;
  email: string;
  created_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
};
