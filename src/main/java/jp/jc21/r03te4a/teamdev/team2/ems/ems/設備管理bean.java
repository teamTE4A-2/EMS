package jp.jc21.r03te4a.teamdev.team2.ems.ems;

import java.time.LocalDate;

import javax.persistence.*;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.mongodb.core.mapping.*;

@Entity
@Document(collection = "設備管理台帳")

@Data
@AllArgsConstructor
@NoArgsConstructor
public class 設備管理bean{
    @Id
    @GeneratedValue
    private String id;

    @Column(nullable=false)
    @Field("品名")
    private String name;

    @Column(nullable=false, name="型番")
    @Field("型番")
    private String typenumber;

    @Column(nullable=false, name="メーカー")
    @Field("メーカー")
    private String maker;

    @Column(nullable=false, name = "仕様")
    @Field("仕様")
    private String siyou;

    @Column(nullable=false, name = "購入日")
    @Field("購入日")
    private LocalDate kounyubi;

    @Column(nullable=false, name="耐用年数")
    @Field("耐用年数")
    private Integer taiyounennsuu;

    @Column(nullable=false, name = "減価償却")
    @Field("減価償却")
    private Integer genkasyoukyaku;

    @Column(name = "使用不能")
    @Field("使用不能")
    private Integer siyouhunou;
    
    @Column(name = "貸出可能")
    @Field("貸出可能")
    private Integer kasidasikanou;

    @Column(nullable=false, name = "設置場所")
    @Field("設置場所")
    private String settibasyo;

    @Column(name = "使用期限")
    @Field("使用期限")
    private String siyoukigen;

    /*EmsControllerでHashMapを使い設置場所に該当するも値を渡し、EmsRepositoryで値を渡す。
    　データベースに新しいテーブルを作る方法も考えたが、作業量と手を加える範囲をの増加を考え上記の案を採用。
    */
    @Column(name = "place_id")
    @Field("place_id")
    private Integer placeid;
}
