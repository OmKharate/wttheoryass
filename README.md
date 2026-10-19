# Web Technology Login Lab

A collection of independent login-page examples implemented in different web stacks. Each stack has its own folder and README with setup instructions.

## Stacks

| Folder | Stack | Entry point |
|---|---|---|
| [php/](php/) | PHP | `index.php` |
| [servlet/](servlet/) | Java Servlet (Jakarta) | `src/main/java/lab/wttheory/LoginServlet.java` |
| [django/](django/) | Django | `manage.py` |
| [flask/](flask/) | Flask | `app.py` |
| [nodejs/](nodejs/) | Node.js + Express | `server.js` |
| [reactjs/](reactjs/) | React + Vite | `src/App.jsx` |
| [spring-boot/](spring-boot/) | Spring Boot + Thymeleaf | `src/main/java/lab/wttheory/login/LoginApplication.java` |
| [jsp/](jsp/) | JSP + Jakarta Servlet | `src/main/webapp/login.jsp` |
| [angularjs-1x/](angularjs-1x/) | AngularJS 1.8.x (legacy) | `index.html` |
| [angularjs/](angularjs/) | Modern Angular standalone app | `src/app/app.component.ts` |

## Supabase status

Supabase Auth email/password sign-in is wired in the React, modern Angular, and legacy AngularJS examples. Fill in the local configuration placeholders described in those folders' READMEs.

The PHP, Servlet, Django, Flask, Node.js, Spring Boot, and JSP examples currently demonstrate the login UI and basic request validation only; they are **not authenticated login systems yet**. Their READMEs explain the next integration step.

## Security notes

- These are educational starting points, not production-ready authentication systems.
- Never commit passwords, access tokens, or a Supabase service-role key.
- Browser apps should only use the Supabase publishable/anon key. Configure Row Level Security (RLS) for database access.
- Before production, add appropriate session management, abuse/rate limiting, CSRF defenses where applicable, validation, error handling, and secure deployment settings.
- AngularJS 1.x is end-of-life and included for legacy Web Technology practice only.

See each folder's README for setup instructions.
