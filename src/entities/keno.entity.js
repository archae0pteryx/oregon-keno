const { mongo } = require('../utils')

class KenoEntity {
  static async write(data) {
    try {
      const collection = mongo.database.collection('keno')
      return collection.insertOne(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async get(params = {}) {
    try {
      const collection = mongo.database.collection('keno')
      return collection.find(params).toArray()
    } catch (e) {
      throw new Error(e)
    }
  }
  static async last() {
    try {
      const collection = mongo.database.collection('keno')
      return collection.find().limit(1).sort({ $natural: -1 }).toArray()
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = KenoEntity
