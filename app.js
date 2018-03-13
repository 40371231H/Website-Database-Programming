const MongoClient = require('mongodb').MongoClient;

// database URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'school';

// url : connect url, function(...){...} : callbackfunction
MongoClient.connect(url, (error, client) => {
    if (error) {
        console.log('資料庫連接失敗');
    } else {
        console.log('資料庫連接成功');
    }

    //use dbName
    const db = client.db(dbName);
    db.collection('student', (error, collection) => {
        if (error) {
            console.log('資料庫內無名為 student 的 collection');
        } else {
            console.log('資料庫內有名為 student 的 collection');
            collection.find().toArray((error, docs) => {
                if (error) {
                    console.log('查詢 student 資料失敗');
                    return;
                }
                for (let i = 0; i < docs.length; i++) {
                    console.log(docs[i]);
                }
                // 確定動作完畢才可將 client 關閉
                client.close();
                console.log('資料庫中斷連線');
            });

        }
    });
});