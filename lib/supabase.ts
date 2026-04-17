import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client. The service-role key MUST NEVER be exposed to
// the browser — it's used exclusively from server code (API routes, server
// components, server actions).
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  // Defer throwing until the client is actually used, so Next.js can still
  // build without env vars present (e.g. during first deploy).
  console.warn(
    "[supabase] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set. " +
      "Contact form submissions will fail until these are configured."
  );
}

export const supabaseAdmin = createClient(
  supabaseUrl ?? "https://placeholder.supabase.co",
  supabaseServiceRoleKey ?? "placeholder",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export type ContactMessageInsert = {
  name: string;
  email: string;
  phone: string | null;
  topic: string;
  message: string;
};
