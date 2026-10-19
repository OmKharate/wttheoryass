<?php
declare(strict_types=1);
session_start();

$error = '';
$success = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim((string)($_POST['email'] ?? ''));
    $password = (string)($_POST['password'] ?? '');
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $password === '') {
        $error = 'Enter a valid email and password.';
    } else {
        // UI-only demo: replace with a real Supabase Auth request before relying on login.
        $success = 'Form validated. Authentication is not connected yet.';
    }
}
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sign in · PHP</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="shell">
    <section class="login-card" aria-labelledby="title">
      <p class="eyebrow">WEB TECHNOLOGY LAB · PHP</p>
      <h1 id="title">Welcome back</h1>
      <p class="subtext">Sign in to continue to your workspace.</p>
      <?php if ($error): ?><p class="notice error" role="alert"><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?>
      <?php if ($success): ?><p class="notice success" role="status"><?= htmlspecialchars($success, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?>
      <form method="post" action="">
        <label for="email">Email address</label>
        <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required value="<?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?>">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required>
        <button type="submit">Sign in <span aria-hidden="true">→</span></button>
      </form>
      <p class="footnote">Demo page · Authentication not connected</p>
    </section>
  </main>
</body>
</html>
