const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/data";

module.exports = {
  insertMongo: function(col, data) {
    MongoClient.connect (url, function(err, db) {
      if (err) throw err;
      db.collection(col, function (err, collection) {
        if (err) throw err;
        if (Array.isArray(data)) {
          collection.insertMany(data);
        } else {
          collection.insertOne(data);
        }
        db.close();
      })
    })
  },
  getMongo: function (col, query, func) {
    MongoClient.connect (url, function(err, db) {
      if (err) throw err;
      db.collection(col, function (err, collection) {
        if (err) throw err;
        collection.find(query).toArray(function(err, result) {
          func (result);
        });
        db.close();
      })
    })
  },
  deleteMongo: function(col, query) {
    MongoClient.connect (url, function(err, db) {
      if (err) throw err;
      db.collection(col, function (err, collection) {
        if (err) throw err;
        collection.deleteMany(query);
        db.close();
      })
    })
  },
  updateMongo: function(col, query, data) {
    MongoClient.connect (url, function(err, db) {
      if (err) throw err;
      db.collection(col, function (err, collection) {
        if (err) throw err;
        collection.updateMany(query, data, { upsert: true });
        db.close();
      })
    })
  }
}


//插入資料用 insertMongo(DataBase的連結, Collection的名字, 要輸入的資料)
//取得資料用 getMongo(DataBase的連結, Collection名字, 搜尋範圍（無範圍時用"{}"）)
//刪掉資料 deleteMongo(DataBase的連結, Collection名字, 要刪的資料)
//更新資料 deleteMongo(DataBase的連結, Collection名字, 要更新的資料, 更新的資料)
//把Collection刪掉 dropMongo(DataBase連結, Collection名字)
/*
var dropMongo = function(col) {
  MongoClient.connect (url, function(err, db) {
    if (err) throw err;
    db.collection(col, function (err, collection) {
      if (err) throw err;
      collection.drop();
      db.close();
    })
  })
}
*/
