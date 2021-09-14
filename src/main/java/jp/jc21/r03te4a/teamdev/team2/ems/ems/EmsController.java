package jp.jc21.r03te4a.teamdev.team2.ems.ems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EmsController {

  @Autowired
  EmsRepository EmsRepository;
  @GetMapping("/list")
  String list(Model model) {
    model.addAttribute("list", EmsRepository.findAll());
    return "test";
  }

  @RequestMapping(value="/create",method=RequestMethod.GET)
  String create() {
    return "create";
  }
  
  @RequestMapping(value="/update",method=RequestMethod.GET)
  String update() {
    return "update";
  }
}
