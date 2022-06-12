const mysql = require('mysql');

const mysqlConfig = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

var pool = mysql.createPool(mysqlConfig);

module.exports.connect = function (cb) {
  return new Promise((resolve, reject) => {
    pool.on('connection', function (connection) {
      connection.on('error', function (err) {
        console.log('error');
      });
      connection.on('close', function (err) {
        console.log('error');
      });
    });
    resolve()
  })
}

async function executeQuery (query) {

  return new Promise((resolve, reject) => {
    try{
      pool.query(query, (e, r, f) => {
        if(e){
          reject(e)
        }
        else{
            console.log('success');
          resolve(r)
        }
      });
    }
    catch(ex){
      reject(ex)
    }
  })  
}

module.exports.executeQuery = executeQuery