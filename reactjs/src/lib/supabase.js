import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Missing values leave the demo view usable and let the form display a helpful message.
export const supabase = url && key && !url.includes("YOUR_PROJECT_ID")
  ? createClient(url, key)
  : null;
