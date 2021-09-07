package jp.jc21.r03te4a.teamdev.team2.ems.ems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/list")
public class EmsController {

  @Autowired
  EmsRepository EmsRepository;

  @GetMapping
  String list(Model model) {
    model.addAttribute("list", EmsRepository.findAll());
    return "test";
  }

}
