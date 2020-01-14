const { PuppetService } = require('../services')

class PuppetController {
  static async start(req, res) {
    try {
      const ret = await PuppetService.start()
      return res.send(ret)
    } catch (e) {
      throw new Error(e)
    }
  }

  static async stop(req, res) {
    try {
      const ret = await PuppetService.stop()
      return res.send(ret)
    } catch (e) {
      throw new Error(e)
    }
  }

}

module.exports = PuppetController
