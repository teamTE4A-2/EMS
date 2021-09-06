package jp.jc21.r03te4a.teamdev.team2.ems.ems;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface EmsRepository extends MongoRepository<設備管理Bean, String>{
    
}