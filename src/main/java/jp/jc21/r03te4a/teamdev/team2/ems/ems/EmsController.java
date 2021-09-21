package jp.jc21.r03te4a.teamdev.team2.ems.ems;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EmsController {

  Map<String, Integer> map = new HashMap<String, Integer>(){
    {
      put("東京本社",1);
      put("仙台支社",2);
      put("新潟支社",3);
      put("横浜支社",4);
      put("大阪支社",5);
      put("埼玉支社",6);
    }
  };

  @Autowired
  EmsRepository EmsRepository;
  @GetMapping("/list")
  String list(Model model) {
    Sort sort = Sort.by("placeid").ascending();
    model.addAttribute("list", EmsRepository.findAll(sort));
    return "test";
  }

  @RequestMapping(value="/create",method=RequestMethod.POST)
  String createAdd(@ModelAttribute 設備管理bean bean, Model model){
    bean.setPlaceid(map.get(bean.getSettibasyo()));


    // emsrepository.save(bean);
    System.out.println(bean);
    return "test";
    }
    
  @RequestMapping(value="/update",method=RequestMethod.GET)
  String update() {
    return "update";
  }
  @RequestMapping(value="/create",method=RequestMethod.POST)
  String createAdd(@RequestBody 設備管理bean bean, Model model){
    model.addAttribute("list", EmsRepository.findAll());
    System.out.println(bean);
    return "test";
    }
  }

