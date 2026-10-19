# Web Technology Login Lab

A collection of independent login-page examples built with different web stacks.

## Stacks

| Folder | Stack | Entry point |
|---|---|---|
| `php/` | PHP | `index.php` |
| `servlet/` | Java Servlet | `src/main/java/...` |
| `django/` | Django | `manage.py` |
| `flask/` | Flask | `app.py` |
| `nodejs/` | Node.js + Express | `server.js` |
| `reactjs/` | React + Vite | `src/App.jsx` |
| `spring-boot/` | Spring Boot | `src/main/java/...` |
| `jsp/` | JSP + Jakarta EE | `src/main/webapp/login.jsp` |
| `angularjs/` | Angular | `src/app/app.component.ts` |

## Important

These are educational login demos. A page displaying a form is not the same as secure authentication. Do not use these examples as production authentication without adding appropriate validation, rate limiting, secure session handling, CSRF protections where applicable, and deployment hardening.

Supabase integration is intentionally configured through environment variables. Never commit a Supabase service-role key or other secrets. For browser apps, only use a Supabase publishable/anon key with Row Level Security configured; server-side secrets must stay on the server.

See each folder's README for setup instructions.
