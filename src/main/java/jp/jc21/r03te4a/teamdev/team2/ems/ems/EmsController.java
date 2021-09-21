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
  EmsRepository emsRepository;
  @GetMapping("/list")
  String list(Model model) {
    Sort sort = Sort.by("placeid").ascending();
    model.addAttribute("list", emsRepository.findAll(sort));
    return "test";
  }
  
  @RequestMapping(value="/create",method=RequestMethod.GET)
  String getCreate(){
    return "create";
  }

  @RequestMapping(value="/create",method=RequestMethod.POST)
  String postCreate(@ModelAttribute 設備管理bean bean, Model model){
    bean.setPlaceid(map.get(bean.getSettibasyo()));
    emsRepository.save(bean);
    System.out.println(bean);
    return "redirect:test";
    }
    
  @RequestMapping(value="/update",method=RequestMethod.GET)
  String getUpdate() {
    return "update";
  }

  @RequestMapping(value="/update",method=RequestMethod.POST)
  String postUpdate(@ModelAttribute 設備管理bean bean, Model model){
  

    return "redirect:test";
    }
  }

