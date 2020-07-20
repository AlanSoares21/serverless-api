require('dotenv/config');
const { MongoClient } = require('mongodb');
module.exports = () => new Promise((resolve, reject) => {
  MongoClient
    .connect(process.env.DB_URL, { useNewUrlParser: true }, (err, mongoConnection) =>
      err
      ? reject(err)
      : resolve({
          client: mongoConnection.db(config.dbName),
          closeConnectionFn: () => setTimeout(() => {
            mongoConnection.close();
          }, 1000),
          mongoConnection,
        })
    );
});