# JSP Login Demo

Java Server Pages view with a dedicated servlet handler, packaged as a WAR.

## Run
Use Java 17+, Maven, and Tomcat 10.1 (Jakarta Servlet 6). Run `mvn package` and deploy `target/jsp-login.war`.

The handler performs basic input checks only; it does not authenticate a real user. Add Supabase Auth or another trusted provider before production use.
