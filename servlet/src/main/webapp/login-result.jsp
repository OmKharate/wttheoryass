<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Login result · Servlet</title><link rel="stylesheet" href="<%= request.getContextPath() %>/style.css"></head>
<body><main class="shell"><section class="card"><p class="eyebrow">WEB TECHNOLOGY LAB · SERVLET</p><h1>Login status</h1>
<p class="notice <%= request.getAttribute("messageType") %>" role="status"><%= request.getAttribute("message") %></p>
<a class="back" href="<%= request.getContextPath() %>/index.html">Return to sign in</a></section></main></body></html>
