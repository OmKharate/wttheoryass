import os
from flask import Flask, render_template, request

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "local-demo-only-change-me")

@app.route("/", methods=["GET", "POST"])
def login():
    notice = None
    notice_type = ""
    email = ""
    if request.method == "POST":
        email = request.form.get("email", "").strip()
        password = request.form.get("password", "")
        if "@" not in email or "." not in email.rsplit("@", 1)[-1] or not password:
            notice, notice_type = "Enter a valid email and password.", "error"
        else:
            # UI demo only. Connect a real auth provider before deployment.
            notice, notice_type = "Input validated. Authentication is not connected yet.", "success"
    return render_template("login.html", notice=notice, notice_type=notice_type, email=email)

if __name__ == "__main__":
    app.run(debug=os.environ.get("FLASK_DEBUG") == "1")
