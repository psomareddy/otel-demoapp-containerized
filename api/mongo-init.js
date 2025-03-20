ilet error = true

//db = db.getSiblingDB('test');
// move to the admin db - always created in Mongo
//db.auth("admin", "pass");
// log as root admin if you decided to authenticate in your docker-compose file...
//db = db.getSiblingDB('products');
// create and move to your new database
//db.createUser({
//'user': "appuser",
///'pwd': "pass",
//'roles': [{
//    'role': 'dbOwner',
//    'db': 'products'}]});
// user created

/*
db.collection.createIndex({ "product.name": 1 }, { unique: true });

db.collection.insert({ "name": "Ditto", "phone": "1234" });
db.collection.insert({ "name": "Lucario", "phone": "4321" });

*/
let res = [
    db.container.drop(),
    db.container.createIndex({ prodname: 1 }, { unique: true }),
    db.container.insert({ prodname: 'hello', thatfield: 'testing' }),

  ]
  
  printjson(res)
  
  if (error) {
    print('Error, exiting')
    quit(1)
  }
