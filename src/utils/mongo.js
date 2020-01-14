const { MongoClient } = require('mongodb')
const { MONGO_DATABASE, MONGO_URL } = process.env

class Mongo {
  constructor() {
    this.client = new MongoClient(MONGO_URL, { useUnifiedTopology: true })
  }
  async init() {
    try {
      await this.client.connect()
      console.log('connected to mongo!')
      this.database = this.client.db(MONGO_DATABASE)
    } catch (e) {
      throw new Error(e)
    }
  }
}

const mongo = new Mongo()

module.exports = mongo
