const { KenoEntity } = require('../entities')

class MongoController {
  static async write(req, res) {
    try {
      const { body } = req
      const ret = await KenoEntity.write(body)
      return res.send(ret)
    } catch (e) {
      throw new Error(e)
    }
  }
  static async get(req, res) {
    try {
      const ret = await KenoEntity.get()
      return res.send(ret)
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = MongoController
