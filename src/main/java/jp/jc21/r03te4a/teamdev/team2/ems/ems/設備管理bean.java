package jp.jc21.r03te4a.teamdev.team2.ems.ems;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name ="設備管理台帳")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class 設備管理bean{
    @Id
    @GeneratedValue
    private String 管理番号;

    @Column(nullable=false)
    private String 品名;

    @Column(nullable=false)
    private String 型番;

    @Column(nullable=false)
    private String メーカー;

    @Column(nullable=false)
    private String 仕様;

    @Column(nullable=false)
    private String 購入日;

    @Column(nullable=false)
    private String 耐用年数;

    @Column(nullable=false)
    private String 減価償却;

    private Integer 使用不可;
    private String 貸出可能;

    @Column(nullable=false)
    private String 設置場所;

    private String 使用期限;
}
