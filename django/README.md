# Django Login Demo

## Run locally
```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```
Open http://127.0.0.1:8000.

The POST handler validates input and shows a message, but does not authenticate. Replace that step with Django's auth system or a deliberate Supabase Auth integration before using this for real users. Keep CSRF protection enabled.
