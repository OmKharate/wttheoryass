package lab.wttheory;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        if (email == null || !email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$") ||
                password == null || password.isBlank()) {
            request.setAttribute("message", "Enter a valid email and password.");
            request.setAttribute("messageType", "error");
            request.getRequestDispatcher("/index.html").forward(request, response);
            return;
        }
        // Authentication is deliberately not simulated: connect Supabase Auth here.
        request.setAttribute("message", "Input validated. Authentication is not connected yet.");
        request.setAttribute("messageType", "success");
        request.getRequestDispatcher("/index.html").forward(request, response);
    }
}
