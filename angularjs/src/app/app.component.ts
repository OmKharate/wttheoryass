import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  email = '';
  password = '';
  busy = false;
  notice = '';
  noticeType: 'error' | 'success' = 'error';

  constructor(private readonly auth: SupabaseService) {}

  async signIn(): Promise<void> {
    this.notice = '';
    if (!this.email.trim() || !this.password) {
      this.notice = 'Enter an email address and password.';
      this.noticeType = 'error';
      return;
    }
    this.busy = true;
    try {
      const { error } = await this.auth.signIn(this.email.trim(), this.password);
      if (error) {
        this.notice = error.message;
        this.noticeType = 'error';
      } else {
        this.notice = 'Signed in successfully.';
        this.noticeType = 'success';
      }
    } catch {
      this.notice = 'Unable to sign in. Check your connection and Supabase configuration.';
      this.noticeType = 'error';
    } finally {
      this.busy = false;
    }
  }
}
