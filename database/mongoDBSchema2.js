// 一度データを消す
use ems;
db.dropDatabase();

// DB切り替え
use ems;

db.createCollection("設備管理台帳",{
  validator:{
    $jsonSchema:{
      "type": "object",
      "properties": {
        "_id":{
          "type":"string"
        },
        "品名":{
          "type":"string"
        },
        "型番":{
          "type":"string"
        },
        "メーカー":{
          "type":"string"
        },
        "仕様":{
          "type":"string"
        },
        "購入日":{
          "bsonType":"date"
        },
        "耐用年数":{
          "type":"number"
        },
        "減価償却":{
          "type":"number"
        },
        "使用不可":{
          "type":"number"
        },
        "貸出可能":{
          "type":"number"
        },
        "設置場所":{
          "type":"string"
        },
        "使用期限":{
          "type":"string"
        },
        "place_id":{
          "type":"number"
        }
      },
      "required": [
        "_id",
        "品名",
        "型番",
        "メーカー",
        "仕様",
        "購入日",
        "耐用年数",
        "設置場所",
        "place_id"
      ]
    }
  }
});

db.設備管理台帳.insertMany(
  [
    {
      "_id": "MC-000001",
      "品名": "ラックマウントサーバ",
      "型番": "PowerEdge R220ラックサーバ",
      "メーカー": "DELL",
      "仕様": "インテ丿レ⑧ Xeon@プロセッサーE3ー1200 v3 DDR3 UDIMM x 4(ECC搭載) 8GB 1000GB (3.5インチ) x 2",
      "購入日": new Date("2016/5/26"),
      "耐用年数": 5,
      "使用不能": 0,
      "設置場所": "仙台支社",
      "使用期限": "~ 2019/7/ 1",
      "place_id" : 2,
    },
    {
      "_id": "MC-000002",
      "品名": "ラックマウントサーバ",
      "型番": "PowerEdge R220ラックサーバ",
      "メーカー": "DELL",
      "仕様": "インテ丿レ⑧ Xeon@プロセッサーE3ー1200 v3 DDR3 UDIMM x 4(ECC搭載) 8GB 1000GB (3.5インチ) x 2",
      "購入日": new Date("2016/5/26"),
      "耐用年数": 5,
      "設置場所": "仙台支社",
      "使用期限": "~ 2019/7/ 1",
      "place_id" : 2,
    },
    {
      "_id": "MC-000003",
      "品名": "ノートパソコン",
      "型番": "HP ProBook 4540s",
      "メーカー": "HP",
      "仕様": "インテルCelelonロセッサーB840 DDR3 2GB 320GBHDD x 2",
      "購入日": new Date("2012/8/1"),
      "耐用年数": 4,
      "減価償却": 1,
      "設置場所": "新潟支社",
      "使用期限": "~2017/7/29",
      "place_id" : 3,
    },
    {
      "_id": "MC-000004",
      "品名": "ノートパソコン",
      "型番": "HP ProBook 4540s",
      "メーカー": "HP",
      "仕様": "インテルCelelonロセッサーB840 DDR3 2GB 320GBHDD x 2",
      "購入日": new Date("2012/8/1"),
      "耐用年数": 4,
      "減価償却": 0,
      "設置場所": "埼玉支社",
      "place_id" : 6,
    },
    {
      "_id": "MC-000005",
      "品名": "ノートパソ",
      "型番": "HP ProBook 4540s",
      "メーカー": "HP",
      "仕様": "インテルCelelonロセッサーB840 DDR3 2GB 320GBHDD x 2",
      "購入日": new Date("2014/5/15"),
      "耐用年数": 4,
      "減価償却": 1,
      "貸出可能": 0,
      "設置場所": "仙台支社",
      "place_id" : 2,
    },
    {
      "_id": "MC-000006",
      "品名": "パソコン",
      "型番": "HP ProBook 4540s",
      "メーカー": "HP",
      "仕様": "インテルCelelonロセッサーB840 DDR3 2GB 320GBHDD x 2",
      "購入日": new Date("2014/5/15"),
      "耐用年数": 4,
      "減価償却": 1,
      "貸出可能": 0,
      "設置場所": "仙台支社",
      "place_id" : 2,
    }
  ]
);