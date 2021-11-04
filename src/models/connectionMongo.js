const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

// const MONGO_DB_URL = 'mongodb+srv://flaviofoa:<99221452foa>@clusterinicial.8qwxq.mongodb.net/Ebytr?retryWrites=true&w=majority';
const MONGO_DB_URL = 'mongodb://localhost:27017/Ebytr';
const DB_NAME = 'Ebytr';

module.exports = () => mongodb.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
