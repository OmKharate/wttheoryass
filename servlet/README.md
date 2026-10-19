# Java Servlet Login Demo

Jakarta Servlet example with a form, server-side validation, and a simple response. This starter demonstrates request handling only; it does not authenticate users yet.

## Run
Use a Java 17+ Maven install and a Jakarta EE 10 compatible servlet container such as Tomcat 10.1. Run `mvn package`, then deploy `target/servlet-login.war`.

Supabase can be added with its Auth REST API using the anon/publishable key from server-side configuration. Do not commit credentials or use a service-role key for user sign-in.
