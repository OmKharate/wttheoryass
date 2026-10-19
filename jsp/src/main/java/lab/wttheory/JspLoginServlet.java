package lab.wttheory;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class JspLoginServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        if (email == null || !email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$") ||
                password == null || password.isBlank()) {
            request.setAttribute("notice", "Enter a valid email and password.");
            request.setAttribute("noticeType", "error");
        } else {
            // No password is stored or logged. Wire a real identity provider here.
            request.setAttribute("notice", "Input validated. Authentication is not connected yet.");
            request.setAttribute("noticeType", "success");
        }
        request.getRequestDispatcher("/login.jsp").forward(request, response);
    }
}
