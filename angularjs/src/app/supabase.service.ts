import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private readonly client: SupabaseClient | null;

  constructor() {
    const { supabaseUrl, supabaseAnonKey } = environment;
    this.client = supabaseUrl.includes('YOUR_PROJECT_ID') || supabaseAnonKey.includes('YOUR_SUPABASE_')
      ? null
      : createClient(supabaseUrl, supabaseAnonKey);
  }

  isConfigured(): boolean {
    return this.client !== null;
  }

  async signIn(email: string, password: string) {
    if (!this.client) {
      return { error: new Error('Add your Supabase URL and publishable/anon key to src/environments/environment.ts.') };
    }
    const { error } = await this.client.auth.signInWithPassword({ email, password });
    return { error };
  }
}
