# Flask Login Demo

## Run
```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python app.py
```
Visit http://127.0.0.1:5000. The form checks basic input and renders a message; it does not authenticate users. Set `FLASK_SECRET_KEY` in your environment for local session security. For a real system, integrate Supabase Auth or Flask-Login with a real authentication provider.
