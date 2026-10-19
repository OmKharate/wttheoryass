package lab.wttheory.login;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
    @GetMapping("/")
    public String login() {
        return "login";
    }

    @PostMapping("/login")
    public String submit(@RequestParam String email,
                         @RequestParam String password,
                         Model model) {
        if (email == null || !email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$") ||
                password == null || password.isBlank()) {
            model.addAttribute("notice", "Enter a valid email and password.");
            model.addAttribute("noticeType", "error");
        } else {
            // Request validation is not authentication; connect a real provider next.
            model.addAttribute("notice", "Input validated. Authentication is not connected yet.");
            model.addAttribute("noticeType", "success");
        }
        return "login";
    }
}
