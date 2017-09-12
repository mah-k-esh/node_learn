var mysql = require('mysql');


// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter("makekake");


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test"
// });

var success = {
    state: "success"
};

var failure = {
  state: "failure"
}

module.exports = {
  updateWeightInDB: function(newWeight,deviceId){
    //console.log("new weight to update: "+newWeight);

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "test"
    });

    con.connect(function(err) {
      if (err){
        eventEmitter.emit("db_update",failure);
        throw err;
      } 
      var sql = "UPDATE test.smart_jar SET weight_coef="+newWeight+" WHERE deviceId="+deviceId;
      con.query(sql, function (err, result) {
        if (err){
          eventEmitter.emit("db_update",failure);
          throw err;
        } 
        //console.log(result.affectedRows + " record(s) updated");
        //console.log(success);
        con.end();
        eventEmitter.emit("db_update",success);

        //console.log("after emitter");
      });
    });
},
  bar: function () {
    // whatever
  },
  eventEmitter

};