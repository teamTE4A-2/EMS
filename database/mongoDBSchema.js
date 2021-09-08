let db = null;

db.createCollection("メーカー表",{
    validator:{
        $jsonSchema:{
            "type": "object",
            "properties": {
              "メーカー番号": {
                "type": "number"
              },
              "メーカー名": {
                "type": "string"
              }
            },
            "required": [
              "メーカー番号",
              "メーカー名"
            ]
        }
    }
});

db.createCollection("商品表",{
    validator:{
        $jsonSchema:{
            "type": "object",
            "properties": {
              "商品番号": {
                "type": "integer"
              },
              "型番号": {
                "type": "integer"
              },
              "品名": {
                "type": "string"
              },
              "メーカ番号": {
                "type": "integer"
              },
              "仕様": {
                "type": "string"
              }
            },
            "required": [
              "商品番号",
              "型番号",
              "品名",
              "メーカ番号",
              "仕様"
            ]
        }
    }
});

db.createCollection("耐用年数表",{
    validator:{
        $jsonSchema:{
            "type": "object",
            "properties": {
              "耐用年数番号": {
                "type": "integer"
              },
              "機器名": {
                "type": "string"
              },
              "耐用年数": {
                "type": "integer"
              }
            },
            "required": [
              "耐用年数番号",
              "機器名",
              "耐用年数"
            ]
        }
    }
});

db.createCollection("管理表",{
    validator:{
        $jsonSchema:{
            "type": "object",
            "properties": {
              "管理番号": {
                "type": "integer"
              },
              "商品番号": {
                "type": "integer"
              },
              "購入日": {
                "type": "string"
              },
              "耐用年数番号": {
                "type": "integer"
              }
            },
            "required": [
              "管理番号",
              "商品番号",
              "購入日",
              "耐用年数番号"
            ]
        }
    }
});

db.createCollection("支社表",{
    validator:{
        $jsonSchema:{
            "type": "object",
            "properties": {
              "支社番号": {
                "type": "integer"
              },
              "支社名": {
                "type": "string"
              }
            },
            "required": [
              "支社番号",
              "支社名"
            ]
        }
    }
});

db.createCollection("貸出表",{
    validator:{
        $jsonSchema:{
            "type": "object",
            "properties": {
              "貸出番号": {
                "type": "integer"
              },
              "管理番号": {
                "type": "integer"
              },
              "支店番号": {
                "type": "integer"
              },
              "使用期限": {
                "type": "integer"
              }
            },
            "required": [
              "貸出番号",
              "管理番号",
              "支店番号",
              "使用期限"
            ]
        }
    }
});


var sc = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "メーカー表": {
      "type": "object",
      "properties": {
        "メーカー番号": {
          "type": "integer"
        },
        "メーカー名": {
          "type": "string"
        }
      },
      "required": [
        "メーカー番号",
        "メーカー名"
      ]
    },
    "商品表": {
      "type": "object",
      "properties": {
        "商品番号": {
          "type": "integer"
        },
        "型番号": {
          "type": "integer"
        },
        "品名": {
          "type": "string"
        },
        "メーカ番号": {
          "type": "integer"
        },
        "仕様": {
          "type": "string"
        }
      },
      "required": [
        "商品番号",
        "型番号",
        "品名",
        "メーカ番号",
        "仕様"
      ]
    },
    "耐用年数表": {
      "type": "object",
      "properties": {
        "耐用年数番号": {
          "type": "integer"
        },
        "機器名": {
          "type": "string"
        },
        "耐用年数": {
          "type": "integer"
        }
      },
      "required": [
        "耐用年数番号",
        "機器名",
        "耐用年数"
      ]
    },
    "管理表": {
      "type": "object",
      "properties": {
        "管理番号": {
          "type": "integer"
        },
        "商品番号": {
          "type": "integer"
        },
        "購入日": {
          "type": "string"
        },
        "耐用年数番号": {
          "type": "integer"
        }
      },
      "required": [
        "管理番号",
        "商品番号",
        "購入日",
        "耐用年数番号"
      ]
    },
    "支社表": {
      "type": "object",
      "properties": {
        "支社番号": {
          "type": "integer"
        },
        "支社名": {
          "type": "string"
        }
      },
      "required": [
        "支社番号",
        "支社名"
      ]
    },
    "貸出表": {
      "type": "object",
      "properties": {
        "貸出番号": {
          "type": "integer"
        },
        "管理番号": {
          "type": "integer"
        },
        "支店番号": {
          "type": "integer"
        },
        "使用期限": {
          "type": "integer"
        }
      },
      "required": [
        "貸出番号",
        "管理番号",
        "支店番号",
        "使用期限"
      ]
    }
  },
  "required": [
    "メーカー表",
    "商品表",
    "耐用年数表",
    "管理表",
    "支社表",
    "貸出表"
  ]
}
