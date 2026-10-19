# PHP Login Demo

A minimal PHP login form styled with the repository's shared visual approach. The current handler validates input and demonstrates a safe redirect flow; it does **not** authenticate against a user database yet.

## Run
1. Install PHP 8.1+.
2. From this folder run `php -S localhost:8000`.
3. Open http://localhost:8000.

## Supabase next step
Set server-side `SUPABASE_URL` and `SUPABASE_ANON_KEY` in your local environment and use Supabase Auth's password-token endpoint from PHP cURL. Keep keys out of Git. Never use the service-role key for user login. Do not treat the demo's form validation as authentication.
