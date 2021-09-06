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
          "type":"number"
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
          "type":"string"
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
        "設置場所"
      ]
    }
  }
});